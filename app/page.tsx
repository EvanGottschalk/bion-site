import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Cpu, Zap, Shield, Globe, Bot, Coins } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8 flex flex-col items-center">
              <Image
                src="/bion-b-icon.png"
                alt="BION B Icon"
                width={60}
                height={60}
                className="mb-3 sm:mb-4 sm:w-20 sm:h-20"
                priority
              />
              <Image
                src="/bion-logo.png"
                alt="BION Logo"
                width={200}
                height={48}
                className="object-contain sm:w-[250px]"
                priority
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance text-white"></h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 text-pretty px-2">
              BION is a chain-agnostic utility token powering automated actions and AI-driven processes in the fourth
              industrial revolution. Built on Solana for speed and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/whitepaper">
                  Read Whitepaper <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto"
              >
                <Link href="/exchanges">Get BION</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Why Choose BION?</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              BION connects human intelligence with machine automation, creating a seamless bridge between AI and
              blockchain technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Automation</h3>
                <p className="text-white/70">
                  Power AI agents and automated systems with BION tokens for automated decision making and rapid
                  results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Lightning Fast</h3>
                <p className="text-white/70">
                  Built on Solana for high-speed transactions and low fees, perfect for frequent API calls.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Chain Agnostic</h3>
                <p className="text-white/70">
                  Designed to work across multiple blockchains, starting with Solana and expanding to others.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Real-World Applications</h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              BION tokens power various automation scenarios across industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Automated Trading</h3>
              <p className="text-sm text-white/70">Power algorithmic trading AI agents for cryptocurrency markets</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-white">IoT & Smart Cities</h3>
              <p className="text-sm text-white/70">
                Enable automation in real-world hardware devices and infrastructure
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Workforce Economy</h3>
              <p className="text-sm text-white/70">
                Human Monitoring Agents use AI agents to complete tasks efficiently
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Machine Learning</h3>
              <p className="text-sm text-white/70">Incentivize contributions to ML models and deep learning systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">7.66B</div>
              <div className="text-white/70 text-sm sm:text-base">Total Supply</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">30%</div>
              <div className="text-white/70 text-sm sm:text-base">Network Pool</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-2">$15.7T</div>
              <div className="text-white/70 text-sm sm:text-base">AI Market by 2030</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Ready to Join the Revolution?</h2>
            <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">
              Get started with BION tokens and power your AI automation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/exchanges">
                  Get BION Tokens <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
