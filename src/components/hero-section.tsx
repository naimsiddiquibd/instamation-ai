import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 text-center w-full bg-gradient-to-b from-blue-900 to-black text-white h-screen flex items-center justify-center">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mx-auto max-w-[700px]">
            Transform Your Instagram Engagement with Instamation
          </h1>
          <p className="mx-auto max-w-[700px] text-base md:text-xl text-gray-300">
            Instamation revolutionizes your Instagram presence with real audience engagement. With automated responses
            and seamless comment management, you can turn every interaction into a valuable opportunity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4">
            <Button size="lg" className="w-full sm:w-auto bg-blue-900 text-gray-200 hover:bg-blue-700 hover:text-gray-300">
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-gray-800"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}