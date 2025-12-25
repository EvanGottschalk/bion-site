import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calendar, Users, Cpu, Network } from "lucide-react"

export default function WhitepaperPage() {
  const sections = [
    { title: "Abstract", description: "Overview of BION and the Clone Routing System Ledger" },
    { title: "Background", description: "AI and blockchain integration fundamentals" },
    { title: "Scientific Research", description: "Mathematical models and algorithms" },
    { title: "BION Token", description: "Utility token specifications and architecture" },
    { title: "Proof of Powering", description: "Novel consensus mechanism for AI automation" },
    { title: "Token Allocation", description: "Distribution model and tokenomics" },
    { title: "Use Cases", description: "Real-world applications and examples" },
    { title: "Governance", description: "BION DAO and decentralized decision making" },
    { title: "Roadmap", description: "Development phases and milestones" },
  ]

  const keyStats = [
    { label: "Total Supply", value: "7.66B BION", icon: Cpu },
    { label: "Network Pool", value: "30%", icon: Network },
    { label: "Version", value: "1.0", icon: FileText },
    { label: "Release Date", value: "March 2025", icon: Calendar },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm">Version 1.0 • March 2025</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              BION <span className="text-primary">Whitepaper</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-2">
              Comprehensive technical documentation covering BION's AI-powered utility token, blockchain integration,
              and the revolutionary Clone Routing System Ledger.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" className="w-full sm:w-auto">
                <Download className="mr-2 w-4 h-4" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <FileText className="mr-2 w-4 h-4" />
                View Online
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {keyStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{section.title}</h3>
                        <p className="text-sm text-muted-foreground">{section.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Key Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Essential insights and innovations detailed in the BION whitepaper
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="w-5 h-5 text-primary mr-2" />
                  Fourth Industrial Revolution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  BION combines AI, IoT, blockchain, quantum computing, and robotics into a unified ecosystem for the
                  next paradigm shift.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Network className="w-5 h-5 text-primary mr-2" />
                  Clone Routing System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Revolutionary tiered protocol allowing bots to work on behalf of Human Monitoring Agents with
                  transparent blockchain tracking.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Proof of Powering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Novel consensus mechanism that timestamps powered actions and ensures successful API call execution on
                  the blockchain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Abstract Preview */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Abstract Preview</h2>
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    BION is at the epicenter of the fourth industrial revolution which is a combination of Artificial
                    Intelligence (AI), the Internet of Things (IoT), decentralized ledger technology (blockchain),
                    quantum computing, robotics, and more. Artificial intelligence and blockchain technology shall serve
                    as a catalyst for the next paradigm shift of the 21st century.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    In a world where labor requires manual input and delayed output, the BION token powers automated
                    actions on behalf of its users for rapid results. Consider BION to be a conductor of time saving,
                    automated decision making, and payout mediator between human and machine. BION is a chain-agnostic
                    utility token.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Aphid, a fintech automation company, created the Clone Routing System Ledger (CRSL) to allow bots to
                    work on behalf of human Human Monitoring Agents (HMA's). The Clone Routing System consists of a
                    tiered protocol. The BION token connects to the Web3 tier of the Clone Routing System.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Legal Disclaimer</h2>
            <Card>
              <CardContent className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Aphid is an entity that does not perform any self-reliant research or thorough examination of
                  blockchain assets, digital currencies, cryptocurrencies, or related funds. The content of this
                  Whitepaper does not constitute an invitation to purchase BION tokens. You bear the complete and
                  exclusive responsibility for appraising your investments and deciding whether to trade blockchain
                  assets, relying on your own judgment for all your choices concerning the exchange of blockchain assets
                  with BION. The purpose of BION is as a utility token for Artificial Intelligence and not intended for
                  investment purposes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
