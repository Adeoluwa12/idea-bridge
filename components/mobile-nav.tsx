"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Lightbulb } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-green-600" />
            <span>IdeaBridge Nigeria</span>
          </SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col space-y-3">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-green-600"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-green-600"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/ideas"
              className="text-lg font-medium transition-colors hover:text-green-600"
              onClick={() => setOpen(false)}
            >
              Ideas Gallery
            </Link>
            <Link
              href="/mentors"
              className="text-lg font-medium transition-colors hover:text-green-600"
              onClick={() => setOpen(false)}
            >
              Mentors
            </Link>
            <Link
              href="/investors"
              className="text-lg font-medium transition-colors hover:text-green-600"
              onClick={() => setOpen(false)}
            >
              Investors
            </Link>
            <Link
              href="/legal"
              className="text-lg font-medium transition-colors hover:text-green-600"
              onClick={() => setOpen(false)}
            >
              Legal Support
            </Link>
          </div>
          <Separator />
          <div className="flex flex-col space-y-3">
            <Link
              href="/submit-idea"
              className="text-lg font-medium text-green-600 hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              Submit Your Idea
            </Link>
            <Link
              href="/login"
              className="text-lg font-medium transition-colors hover:text-green-600"
              onClick={() => setOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-lg font-medium transition-colors hover:text-green-600"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
