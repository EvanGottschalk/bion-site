import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle, Twitter, Github, MapPin, Phone, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-2">
              Have questions about BION? Want to partner with us? We'd love to hear from you and discuss the future of
              AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." className="min-h-[120px]" />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@biontoken.com</p>
                      <p className="text-muted-foreground">support@biontoken.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        123 Innovation Drive
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">For Developers</h4>
                      <p className="text-sm text-muted-foreground">Technical documentation and API references</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">For Partners</h4>
                      <p className="text-sm text-muted-foreground">Partnership opportunities and integration support</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">For Media</h4>
                      <p className="text-sm text-muted-foreground">Press kit, brand assets, and media inquiries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Quick answers to common questions about BION tokens and our platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What is BION?</h3>
                <p className="text-sm text-muted-foreground">
                  BION is a utility token that powers AI automation and blockchain integration, designed for the fourth
                  industrial revolution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How do I buy BION?</h3>
                <p className="text-sm text-muted-foreground">
                  You can buy BION on Solana DEXs like Jupiter and Raydium, or wait for CEX listings coming soon.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What blockchain is BION on?</h3>
                <p className="text-sm text-muted-foreground">
                  BION is currently on Solana but is designed to be chain-agnostic with future multi-chain support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">How can I partner with BION?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us through the form above or email partnerships@biontoken.com to discuss collaboration
                  opportunities.
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
