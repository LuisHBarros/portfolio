/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono Variable"', "var(--font-ibm)", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        bg2: "var(--bg2)",
        bg3: "var(--bg3)",
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
        "accent-bright": "var(--accent-bright)",
        amber: "var(--amber)",
        cyan: "var(--cyan)",
        muted: "var(--muted)",
        text: "var(--text)",
        "text-dim": "var(--text-dim)",
        border: "var(--border)",
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        fadein: "fadein 0.22s ease",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadein: {
          "0%": { opacity: "0", transform: "translateY(5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}
