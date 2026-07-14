import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FaqList } from "@/components/faq-list"
import { FAQ_PAGE } from "@/config/ui_config"

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* FAQ Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-balance text-white">
              {FAQ_PAGE.header.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 text-pretty px-2">
              {FAQ_PAGE.header.subtitle}
            </p>
          </div>

          <FaqList />
        </div>
      </section>

      <Footer />
    </div>
  )
}
