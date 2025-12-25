import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Bot, Network, Zap, Globe, Shield } from "lucide-react"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Alex Chen",
      role: "Chief AI Architect",
      bio: "Leading AI researcher with 15+ years in machine learning and blockchain integration. Former Google DeepMind researcher.",
      icon: Bot,
      specialties: ["Machine Learning", "Neural Networks", "Blockchain AI"],
    },
    {
      name: "Sarah Rodriguez",
      role: "Blockchain Engineer",
      bio: "Solana ecosystem expert and smart contract developer. Built multiple DeFi protocols with millions in TVL.",
      icon: Network,
      specialties: ["Solana Development", "Smart Contracts", "DeFi"],
    },
    {
      name: "Marcus Thompson",
      role: "Automation Systems Lead",
      bio: "Robotics and automation specialist. Previously led automation teams at Tesla and Boston Dynamics.",
      icon: Zap,
      specialties: ["Robotics", "IoT", "Process Automation"],
    },
    {
      name: "Dr. Yuki Tanaka",
      role: "Quantum Computing Advisor",
      bio: "Quantum computing researcher and cryptography expert. PhD from MIT, published 50+ papers on quantum algorithms.",
      icon: Cpu,
      specialties: ["Quantum Computing", "Cryptography", "Algorithm Design"],
    },
    {
      name: "Elena Volkov",
      role: "Decentralized Systems Architect",
      bio: "Distributed systems expert with experience building large-scale blockchain infrastructure at Ethereum Foundation.",
      icon: Globe,
      specialties: ["Distributed Systems", "Consensus Algorithms", "Scalability"],
    },
    {
      name: "James Park",
      role: "Security & Compliance Officer",
      bio: "Cybersecurity expert and former NSA analyst. Specializes in blockchain security and regulatory compliance.",
      icon: Shield,
      specialties: ["Cybersecurity", "Compliance", "Risk Management"],
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
              Meet the <span className="text-primary">Future Builders</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-2">
              Our team combines decades of experience in AI, blockchain, and automation to build the infrastructure for
              the fourth industrial revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    {/* Avatar with Icon */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    {/* Futuristic Accent */}
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-center space-x-1">
                        <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                        <div
                          className="w-1 h-1 bg-primary/60 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        />
                        <div
                          className="w-1 h-1 bg-primary/30 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Advisory Board</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Industry leaders and visionaries guiding BION's strategic direction and technological advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Dr. Maria Santos</h3>
                <p className="text-sm text-muted-foreground mb-2">AI Ethics Advisor</p>
                <Badge variant="outline" className="text-xs">
                  Former OpenAI
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Robert Kim</h3>
                <p className="text-sm text-muted-foreground mb-2">Blockchain Strategist</p>
                <Badge variant="outline" className="text-xs">
                  Solana Labs
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Lisa Zhang</h3>
                <p className="text-sm text-muted-foreground mb-2">Regulatory Advisor</p>
                <Badge variant="outline" className="text-xs">
                  Former SEC
                </Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">David Wilson</h3>
                <p className="text-sm text-muted-foreground mb-2">Tech Innovation</p>
                <Badge variant="outline" className="text-xs">
                  Y Combinator
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join Our Mission</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
              We're always looking for talented individuals who share our vision of revolutionizing AI and blockchain
              integration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Bot className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-2">AI Engineers</h3>
                  <p className="text-sm text-muted-foreground">Build the next generation of AI automation systems</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Network className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-2">Blockchain Developers</h3>
                  <p className="text-sm text-muted-foreground">Create cross-chain infrastructure and smart contracts</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-2">Product Managers</h3>
                  <p className="text-sm text-muted-foreground">
                    Shape the future of automated systems and user experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
