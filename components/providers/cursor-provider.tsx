"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from "react";
import { cn } from "@/lib/utils";

type CursorState = {
  label: string;
  active: boolean;
  variant: "default" | "view" | "open" | "explore" | "contact";
};

type CursorContextValue = {
  setCursor: (state: Partial<CursorState>) => void;
  resetCursor: () => void;
};

const defaultState: CursorState = {
  label: "",
  active: false,
  variant: "default",
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    return {
      setCursor: () => undefined,
      resetCursor: () => undefined,
    };
  }
  return context;
}

function useCustomCursorEnabled() {
  return useSyncExternalStore(
    (onStoreChange) => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const finePointer = window.matchMedia("(pointer: fine)");

      reducedMotion.addEventListener("change", onStoreChange);
      finePointer.addEventListener("change", onStoreChange);

      return () => {
        reducedMotion.removeEventListener("change", onStoreChange);
        finePointer.removeEventListener("change", onStoreChange);
      };
    },
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const enabled = useCustomCursorEnabled();
  const [state, setState] = useState<CursorState>(defaultState);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-active");

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  const setCursor = useCallback((next: Partial<CursorState>) => {
    setState((current) => ({ ...current, ...next, active: true }));
  }, []);

  const resetCursor = useCallback(() => {
    setState(defaultState);
  }, []);

  return (
    <CursorContext.Provider value={{ setCursor, resetCursor }}>
      {children}
      {enabled ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-0 z-[40] mix-blend-difference"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          <div
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory/80 transition-all duration-300 ease-out",
              state.active ? "h-16 w-16 bg-ivory/10" : "h-2.5 w-2.5 bg-ivory",
            )}
          />
          {state.label ? (
            <span className="editorial-label absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[0.55rem] text-ivory">
              {state.label}
            </span>
          ) : null}
        </div>
      ) : null}
    </CursorContext.Provider>
  );
}
