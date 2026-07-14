// UI configuration for the top-right buttons, drop-down menu, and home-page buttons.
// Consumed by components/navigation.tsx, components/config-button.tsx, and app/page.tsx —
// nothing in those components should be hardcoded.

export const TOP_RIGHT_BUTTONS = [
    {
        // Waitlist Signup
        buttonType: 'shape',
        label: 'Get Early Access',        // Full label shown on the button (>= 480px / xs breakpoint)
        action: 'waitlist',       // 'waitlist' opens the waitlist popup on click; 'link' navigates to href
        href: '',                 // Used only when action is 'link'
        fontColor: '#0a0a0a',     // Text color (was primary-foreground / "black text on white buttons")
        fontSize: 15,             // px — was text-sm(14)/sm:text-base(16); using the desktop value
        fillColor: '#f2f2f2',     // Button background (was primary / "white primary buttons")
        highlightColor: '#9ca1ff',// Hover background (was primary/90)
        paddingLeft: 16,          // px — was px-4. More padding increases the size of the button
        paddingRight: 16,
        paddingTop: 8,            // px — was py-2
        paddingBottom: 8,
        borderRadius: 6,          // px — was rounded-md
        mobile: {
            fontSize: 14,         // px — was text-sm(14) on mobile
            label:'Get'           // Shortened label shown on mobile
        }
    },
    {
        // X Link
        buttonType: 'icon',
        action: 'link',
        href: 'https://x.com/BIONFoundation',                 // Used only when action is 'link'
        target: '_blank',
        ariaLabel: 'BION Foundation on X', // Accessible label (icon has no visible text)
        icon: '/icons/x-logo.svg', // Icon file; recolored via CSS mask to fillColor below
        fillColor: '#f2f2f2',     // This color overlays the pixels of the icon, thus making it appear on the screen with the color selected here, no matter the original colors in the file
        highlightColor: '#9ca1ff',// Icon color on hover
        width: 22,                // px — rendered icon size (square)
        paddingLeft: 8,
        paddingRight: 2,
        paddingTop: 8,
        paddingBottom: 8,
        mobile: {
          width: 20,              // px — rendered icon size on mobile
        }
    },
    {
        // Aphid Link
        buttonType: 'icon',
        action: 'link',
        href: 'https://aphid.com',                 // Used only when action is 'link'
        target: '_blank',
        ariaLabel: 'Powered by Aphid AI', // Accessible label (icon has no visible text)
        icon: '/icons/aphid-logo.png', // Icon file; recolored via CSS mask to fillColor below
        fillColor: '#f2f2f2',     // This color overlays the pixels of the icon, thus making it appear on the screen with the color selected here, no matter the original colors in the file
        highlightColor: '#9ca1ff',// Icon color on hover
        width: 33,                // px — rendered icon size (square)
        paddingLeft: 2,
        paddingRight: 0,
        paddingTop: 6,
        paddingBottom: 8,
        mobile: {
          width: 30,              // px — rendered icon size on mobile
        }
    }
] as const;

// Shape of a home-page CTA button. Consumed by components/config-button.tsx.
export type PageButton = {
    buttonType: 'shape'
    label: string
    arrow: boolean               // render a trailing arrow (→) after the label
    action: 'waitlist' | 'link'  // 'waitlist' opens the popup; 'link' navigates to href
    href: string                 // used only when action is 'link'
    target?: '_blank' | '_self'  // link target (only relevant when action is 'link')
    fontColor: string
    highlightFontColor?: string  // text color on hover (defaults to fontColor)
    fontSize: number             // px (desktop)
    fillColor: string            // use 'transparent' for an outline-style button
    highlightColor: string       // hover background
    borderColor: string          // use 'transparent' when there is no border
    highlightBorderColor?: string // border color on hover (defaults to borderColor)
    borderWidth: number          // px; 0 = no border
    highlightBorderWidth?: number // border width on hover in px (defaults to borderWidth)
    paddingLeft: number
    paddingRight: number
    paddingTop: number
    paddingBottom: number
    borderRadius: number
    mobile: {
        fontSize: number         // px (mobile)
    }
}

export const HERO_SECTION_BUTTONS: PageButton[] = [
    {
        // Read Whitepaper — solid button, opens the PDF in a new tab
        buttonType: 'shape',
        label: 'Read Whitepaper',
        arrow: true,
        action: 'link',
        href: '/whitepaper',
        target: '_blank',
        fontColor: '#0a0a0a',
        fontSize: 14,
        fillColor: '#f2f2f2',
        highlightColor: '#9ca1ff',// Hover background (was primary/90)
        borderColor: 'transparent',
        borderWidth: 0,
        paddingLeft: 24,          // px — was px-6 (size="lg")
        paddingRight: 24,
        paddingTop: 10,           // px — matches the size="lg" h-10 height
        paddingBottom: 10,
        borderRadius: 6,          // px — rounded-md
        mobile: {
            fontSize: 14,
        }
    },
    {
        // Waitlist Signup — outline / transparent button, opens the popup
        buttonType: 'shape',
        label: 'Get Early Access',
        arrow: false,
        action: 'waitlist',       // 'waitlist' opens the waitlist popup on click; 'link' navigates to href
        href: '',
        fontColor: '#ffffff',
        highlightFontColor: '#0a0a0a',
        fontSize: 14,
        fillColor: 'transparent',
        highlightColor: '#9ca1ff',
        borderColor: 'rgba(255, 255, 255, 0.3)', // was border-white/30
        highlightBorderColor: '#9ca1ff',
        borderWidth: 1,
        highlightBorderWidth: 1,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 6,
        mobile: {
            fontSize: 14,
        }
    },
]


export const BOTTOM_SECTION_BUTTONS: PageButton[] = [
    {
        // Waitlist Signup — solid button, opens the popup
        buttonType: 'shape',
        label: 'Get Early Access',
        arrow: false,
        action: 'waitlist',       // 'waitlist' opens the waitlist popup on click; 'link' navigates to href
        href: '',
        fontColor: '#0a0a0a',
        fontSize: 14,
        fillColor: '#f2f2f2',
        highlightColor: '#9ca1ff',
        borderColor: 'transparent',
        borderWidth: 0,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 6,
        mobile: {
            fontSize: 14,
        }
    },
  ]

export const TOP_RIGHT_MENU = {
    ACTIVE: false,
    iconColor: '#ffffff',         // Color of the hamburger menu icon in the top right (was text-white)
    iconHighlightColor: '#9ca1ff',// Hamburger icon hover color (was hover:text-primary, mapped to the accent)
    menuOptionStyling: {
        fontColor: '#ffffff',         // Menu item text color (was text-white)
        activeFontColor: '#9ca1ff',   // Text color of the active/current page item (was text-[#9ca1ff])
        hoverFontColor: '#9ca1ff',    // Text color on hover (was hover:text-[#9ca1ff])
        fontSize: 20,                 // px — was text-lg(18)/sm:text-xl(20); using the desktop value
        fillColor: 'transparent',     // Menu item background at rest
        activeFillColor: 'rgba(156, 161, 255, 0.1)', // Active item background (was bg-[#9ca1ff]/10)
        hoverFillColor: 'rgba(255, 255, 255, 0.05)', // Hover background (was hover:bg-white/5)
        accentBarColor: '#9ca1ff',    // Left indicator bar on the active item (was bg-[#9ca1ff])
        paddingLeft: 16,          // px — was px-4. More padding increases the space adjacent to the text
        paddingRight: 16,
        paddingTop: 16,           // px — was py-4
        paddingBottom: 16,
        borderRadius: 8,          // px — was rounded-lg
    },
    menuOptions: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Team',
            href: '/team',
        },
        {
            label: 'Whitepaper',
            href: '/whitepaper',
        },
        {
            label: 'Exchanges',
            href: '/exchanges',
        },
        {
            label: 'Contact',
            href: '/contact',
        },
    ],
    mobile: {
        menuOptionStyling: {
            fontSize: 18,         // px — was text-lg(18) on mobile
        }
    }
};

export const WAITLIST_POPUP = {
  ACTIVE: true, // Master flag — when false, "Get BION" buttons fall back to their href/link behavior

  // Supabase table that submissions are inserted into. Each field's `name` below
  // (email, x, instagram, linkedin) must match a column on this table.
  table: 'waitlist_signups',

  windowStyle: {
    paddingLeft: 24,          // px — was p-6 (24px) on the dialog
    paddingRight: 24,
    paddingTop: 24,
    paddingBottom: 24,
    outerGlow: {
      color: '#ffffff',       // Glow color around the popup window
      blur: 48,               // px — how far the glow diffuses out
      spread: 2,              // px — how far the glow extends before diffusing
      opacity: 0.25,          // 0–1 — glow strength
    },
  },

  // Header copy shown at the top of the popup
  title: {
    label: 'Join the BION Whitelist',
    alignment: 'center'
  },
  description:
    'Get whitelisted for BION airdrops and early access to new BION features.',

  // Ordered list of fields rendered in the form. Add/remove/reorder here — the UI follows.
  fields: [
    {
      name: 'email',
      label: 'Email',
      placeholder: 'you@example.com',
      type: 'email',
      required: true,
      autoComplete: 'email',
    },
    {
      name: 'aphid',
      label: 'Aphid Clone URL',
      placeholder: 'https://aphid.ai/your-clone',
      type: 'url',
      required: false,
      autoComplete: 'off',
    },
    {
      name: 'x',
      label: 'X Handle',
      placeholder: '@yourhandle',
      type: 'text',
      required: false,
      autoComplete: 'off',
    },
    {
      name: 'instagram',
      label: 'Instagram Handle',
      placeholder: '@yourhandle',
      type: 'text',
      required: false,
      autoComplete: 'off',
    },
  ],

  // Marker denoting required fields, appended to their label
  requiredMarker: ' *',

  // Small print shown beneath the form
  privacyNote: "- Earn more from your expertise with BION -",

  // Submit button + in-flight state
  submitLabel: 'Get Early Access',
  submittingLabel: 'Joining…',

  // Validation + submission messages
  errors: {
    emailRequired: 'Please enter your email address.',
    emailInvalid: 'Please enter a valid email address.',
    alreadyJoined: "You're already on the list — see you soon!",
    generic: 'Something went wrong. Please try again in a moment.',
  },

  // Success view shown after a successful submission
  success: {
    title: "You're on the list! 🎉",
    message:
      "Thanks for joining the BION waitlist. We'll be in touch with airdrop and early-access details.",
    dismissLabel: 'Done',
  },
} as const


// A footer column of text links (used for the left and middle columns).
// A link either navigates (href) or, when action is 'waitlist', opens the waitlist popup.
export type FooterLinkColumn = {
  title: { label: string; fontColor: string; fontSize: number }  // px
  linkStyling: { fontColor: string; highlightFontColor: string; fontSize: number } // px
  links: { label: string; href?: string; target?: '_blank' | '_self'; action?: 'waitlist' }[]
}

// A footer column of social icon links (used for the right column).
export type FooterSocialColumn = {
  title: { label: string; fontColor: string; fontSize: number } // px
  iconStyling: { fontColor: string; highlightFontColor: string; size: number } // px
  links: { icon: 'x' | 'github' | 'telegram'; ariaLabel: string; href: string; target?: '_blank' | '_self' }[]
}

export const FOOTER_COLUMN_LEFT: FooterLinkColumn = {
  title: {
    label: 'Quick Links',
    fontColor: '#f2f2f2',     // near-white (was the default foreground)
    fontSize: 16,             // px — was text-base semibold heading
  },
  linkStyling: {
    fontColor: '#a3a3a3',        // muted gray (was text-muted-foreground)
    highlightFontColor: '#f2f2f2',// near-white on hover (was hover:text-primary)
    fontSize: 14,                // px — was text-sm
  },
  links: [
    // { label: 'About BION', href: '/about' },
    { label: 'Whitepaper', href: '/whitepaper', target: '_blank' },
    { label: 'Join Waitlist', action: 'waitlist' },
    // { label: 'Team', href: '/team' },
    // { label: 'Exchanges', href: '/exchanges' },
  ],
}

export const FOOTER_COLUMN_MIDDLE: FooterLinkColumn = {
  title: {
    label: 'Resources',
    fontColor: '#f2f2f2',
    fontSize: 16,
  },
  linkStyling: {
    fontColor: '#a3a3a3',
    highlightFontColor: '#f2f2f2',
    fontSize: 14,
  },
  links: [
    // { label: 'Documentation', href: '#' },
    // { label: 'API Reference', href: '#' },
    // { label: 'Developer Tools', href: '#' },
    // { label: 'Support', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
}

export const FOOTER_COLUMN_RIGHT: FooterSocialColumn = {
  title: {
    label: 'Community',
    fontColor: '#f2f2f2',
    fontSize: 16,
  },
  iconStyling: {
    fontColor: '#a3a3a3',
    highlightFontColor: '#f2f2f2',
    size: 20,                    // px — was w-5 h-5
  },
  links: [
    { icon: 'x', ariaLabel: 'BION Foundation on X', href: 'https://x.com/BIONFoundation', target: '_blank' },
    // { icon: 'github', ariaLabel: 'BION on GitHub', href: '#' },
    // { icon: 'telegram', ariaLabel: 'BION on Telegram', href: '#' },
  ],
}

export const FAQ_PAGE = {
  // Page heading above the list
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about BION.',
  },

  // Styling for the collapsible list — all values pulled by components/faq-list.tsx
  styling: {
    maxWidth: 768,            // px — max width of the list container
    gap: 12,                  // px — vertical space between items
    item: {
      fillColor: 'rgba(255, 255, 255, 0.03)',      // item background at rest
      hoverFillColor: 'rgba(255, 255, 255, 0.06)', // item background on hover
      borderColor: 'rgba(255, 255, 255, 0.10)',
      borderWidth: 1,          // px
      borderRadius: 8,         // px
      paddingLeft: 20,         // px
      paddingRight: 20,
      paddingTop: 16,
      paddingBottom: 16,
    },
    question: {
      fontColor: '#f2f2f2',
      fontSize: 17,            // px
      fontWeight: 600,
    },
    answer: {
      fontColor: '#a3a3a3',
      fontSize: 15,            // px
      lineHeight: 1.6,         // unitless
      paddingTop: 12,          // px — space between question and answer when expanded
    },
    icon: {
      color: '#9ca1ff',        // chevron color
      size: 20,                // px
    },
    sources: {
      label: 'Sources:',       // heading shown before the list of source links
      labelColor: '#6b7280',   // muted gray for the "Sources:" label
      fontColor: '#9ca1ff',    // source link color
      hoverFontColor: '#c4c7ff',// source link color on hover
      fontSize: 13,            // px
      paddingTop: 12,          // px — space between the answer and the sources
    },
  },

  // Placeholder content — replace with real questions/answers later.
  FAQ_list: [
    { question: 'What is BION?',
      answer: 'BION is a utility token that powers AI automation and blockchain integration, designed for the fourth industrial revolution.' },
    { question: 'How do I buy BION?',
      answer: 'You can buy BION on Solana DEXs like Jupiter and Raydium, or wait for CEX listings coming soon.' },
    { question: 'What blockchain is BION on?',
      answer: 'BION is currently on Solana but is designed to be chain-agnostic with future multi-chain support.' },
    { question: 'How can I partner with BION?',
      answer: 'Contact us through the form above or email partnerships@biontoken.com to discuss collaboration opportunities.' },
    { question: 'What does BION actually do?',
      answer: "BION powers automated actions and AI-driven processes on behalf of its users. Each time a digital bot or AI agent is summoned to perform a task, a small fraction of BION is spent to fuel that inference or action — much like paying for an API call. In short, BION is the fuel that lets software and hardware automation run, acting as a conductor of time-saving, automated decision-making and a payout mediator between humans and machines." },
    { question: 'What is the Clone Routing System Ledger?',
      answer: "The Clone Routing System Ledger (CRSL) is a tiered automation protocol created by Aphid that lets bots carry out work on behalf of Human Monitoring Agents. The BION token connects to the Web3 tier of this system, so on-chain activity can power and record automated tasks. BION also operates independently of Aphid's ecosystem as a general-purpose automation asset." },
    { question: 'Who is Aphid, and how is it related to BION?',
      answer: "Aphid is a fintech automation company that built the Clone Routing System Ledger and powers bots for users in a gig-economy ecosystem. Aphid created BION as the utility token for that system, but BION is designed to stand on its own — over time, control of minting and distribution passes from Aphid to the BION Foundation and the BION DAO." },
    { question: 'What is a Human Monitoring Agent?',
      answer: "Human Monitoring Agents (HMAs) are people who supervise and manage AI systems and automation bots. They keep automated software running correctly and help maintain the underlying hardware, and they earn BION tokens from the Network Pool based on their activity on the Clone Routing System Ledger." },
    { question: 'What is Proof of Powering?',
      answer: "Proof of Powering (PoP) is how BION records automated work on-chain. When you use BION to power an automation tool or AI agent, PoP writes a timestamped entry to the public blockchain ledger confirming that the action — essentially a successful API call — was executed. It makes automated activity transparent, auditable, and verifiable." },
    { question: 'Is BION an investment?',
      answer: "No. BION is a utility token whose purpose is to power Artificial Intelligence and automation — it is not intended for investment purposes. Aphid does not perform research or evaluation of blockchain assets, and BION's whitepaper is not an invitation to purchase tokens. Any decision to acquire or trade BION is made solely at your own responsibility and judgment." },
    { question: "What is BION's total supply?",
      answer: "BION has a fixed maximum supply of 7,655,957,368.99 tokens, and no more will ever be minted. Rather than releasing everything at once, tokens are distributed over roughly a ten-year timeline — about 10% of supply per year — with exact amounts varying based on network activity." },
    { question: 'How are BION tokens allocated?',
      answer: "Supply is split across several pools. The largest, the Network Pool (~30%), rewards Human Monitoring Agents for their activity on the Clone Routing System Ledger. The remaining supply covers the public token sale, a reserve for future network needs, the Aphid team (vested, with unvested tokens held in publicly viewable wallets), grants and social-impact programs for lower-income users and economic downturns, and strategic partnerships and hackathons." },
    { question: 'Who controls BION?',
      answer: "BION is governed by the BION DAO — a decentralized autonomous organization made up of BION holders — with the BION Foundation acting as its legal entity. Members lock (stake) tokens into a governance smart contract to make and vote on proposals after a cooldown period, deciding everything from token economics to which new blockchains to support." },
    { question: 'How does staking work?',
      answer: "You can lock BION into the DAO's governance smart contract, a process known as staking, to become a DAO member and gain voting power. Staked members are passively rewarded with additional BION based on how many tokens they have locked and how long they keep them locked." },
    { question: 'What can I use BION for?',
      answer: "BION fuels a range of automation use cases: the workforce economy, where bots complete tasks via Robotic Process Automation; automated finance, where BION pairs with cryptocurrencies for algorithmic trading tools; machine-learning and deep-learning modeling, where contributors earn tokens for validated inputs; and IoT and smart cities, where BION powers automation in real-world hardware devices." },
    { question: 'Which chains will BION support next?',
      answer: "BION launched on Solana, its origin blockchain, and is expanding to become truly chain-agnostic. A Solana-to-Base bridge is already established, and planned bridges include Base, XRPL, Ethereum, and Stellar. The specific chains and the order in which they are added are determined by BION DAO votes." },
    { question: "What is the BION DAO's long-term goal?",
      answer: "The BION DAO aims to be as hands-off as possible and, ultimately, to hand day-to-day decision-making over to AI. A 'BION DAO Clone' is being trained to take on more of the DAO's responsibilities over time, so that the community eventually governs the AI that governs the token, rather than managing the token directly." },
    { question: 'What is blockchain?',
      answer: "Blockchain is a distributed ledger technology that keeps a secure, transparent, and permanent record of transactions. Instead of relying on a central intermediary such as a bank, transactions are validated and processed by a decentralized network of nodes, and once recorded they are extremely difficult to alter. This makes blockchain well suited to trustless coordination and to programmable 'smart contracts' that automatically execute when predefined conditions are met — the foundation BION builds on to power and record automated actions on-chain." },
    { question: 'What is AI (artificial intelligence)?',
      answer: "Artificial intelligence is a set of algorithms and processes that enable machines to learn from data and perform human-like tasks. Its applications range from speech recognition and natural language processing to image and video analysis, fraud detection, and automated decision-making. BION sits at the intersection of AI and blockchain: it lets AI agents and automation tools be powered on demand, with each action fueled by a small fraction of BION and recorded transparently on the blockchain." },
    { question: 'Is blockchain bad for the environment and sustainability?',
      answer: "No — and modern blockchains are increasingly part of the solution. The old criticism targets energy-hungry 'proof-of-work' mining, but most newer networks — including Solana, which BION runs on — use 'proof-of-stake', which slashes energy use by roughly 99.95% versus proof-of-work, making a transaction closer to an ordinary web request than an industrial process. Beyond efficiency, blockchains actively incentivize clean energy and sustainable behavior. Even proof-of-work miners increasingly act as a flexible 'buyer of last resort' that monetizes otherwise-curtailed renewable power, provide near-instant demand response to stabilize grids, and capture flared methane — a gas roughly 80x worse than CO2 — to generate electricity instead of venting it. Blockchains also power peer-to-peer energy markets that let households sell surplus rooftop solar to their neighbors, tokenize renewable-energy assets so more people can help fund them, and bring transparency to carbon-credit and supply-chain markets so that genuine green practices can be verified and rewarded. In short, blockchain is a tool — and it is increasingly being pointed squarely at sustainability.",
      sources: [
        { label: 'Ethereum: proof-of-stake cut energy ~99.95%', url: 'https://ethereum.org/roadmap/merge/' },
        { label: 'How Bitcoin mining can support renewable energy', url: 'https://cryptoforinnovation.org/how-bitcoin-mining-can-support-renewable-energy/' },
        { label: 'Peer-reviewed: PoW mining for renewable expansion (MDPI)', url: 'https://www.mdpi.com/2078-1547/14/3/35' },
        { label: 'Brooklyn Microgrid: blockchain P2P energy trading', url: 'https://www.sciencedirect.com/science/article/abs/pii/S030626191730805X' },
        { label: 'World Economic Forum: blockchain & carbon markets', url: 'https://www.weforum.org/stories/2022/07/how-can-blockchain-open-access-to-carbon-markets/' },
      ] },
    { question: 'Is AI bad for the environment and sustainability?',
      answer: "No. AI does consume energy — training and running large models needs data centers, and the IEA projects their electricity demand will roughly double by 2030 — but the net picture is positive for two reasons. First, AI is getting dramatically more efficient (energy per task is falling faster than in almost any technology in history), and about half of the new data-center demand is expected to be met by renewables. Second, and more importantly, AI is one of the most powerful tools we have for cutting emissions everywhere else. AI makes intermittent renewables more usable: Google DeepMind used machine learning to forecast wind output 36 hours ahead and boosted the value of that wind power by about 20%, and the same team cut the energy used to cool Google's data centers by up to 40%. More broadly, AI optimizes power grids, buildings, and logistics; enables fuel-efficient routing that avoids millions of tons of CO2; sharpens climate modeling and monitoring; and drives precision agriculture and predictive maintenance for clean-energy equipment. The emissions AI helps avoid across the economy can far outweigh its own footprint.",
      sources: [
        { label: 'IEA: Energy and AI report (2025)', url: 'https://www.iea.org/reports/energy-and-ai/executive-summary' },
        { label: 'Google DeepMind: ML boosts the value of wind energy (~20%)', url: 'https://deepmind.google/blog/machine-learning-can-boost-the-value-of-wind-energy/' },
        { label: 'Google DeepMind: AI cuts data-centre cooling energy by 40%', url: 'https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/' },
        { label: 'Google: AI for sustainability', url: 'https://ai.google/sustainability/' },
      ] },
  ],
}