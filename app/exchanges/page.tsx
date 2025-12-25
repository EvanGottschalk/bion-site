import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExchangesPage() {
  const exchanges = [
    {
      name: "Jupiter",
      description: "Leading Solana DEX aggregator with best prices",
      type: "DEX",
      chain: "Solana",
      volume: "$2.1B",
      status: "Live",
      features: ["Best Prices", "Low Fees", "Fast Swaps"],
    },
    {
      name: "Raydium",
      description: "Automated Market Maker on Solana",
      type: "DEX",
      chain: "Solana",
      volume: "$890M",
      status: "Live",
      features: ["AMM", "Yield Farming", "Liquidity Pools"],
    },
    {
      name: "Orca",
      description: "User-friendly DEX with concentrated liquidity",
      type: "DEX",
      chain: "Solana",
      volume: "$650M",
      status: "Live",
      features: ["Concentrated Liquidity", "Easy UI", "Low Slippage"],
    },
    {
      name: "Gate.io",
      description: "Global cryptocurrency exchange",
      type: "CEX",
      chain: "Multi-chain",
      volume: "$1.2B",
      status: "Coming Soon",
      features: ["Spot Trading", "Futures", "Staking"],
    },
    {
      name: "MEXC",
      description: "Leading altcoin exchange",
      type: "CEX",
      chain: "Multi-chain",
      volume: "$800M",
      status: "Coming Soon",
      features: ["Spot Trading", "Margin", "Launchpad"],
    },
    {
      name: "Uniswap V3",
      description: "Ethereum's premier DEX (via bridge)",
      type: "DEX",
      chain: "Ethereum",
      volume: "$1.5B",
      status: "Planned",
      features: ["Cross-chain", "Deep Liquidity", "Advanced Features"],
    },
  ]

  const wallets = [
    {
      name: "Phantom",
      description: "Most popular Solana wallet",
      features: ["Browser Extension", "Mobile App", "Hardware Support"],
    },
    {
      name: "Solflare",
      description: "Feature-rich Solana wallet",
      features: ["Staking", "NFTs", "DeFi Integration"],
    },
    {
      name: "Backpack",
      description: "Modern crypto wallet for Solana",
      features: ["Social Features", "Portfolio Tracking", "Built-in Exchange"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Get <span className="text-primary">BION</span> Tokens
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-2">
              Trade BION tokens on leading decentralized and centralized exchanges. Start powering your AI automation
              today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Live on Solana
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                Chain Agnostic
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                Low Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Token Info */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exchanges.map((exchange) => (
              <Card key={exchange.name}>
                <CardHeader>
                  <CardTitle>{exchange.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{exchange.description}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <Badge>{exchange.type}</Badge>
                    <Badge>{exchange.chain}</Badge>
                    <Badge>{exchange.volume}</Badge>
                    <Badge>{exchange.status}</Badge>
                  </div>
                  <ul className="list-disc list-inside mt-4">
                    {exchange.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wallets Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {wallets.map((wallet) => (
              <Card key={wallet.name}>
                <CardHeader>
                  <CardTitle>{wallet.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{wallet.description}</p>
                  <ul className="list-disc list-inside mt-4">
                    {wallet.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
