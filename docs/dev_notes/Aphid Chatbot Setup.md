# Aphid Chatbot Setup

The Aphid chatbot is embedded site-wide as a floating launcher in the bottom-right corner
of every page. Opening it starts a conversation with the "Root — BION Site" bot, which is
configured on Aphid's side (greeting, quick-reply chips, knowledge) — not in this repo.

## How it's wired up

| Piece | File | Role |
| --- | --- | --- |
| Config | `config/chatbot_config.ts` | `APHID_CHATBOT` — script URL, chatbot id, API base, enable flag |
| Component | `components/aphid-chatbot.tsx` | Server Component that reads the embed key and renders the `<Script>` |
| Mount point | `app/layout.tsx` | `<AphidChatbot />` is the last element in `<body>`, so it loads after page content |

The component uses `next/script` with the `afterInteractive` strategy. Aphid's setup guide
says to paste the snippet immediately before `</body>` so it loads after page content;
`afterInteractive` is the App Router equivalent — Next injects the script once the page is
interactive rather than blocking the initial render.

## The embed key

The key lives in `.env.local` as `APHID_CHATBOT_KEY` (untracked — `.gitignore` excludes
`.env*`), and is read server-side:

```
APHID_CHATBOT_KEY=aphid_emb_...
```

There is deliberately no `NEXT_PUBLIC_` prefix. `components/aphid-chatbot.tsx` is a Server
Component, so it can read the plain server variable and render it into the script tag —
Vercel flags `NEXT_PUBLIC_` variables because that prefix inlines the value into the client
bundle at build time, and this approach avoids that warning entirely.

The key does still reach the browser inside the rendered script tag — unavoidable for any
browser embed, and Aphid issues embed keys (`aphid_emb_*`) as public, origin-scoped
credentials rather than secrets. The difference is that it is read from the environment at
request time instead of being baked into the bundle, so rotating the key takes effect on
redeploy without needing a rebuild of the client bundle.

**When deploying:** add `APHID_CHATBOT_KEY` to the hosting environment (e.g. Vercel →
Project → Settings → Environment Variables). If it's missing, the component renders nothing
instead of a broken widget, and logs a warning in development. Restart the dev server after
editing `.env.local` — Next only reads env files at startup.

## Turning it off

Set `enabled: false` in `config/chatbot_config.ts` to remove the chatbot from every page.

## Swapping in a different bot

Change `chatbotId` in `config/chatbot_config.ts` and update `APHID_CHATBOT_KEY` to the
matching embed key from that bot's setup guide in Aphid Control.

## Verified

Confirmed on `localhost:3000`: the script loads from `control.aphid.com`, mounts an
`#aphid-embed-root` container, shows the launcher bubble, and opens to a working chat panel
with the bot's greeting. Console is clean apart from the embed's own informational
`[Aphid embed] starting dialog-first chat mode` message.
