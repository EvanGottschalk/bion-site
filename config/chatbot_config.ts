// Configuration for the Aphid chatbot embed. Consumed by components/aphid-chatbot.tsx,
// which is mounted site-wide in app/layout.tsx — nothing in that component is hardcoded.
//
// The embed key is intentionally NOT stored here: it is read at render time from the
// APHID_CHATBOT_KEY environment variable (see .env.local), so it stays out of the repo.
// The key is still delivered to the browser inside the embed <script> tag, which is how
// Aphid's embed is designed to work — it is a public, origin-scoped embed key, not a secret.

export const APHID_CHATBOT = {
  enabled: true,                                        // Set false to remove the chatbot from every page
  scriptSrc: "https://control.aphid.com/embed/chatbot.js", // Aphid's embed loader
  chatbotId: "6aaa054cff0babce1e85b871",                // Identifies which chatbot to render
  apiBase: "https://control.aphid.com/embed",           // API the embed talks to (data-api-base)
  embedFlag: "1",                                       // data-aphid-embed — marks this as an Aphid embed
  scriptId: "aphid-chatbot",                            // next/script id; also de-dupes the script
  // next/script loading strategy. "afterInteractive" loads the embed once the page is
  // interactive, which matches Aphid's guidance to load it after page content.
  strategy: "afterInteractive" as const,
}
