import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-purple-900 to-blue-900 text-white">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
            Stay Updated with Instamation
          </h2>
          <p className="max-w-[600px] text-lg md:text-xl text-blue-200">
            Subscribe for the latest updates and expert marketing tips delivered straight to your inbox.
          </p>
          <div className="w-full max-w-md space-y-4">
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Input 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-blue-200" 
                placeholder="Enter your email" 
                type="email" 
                required 
              />
              <Button 
                type="submit" 
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
              >
                Join Now
              </Button>
            </form>
            <p className="text-sm text-blue-200">
              By subscribing you agree to our Privacy Policy and provide consent to receive updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
