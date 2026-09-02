"use client";

import { useState, type FormEvent } from "react";
import { siteContent } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function WorkWithTiffany() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-light section-padding relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="serif-display text-[clamp(8rem,25vw,20rem)] leading-none text-ink/[0.03]">
          CREATE
        </span>
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <Reveal>
          <SectionHeading
            index="06 / COLLABORATE"
            title={siteContent.contact.heading}
            subtitle={siteContent.contact.subheading}
            theme="light"
          />
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="max-w-md text-[clamp(0.95rem,1.1vw,1.05rem)] leading-relaxed text-ink/75">
              {siteContent.contact.description}
            </p>

            <div className="mt-10 space-y-4">
              <p className="editorial-metadata text-ink/40">ALTERNATIVE CONTACT</p>
              <div className="flex flex-wrap gap-4">
                {siteContent.contact.alternatives.map((method) => (
                  <MagneticButton
                    key={method.label}
                    href={method.url}
                    className="editorial-label border border-ink/20 px-4 py-2 text-ink/70 transition-all hover:border-ink hover:text-ink"
                    cursorLabel="CONTACT"
                  >
                    {method.label}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {submitted ? (
              <div className="border border-ink/15 p-8">
                <p className="serif-display text-3xl text-ink">
                  Inquiry received.
                </p>
                <p className="mt-4 text-sm text-ink/60">
                  Thank you for reaching out. This form is a frontend placeholder
                  — connect it to your preferred email service or API.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="editorial-metadata mb-2 block text-ink/50">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="editorial-metadata mb-2 block text-ink/50">
                      Brand / Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="editorial-metadata mb-2 block text-ink/50">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="editorial-metadata mb-2 block text-ink/50">
                    Collaboration Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    className="w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    {siteContent.contact.collaborationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="editorial-metadata mb-2 block text-ink/50">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none border-b border-ink/20 bg-transparent py-3 text-ink outline-none transition-colors focus:border-ink"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  className="editorial-label inline-flex border border-ink px-8 py-4 text-ink transition-all hover:bg-ink hover:text-ivory"
                  cursorLabel="CONTACT"
                >
                  {siteContent.contact.cta}
                </MagneticButton>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
