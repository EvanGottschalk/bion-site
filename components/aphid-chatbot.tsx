import Script from "next/script"
import { APHID_CHATBOT } from "@/config/chatbot_config"

/**
 * Renders the Aphid chatbot embed on every page (mounted once in app/layout.tsx).
 *
 * This is a Server Component, so the embed key is read from the server environment
 * (APHID_CHATBOT_KEY in .env.local) rather than being exposed through a NEXT_PUBLIC_
 * variable. The key still reaches the browser inside the rendered script tag — unavoidable
 * for any browser embed, and Aphid issues embed keys as public, origin-scoped credentials —
 * but it is read at request time rather than baked into the client bundle at build time.
 * Everything else comes from config/chatbot_config.ts.
 *
 * If the key is missing the embed is skipped rather than rendering a broken widget; a
 * warning is logged in development so the misconfiguration is obvious locally.
 */
export function AphidChatbot() {
  if (!APHID_CHATBOT.enabled) return null

  const embedKey = process.env.APHID_CHATBOT_KEY

  if (!embedKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[AphidChatbot] Missing APHID_CHATBOT_KEY. Set it in .env.local and restart the dev server to enable the chatbot.",
      )
    }
    return null
  }

  return (
    <Script
      id={APHID_CHATBOT.scriptId}
      src={APHID_CHATBOT.scriptSrc}
      strategy={APHID_CHATBOT.strategy}
      data-aphid-embed={APHID_CHATBOT.embedFlag}
      data-chatbot-id={APHID_CHATBOT.chatbotId}
      data-embed-key={embedKey}
      data-api-base={APHID_CHATBOT.apiBase}
    />
  )
}
