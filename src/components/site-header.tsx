"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-blue-950 opacity-90 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-4 flex h-16 items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span
            className={`text-xl font-bold typing-animation ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            Instamation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Features", "Pricing", "Resources"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium ${
                isScrolled ? "text-white hover:text-gray-200" : "text-white hover:text-gray-200"
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className={
              isScrolled
                ? "text-white hover:text-blue-900 hover:bg-gray-100"
                : "text-white hover:text-gray-200 hover:bg-white/10"
            }
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className={
              isScrolled ? "bg-blue-900 text-white hover:bg-blue-800" : "bg-white text-blue-900 hover:bg-gray-200"
            }
          >
            Join
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="lg" className={`px-0 ${isScrolled ? "text-blue-900" : "text-white"}`}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              {["Features", "Pricing", "Resources"].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-blue-900">
                  {item}
                </Link>
              ))}
              <hr className="my-4" />
              <Button variant="ghost" size="sm" className="justify-start">
                Sign In
              </Button>
              <Button size="sm">Join</Button>
            </nav>
          </SheetContent>
        </Sheet>

        <style jsx>{`
  .typing-animation {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid white;
    animation: typing 5s steps(11, end) infinite, blink 0.7s infinite;
  }

  @keyframes typing {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`}</style>

      </div>
    </header>
  );
}
