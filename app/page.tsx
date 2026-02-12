"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

/* ─── Animated wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Rava SVG wordmark (green) ─── */
function RavaLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="72"
      height="20"
      viewBox="0 0 120 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#rv)">
        <path
          d="M14.554 7.194C13.545 7.194 12.621 7.42 11.788 7.876c-.835.46-1.526 1.07-2.075 1.83a8.995 8.995 0 0 0-1.251 2.55A11.042 11.042 0 0 0 8.036 15.097v18.374H0V.524h8.036v4.511c.613-1.44 1.523-2.549 2.733-3.331C11.975.917 13.413.524 15.079.524h5.072v6.67h-5.597Z"
          fill="#26E994"
        />
        <path
          d="M33.391 34c-2.414 0-4.533-.407-6.353-1.214-1.823-.803-3.23-1.935-4.217-3.398-.987-1.463-1.482-3.149-1.482-5.07 0-2.044.525-3.802 1.581-5.264 1.053-1.454 2.512-2.633 4.38-3.531 1.866-.898 4.118-1.476 6.751-1.738l11.263-1.307v5.69l-9.814 1.372c-1.317.134-2.414.388-3.291.754-.88.37-1.561.851-2.042 1.44-.484.59-.726 1.362-.726 2.323 0 1.132.47 2.044 1.416 2.742.946.699 2.208 1.046 3.788 1.046 2.018 0 3.744-.357 5.171-1.075 1.427-.723 2.524-1.692 3.291-2.912.767-1.22 1.155-2.614 1.155-4.183v-7.912c0-1.179-.242-2.158-.726-2.942-.484-.786-1.152-1.373-2.007-1.768-.858-.39-1.836-.59-2.933-.59h-2.898c-1.097 0-2.083.2-2.963.59-.877.396-1.573.942-2.076 1.635-.506.699-.822 1.569-.954 2.62H21.537c.132-2.358.89-4.383 2.271-6.08 1.382-1.703 3.106-3 5.171-3.891C31.04.448 33.259-.003 35.629-.003h2.834c2.807 0 5.245.546 7.31 1.635 2.062 1.089 3.667 2.549 4.808 4.383 1.141 1.831 1.71 3.837 1.71 6.015v12.288c0 1.132.308 1.831.924 2.093.616.262 1.669.39 3.162.39v6.67h-5.6c-1.185 0-2.186-.175-2.997-.524a3.762 3.762 0 0 1-1.875-1.501c-.437-.655-.681-1.441-.726-2.358-.744 1.004-1.71 1.878-2.897 2.614a12.67 12.67 0 0 1-4.016 1.703 18.106 18.106 0 0 1-4.875.59V34Z"
          fill="#26E994"
        />
        <path
          d="m64.874 33.476-13.174-32.952h8.168l7.442 18.764c.264.609.503 1.337.726 2.189.22.851.503 1.886.855 3.106h.198c.396-1.217.712-2.232.954-3.04.242-.808.47-1.534.693-2.189l7.313-18.83h8.099l-13.106 32.95h-8.168v.002Z"
          fill="#26E994"
        />
        <path
          d="M97.011 34c-2.414 0-4.533-.407-6.353-1.214-1.823-.803-3.23-1.935-4.217-3.398-.987-1.463-1.482-3.149-1.482-5.07 0-2.044.525-3.802 1.58-5.264 1.054-1.454 2.513-2.633 4.38-3.531 1.867-.898 4.118-1.476 6.752-1.738l11.263-1.307v5.69l-9.814 1.372c-1.317.134-2.414.388-3.291.754-.88.37-1.562.851-2.043 1.44-.484.59-.726 1.362-.726 2.323 0 1.132.47 2.044 1.416 2.742.946.699 2.208 1.046 3.789 1.046 2.018 0 3.744-.357 5.171-1.075 1.427-.723 2.524-1.692 3.291-2.912.767-1.22 1.155-2.614 1.155-4.183v-7.912c0-1.179-.242-2.158-.726-2.942-.484-.786-1.152-1.373-2.007-1.768-.857-.39-1.836-.59-2.933-.59h-2.897c-1.097 0-2.084.2-2.964.59-.877.396-1.572.942-2.075 1.635-.506.699-.822 1.569-.954 2.62H85.157c.132-2.358.891-4.383 2.271-6.08 1.383-1.703 3.107-3 5.171-3.891C94.661.448 96.879-.003 99.249-.003h2.834c2.807 0 5.246.546 7.31 1.635 2.062 1.089 3.668 2.549 4.809 4.383 1.14 1.831 1.71 3.837 1.71 6.015v12.288c0 1.132.307 1.831.923 2.093.616.262 1.669.39 3.162.39v6.67h-5.6c-1.185 0-2.186-.175-2.997-.524a3.762 3.762 0 0 1-1.875-1.501c-.437-.655-.682-1.441-.726-2.358-.745 1.004-1.71 1.878-2.897 2.614a12.67 12.67 0 0 1-4.017 1.703 18.106 18.106 0 0 1-4.874.59V34Z"
          fill="#26E994"
        />
      </g>
      <defs>
        <clipPath id="rv">
          <rect width="120" height="34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ─── X icon ─── */
function XIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─── Infrastructure diagram (Figure 1) ─── */
function InfrastructureDiagram() {
  return (
    <figure className="my-14 md:my-20">
      <svg
        viewBox="0 0 400 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[380px] mx-auto"
      >
        {/* Top label */}
        <text
          x="200"
          y="14"
          textAnchor="middle"
          className="font-sans"
          fill="#444444"
          fontSize="8.5"
          letterSpacing="0.14em"
        >
          ILLIQUID TOKENIZED POSITION
        </text>

        {/* Vertical line down from top */}
        <line x1="200" y1="24" x2="200" y2="48" stroke="#333333" strokeWidth="0.75" />
        {/* Small arrow dot */}
        <circle cx="200" cy="48" r="1.5" fill="#333333" />

        {/* Branch lines to three boxes */}
        <line x1="200" y1="48" x2="72" y2="60" stroke="#333333" strokeWidth="0.75" />
        <line x1="200" y1="48" x2="200" y2="60" stroke="#333333" strokeWidth="0.75" />
        <line x1="200" y1="48" x2="328" y2="60" stroke="#333333" strokeWidth="0.75" />

        {/* Pricing */}
        <rect x="22" y="60" width="100" height="44" rx="0" stroke="#333333" strokeWidth="0.75" fill="none" />
        <text x="72" y="80" textAnchor="middle" fill="#111111" fontSize="8" letterSpacing="0.12em" fontWeight="500" className="font-sans">
          PRICING
        </text>
        <text x="72" y="93" textAnchor="middle" fill="#666666" fontSize="7" className="font-sans">
          Valuation &amp; Discount
        </text>

        {/* Product */}
        <rect x="150" y="60" width="100" height="44" rx="0" stroke="#333333" strokeWidth="0.75" fill="none" />
        <text x="200" y="80" textAnchor="middle" fill="#111111" fontSize="8" letterSpacing="0.12em" fontWeight="500" className="font-sans">
          PRODUCT
        </text>
        <text x="200" y="93" textAnchor="middle" fill="#666666" fontSize="7" className="font-sans">
          Restructuring &amp; Index
        </text>

        {/* Market */}
        <rect x="278" y="60" width="100" height="44" rx="0" stroke="#333333" strokeWidth="0.75" fill="none" />
        <text x="328" y="80" textAnchor="middle" fill="#111111" fontSize="8" letterSpacing="0.12em" fontWeight="500" className="font-sans">
          MARKET
        </text>
        <text x="328" y="93" textAnchor="middle" fill="#666666" fontSize="7" className="font-sans">
          Secondary Venues
        </text>

        {/* Converge lines from boxes */}
        <line x1="72" y1="104" x2="200" y2="120" stroke="#333333" strokeWidth="0.75" />
        <line x1="200" y1="104" x2="200" y2="120" stroke="#333333" strokeWidth="0.75" />
        <line x1="328" y1="104" x2="200" y2="120" stroke="#333333" strokeWidth="0.75" />

        {/* Small arrow dot */}
        <circle cx="200" cy="120" r="1.5" fill="#333333" />

        {/* Vertical line down to bottom */}
        <line x1="200" y1="120" x2="200" y2="140" stroke="#333333" strokeWidth="0.75" />

        {/* Bottom label */}
        <text
          x="200"
          y="154"
          textAnchor="middle"
          className="font-sans"
          fill="#111111"
          fontSize="8.5"
          letterSpacing="0.14em"
          fontWeight="600"
        >
          LIQUID INSTRUMENT
        </text>
      </svg>
      <figcaption className="mt-4 font-sans text-[10px] text-[#888] text-center tracking-[0.02em]">
        <span className="text-[#666]">Fig. 1</span>
        &ensp;The liquidity infrastructure stack.
      </figcaption>
    </figure>
  );
}

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Top rule */}
      <motion.div
        className="w-full h-[1px] bg-ink"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      />

      {/* ─── Main ─── */}
      <main className="flex justify-center px-6 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
        <article className="w-full max-w-[480px] text-justify">
          {/* Brand */}
          <FadeIn delay={0.3}>
            <h1 className="font-sans text-[15px] md:text-[17px] tracking-[0.2em] text-ink text-left mb-3">
              <span className="font-light">ra</span><span className="font-semibold uppercase">variant</span><span className="font-light text-[#999] uppercase ml-2">labs</span>
            </h1>
            <p className="font-serif text-[14px] md:text-[15px] leading-[1.9] text-[#888] text-left mb-12 md:mb-16">
              We build the infrastructure that connects pricing, product
              design, and secondary markets into a single liquidity layer for
              tokenized assets.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <hr className="border-[#ddd]" />
          </FadeIn>

          {/* ═══ Body ═══ */}
          <FadeIn>
            <section className="mt-12 md:mt-14">
              <p className="font-serif text-[14px] md:text-[15px] leading-[1.9] text-[#222] mb-5">
                Tokenization makes assets digitally transferable but does not
                make them liquid. A tokenized position can move between wallets
                in seconds, yet converting it back to cash remains bound by
                redemption windows, notice periods, and gate mechanisms that
                have not changed. The wrapper is new. The constraint is not.
              </p>
              <p className="font-serif text-[14px] md:text-[15px] leading-[1.9] text-[#222] mb-5">
                We believe liquidity is not a property of the asset. It is a
                property of the infrastructure around it. With the right pricing
                frameworks, product structures that rewrap positions into more
                attractive instruments, and secondary markets that provide
                standing exit pathways, the effective liquidity of any tokenized
                asset can be fundamentally changed without modifying the asset
                itself.
              </p>
              <p className="font-serif text-[14px] md:text-[15px] leading-[1.9] text-[#222]">
                Ravariant Labs researches and builds this infrastructure.
              </p>
            </section>
          </FadeIn>

          {/* ═══ Figure ═══ */}
          <FadeIn>
            <InfrastructureDiagram />
          </FadeIn>

          {/* ═══ Post-diagram text ═══ */}
          <FadeIn>
            <section>
              <p className="font-serif text-[14px] md:text-[15px] leading-[1.9] text-[#222]">
                When these three layers work together, the liquidity profile of
                a tokenized asset changes. Not because the asset is different,
                but because the systems around it are. The goal is to make
                every tokenized position functional within broader financial
                infrastructure, whether as collateral, a tradeable instrument,
                or a component in a larger portfolio.
              </p>
            </section>
          </FadeIn>

          <hr className="border-[#ddd] my-12 md:my-14" />

          {/* ═══ Rava ═══ */}
          <FadeIn>
            <section>
              <div className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] text-[#bbb] uppercase mb-6 text-left">
                Projects
              </div>

              <motion.div
                className="group border border-[#ddd] bg-white p-6 md:p-8 transition-all duration-300 hover:border-[#26E994]/40 hover:shadow-[0_2px_20px_rgba(38,233,148,0.06)]"
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-[2px] bg-[#26E994] mb-5" />
                <RavaLogo className="mb-3" />
                <p className="font-serif text-[13px] md:text-[14px] leading-[1.75] text-[#444] mb-6 text-left">
                  Liquidity coordination infrastructure for tokenized
                  real-world assets.
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-[#eee] text-left">
                  <a
                    href="https://rava.money"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[11px] md:text-[12px] font-medium text-[#666] hover:text-[#26E994] transition-colors flex items-center gap-1.5"
                  >
                    <span>🌐</span>
                    rava.money
                  </a>
                  <span className="text-[#ddd] text-[8px]">·</span>
                  <a
                    href="https://x.com/RavaMoney"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-[11px] md:text-[12px] text-[#999] hover:text-[#111] transition-colors flex items-center gap-1.5"
                  >
                    <XIcon size={11} />
                    @RavaMoney
                  </a>
                </div>
              </motion.div>
            </section>
          </FadeIn>
        </article>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#ddd]">
        <div className="px-6 md:px-8 py-10 md:py-12 text-center">
          <p className="font-sans text-[9px] md:text-[10px] text-[#bbb] tracking-[0.04em]">
            © 2026 Ravariant Labs.
          </p>
        </div>
      </footer>

      {/* Bottom rule */}
      <div className="w-full h-[1px] bg-ink" />
    </div>
  );
}
