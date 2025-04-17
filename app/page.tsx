import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Lightbulb, Users, TrendingUp, Award, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-8 md:py-12 lg:py-24 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                  Unleashing Nigerian Innovation
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-base md:text-xl">
                  IdeaBridge Nigeria empowers Nigerians to submit innovative ideas that contribute to national
                  development.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/submit-idea">
                  <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                    Submit Your Idea
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto mt-2 sm:mt-0">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Nigerian innovators collaborating"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-10 md:py-16 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                How IdeaBridge Nigeria Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground text-sm md:text-base lg:text-xl/relaxed">
                Our platform connects innovative ideas with the resources they need to succeed.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-8 md:py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-green-200">
              <CardHeader className="pb-2">
                <Lightbulb className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Submit Your Idea</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Share your innovative solution to a Nigerian problem through our simple submission form.
                </p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">Step 1</CardFooter>
            </Card>
            <Card className="border-green-200">
              <CardHeader className="pb-2">
                <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Get Evaluated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our system evaluates your idea based on innovation, feasibility, and impact potential.
                </p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">Step 2</CardFooter>
            </Card>
            <Card className="border-green-200">
              <CardHeader className="pb-2">
                <Users className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Connect with Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get matched with experienced mentors who can help refine and develop your idea.
                </p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">Step 3</CardFooter>
            </Card>
            <Card className="border-green-200">
              <CardHeader className="pb-2">
                <TrendingUp className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Secure Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connect with investors, NGOs, and legal support to bring your idea to life.
                </p>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground">Step 4</CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="w-full py-10 md:py-16 lg:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 dark:bg-green-900 px-3 py-1 text-sm text-green-600 dark:text-green-100">
                Impact
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
                Why IdeaBridge Nigeria Matters
              </h2>
              <p className="max-w-[600px] text-muted-foreground text-sm md:text-base lg:text-xl/relaxed">
                Nigeria is filled with untapped potential and innovative minds. IdeaBridge provides the platform to turn
                these ideas into reality.
              </p>
              <Link href="/impact">
                <Button className="bg-green-600 hover:bg-green-700 mt-2">
                  See Our Impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 w-full">
                <Card className="border-green-200">
                  <CardHeader className="pb-2">
                    <Award className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">National Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Fostering innovations that address Nigeria's unique challenges.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardHeader className="pb-2">
                    <Users className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">Talent Showcase</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Highlighting Nigeria's brightest minds and their innovative solutions.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardHeader className="pb-2">
                    <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">Economic Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Creating opportunities for new businesses and job creation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-green-200">
                  <CardHeader className="pb-2">
                    <Lightbulb className="h-8 w-8 text-green-600 mb-2" />
                    <CardTitle className="text-lg">Innovation Culture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Building a sustainable ecosystem for continuous innovation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how IDEABOX Nigeria has helped transform ideas into reality.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>AgriTech Solution</CardTitle>
                <CardDescription>Farming Innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "IDEABOX helped me connect with investors who believed in my smart irrigation system. Now we're
                  helping farmers across Nigeria."
                </p>
              </CardContent>
              <CardFooter className="text-sm font-medium">- Adebayo O., Lagos</CardFooter>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>HealthConnect</CardTitle>
                <CardDescription>Healthcare Access</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "My app connecting rural patients with doctors found mentorship and legal support through IDEABOX.
                  We've helped thousands access healthcare."
                </p>
              </CardContent>
              <CardFooter className="text-sm font-medium">- Ngozi E., Abuja</CardFooter>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle>EduTech Platform</CardTitle>
                <CardDescription>Education Innovation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "From idea to nationwide implementation, IDEABOX guided our journey to create accessible educational
                  content for underserved communities."
                </p>
              </CardContent>
              <CardFooter className="text-sm font-medium">- Chidi K., Enugu</CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Turn Your Idea Into Reality?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of Nigerians who are making a difference through innovation.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <div className="flex justify-center">
              <Link href="/submit-idea">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Submit Your Idea Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container flex flex-col space-y-4 md:flex-row md:space-y-0 items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-green-600" />
            <span className="font-semibold">IdeaBridge Nigeria</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/about" className="text-sm hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm hover:underline underline-offset-4">
              Terms
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            &copy; {new Date().getFullYear()} IdeaBridge Nigeria. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
