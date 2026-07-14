import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Network, Zap, Users, Globe, Bot } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              About <span className="text-primary">BION</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-2">
              BION is at the epicenter of the fourth industrial revolution, combining Artificial Intelligence, IoT,
              blockchain, quantum computing, and robotics into a unified utility token ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* What is BION Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">What is BION?</h2>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                BION is a chain-agnostic utility token that powers automated actions on behalf of users for rapid
                results. Consider BION to be a conductor of time-saving, automated decision making, and payout mediator
                between human and machine.
              </p>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Each time a digital AI agent is powered or summoned in the network for a task, a small fraction of BION
                is used to power the inference or action, similar to an API call.
              </p>
              <Button asChild>
                <a href="/whitepaper" target="_blank" rel="noopener noreferrer">
                  Read Full Whitepaper <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Bot className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">AI Powered</div>
                  <div className="text-sm text-muted-foreground">Automation</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">Lightning</div>
                  <div className="text-sm text-muted-foreground">Fast</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">Chain</div>
                  <div className="text-sm text-muted-foreground">Agnostic</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Network className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">Decentralized</div>
                  <div className="text-sm text-muted-foreground">Network</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clone Routing System Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Clone Routing System Ledger (CRSL)</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base px-4">
              Aphid, a fintech automation company, created the Clone Routing System Ledger to allow bots to work on
              behalf of Human Monitoring Agents (HMAs). The BION token connects to the Web3 tier of this innovative
              system.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  Human Monitoring Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  HMAs supervise and manage AI systems, earning BION tokens for their oversight and maintenance
                  activities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="w-5 h-5 text-primary mr-2" />
                  Automated AI Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Digital AI agents execute tasks using BION tokens as fuel, performing complex operations with minimal
                  human intervention.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Network className="w-5 h-5 text-primary mr-2" />
                  Tiered Protocol
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The CRSL operates on a tiered protocol system, with BION connecting to the Web3 tier for blockchain
                  integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Token Allocation Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Token Allocation</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Total Supply: 7,655,957,368.99 BION tokens</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">30%</div>
                <h3 className="font-semibold mb-2">Network Pool</h3>
                <p className="text-sm text-muted-foreground">
                  Allocated to Human Monitoring Agents based on their activity utilizing the Clone Routing System
                  Ledger.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">21%</div>
                <h3 className="font-semibold mb-2">Hardware Network Pool</h3>
                <p className="text-sm text-muted-foreground">
                  For hardware maintenance, cloud and quantum computing, and robotic processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">15%</div>
                <h3 className="font-semibold mb-2">Reserve</h3>
                <p className="text-sm text-muted-foreground">
                  Supply retained for necessary network activities and supporting future expansion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">15%</div>
                <h3 className="font-semibold mb-2">Team</h3>
                <p className="text-sm text-muted-foreground">
                  Distributed to the Aphid team with vesting policy and publicly viewable wallets.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">14%</div>
                <h3 className="font-semibold mb-2">Grants & Social Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Token grants for qualified individuals and economic downturn support programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">5%</div>
                <h3 className="font-semibold mb-2">Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic partnerships and hackathons using BION as utility tokens in various ecosystems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proof of Powering Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Proof of Powering (PoP)</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
              Proof of Powering allows users to power automation tools and track task activity on the public ledger of
              the blockchain. PoP creates a timestamp of the powered action to ensure a successful API call has been
              executed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Power Actions</h3>
                <p className="text-sm text-muted-foreground">Use BION to power automation tools and AI agents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Track Activity</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor all task activity on the public blockchain ledger
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Verify Execution</h3>
                <p className="text-sm text-muted-foreground">
                  Timestamp verification ensures successful API call execution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
