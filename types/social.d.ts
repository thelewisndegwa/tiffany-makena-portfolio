export {};

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: (element?: HTMLElement) => void;
      };
    };
    tiktokEmbed?: {
      lib: {
        render: (element?: HTMLElement) => void;
      };
    };
  }
}
