import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, Users, TrendingUp, Target, Award, MapPin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-2 mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About IdeaBridge Nigeria</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Empowering Nigerian innovation to drive national development
        </p>
      </div>

      {/* Update the tabs to be more mobile-friendly */}
      <Tabs defaultValue="mission" className="space-y-8">
        <TabsList className="flex flex-wrap w-full">
          <TabsTrigger value="mission" className="flex-1">
            Our Mission
          </TabsTrigger>
          <TabsTrigger value="story" className="flex-1">
            Our Story
          </TabsTrigger>
          <TabsTrigger value="team" className="flex-1">
            Our Team
          </TabsTrigger>
          <TabsTrigger value="impact" className="flex-1">
            Our Impact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mission" className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                  IdeaBridge Nigeria exists to unlock the innovative potential of Nigerians by providing a platform that
                  connects ideas with the resources they need to succeed. We believe that Nigeria's greatest asset is
                  the creativity and ingenuity of its people.
                </p>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
                  Our mission is to create an ecosystem where innovative ideas can be evaluated, refined, and
                  transformed into solutions that address Nigeria's unique challenges and contribute to sustainable
                  national development.
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="IdeaBridge Nigeria team members collaborating"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <Lightbulb className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle>Idea Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide objective, data-driven evaluation of innovative ideas to identify those with the greatest
                  potential for impact and success.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle>Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We connect idea creators with experienced mentors who can provide guidance, expertise, and networks to
                  help refine and develop their innovations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <TrendingUp className="h-12 w-12 text-green-600 mb-2" />
                <CardTitle>Resource Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We facilitate connections to investors, NGOs, legal support, and other resources needed to transform
                  promising ideas into reality.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Our Core Values</h3>
              <p className="text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  We celebrate creative thinking and novel approaches to solving problems.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Impact</h4>
                <p className="text-sm text-muted-foreground">
                  We prioritize ideas that can create meaningful, positive change in Nigeria.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Inclusivity</h4>
                <p className="text-sm text-muted-foreground">
                  We believe innovation can come from anyone, regardless of background or education.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  We maintain high standards in our evaluation, mentorship, and support processes.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="story" className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-muted-foreground md:text-lg">
                  IdeaBridge Nigeria was founded in 2025 by Oluwaferanmi Adeoye who recognized that while Nigeria has an
                  abundance of innovative ideas, many never reach their full potential due to lack of evaluation,
                  mentorship, and resources.
                </p>
                <p className="text-muted-foreground md:text-lg">
                  What began as a small initiative to connect university students with mentors has grown into a
                  comprehensive platform that serves innovators across Nigeria, providing idea evaluation, mentorship,
                  and connections to investors and support services.
                </p>
              </div>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              width={400}
              height={400}
              alt="IdeaBridge Nigeria founders"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Journey</h3>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="text-xl font-bold text-green-600">2025</div>
                  <div className="h-full w-0.5 bg-green-600 mt-2 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-semibold mb-2">Foundation</h4>
                  <p className="text-muted-foreground">
                    IdeaBridge Nigeria was established by Oluwaferanmi Adeoye with a mission to unlock Nigerian
                    innovation potential. Initial partnerships with three universities in Lagos were formed.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="text-xl font-bold text-green-600">2025 (Q2)</div>
                  <div className="h-full w-0.5 bg-green-600 mt-2 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-semibold mb-2">Expansion</h4>
                  <p className="text-muted-foreground">
                    The platform expanded to include automated idea evaluation, a mentorship network, and connections to
                    investors. Coverage expanded to all six geopolitical zones in Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/4 flex flex-col items-center md:items-start">
                  <div className="text-xl font-bold text-green-600">2025</div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-semibold mb-2">Growth & Impact</h4>
                  <p className="text-muted-foreground">
                    Today, IdeaBridge Nigeria has evaluated over 500 ideas, connected 200+ innovators with mentors, and
                    helped secure funding for 50+ projects across various sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Team</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Meet the dedicated professionals working to unlock Nigerian innovation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Oluwaseun Adeyemi" />
                    <AvatarFallback>OA</AvatarFallback>
                  </Avatar>
                  <CardTitle>Oluwaseun Adeyemi</CardTitle>
                  <CardDescription>Founder & CEO</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Serial entrepreneur with 15+ years experience in technology and innovation. Previously founded two
                  successful startups in the education and fintech sectors.
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Lagos, Nigeria</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Ngozi Okonkwo" />
                    <AvatarFallback>NO</AvatarFallback>
                  </Avatar>
                  <CardTitle>Ngozi Okonkwo</CardTitle>
                  <CardDescription>Chief Operations Officer</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Operations expert with background in management consulting. Specializes in building efficient
                  processes and scaling impact-driven organizations.
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Abuja, Nigeria</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Ibrahim Mohammed" />
                    <AvatarFallback>IM</AvatarFallback>
                  </Avatar>
                  <CardTitle>Ibrahim Mohammed</CardTitle>
                  <CardDescription>Chief Technology Officer</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Technology leader with expertise in AI and software development. Previously led engineering teams at
                  major tech companies in Nigeria and internationally.
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Lagos, Nigeria</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Chioma Nwosu" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <CardTitle>Chioma Nwosu</CardTitle>
                  <CardDescription>Head of Partnerships</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Relationship builder with extensive networks across Nigerian business, government, and NGO sectors.
                  Passionate about creating meaningful collaborations.
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Port Harcourt, Nigeria</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Tunde Bakare" />
                    <AvatarFallback>TB</AvatarFallback>
                  </Avatar>
                  <CardTitle>Tunde Bakare</CardTitle>
                  <CardDescription>Head of Mentorship</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Former academic and startup advisor with expertise in building effective mentorship programs.
                  Dedicated to nurturing the next generation of Nigerian innovators.
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Ibadan, Nigeria</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Amina Bello" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <CardTitle>Amina Bello</CardTitle>
                  <CardDescription>Head of Evaluation</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Data scientist and innovation specialist who developed IdeaBridge's evaluation methodology. Expert in
                  identifying ideas with high potential for impact.
                </p>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Kano, Nigeria</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Our team is supported by a network of over 50 mentors, advisors, and partners across Nigeria.
            </p>
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700">Join Our Team</Button>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="impact" className="space-y-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Impact</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Measuring our contribution to Nigerian innovation and development
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-4xl font-bold text-green-600">500+</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Ideas Evaluated</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-4xl font-bold text-green-600">200+</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Mentorship Connections</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-4xl font-bold text-green-600">₦250M+</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Investment Facilitated</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-center text-4xl font-bold text-green-600">1,500+</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Innovators Supported</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Success Stories</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AgriTech Solution</CardTitle>
                  <CardDescription>Smart irrigation system for small-scale farmers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    This innovative solution has been deployed to 50+ farms across Nigeria, resulting in 30% increase in
                    crop yields and 40% reduction in water usage.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="font-medium">Impact:</span>
                    <span className="ml-2 text-muted-foreground">2,000+ farmers benefited</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>HealthConnect</CardTitle>
                  <CardDescription>Mobile app connecting rural patients with doctors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    This telemedicine platform has facilitated over 10,000 virtual consultations, bringing healthcare
                    access to underserved rural communities.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="font-medium">Impact:</span>
                    <span className="ml-2 text-muted-foreground">15 rural communities served</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>EduTech Platform</CardTitle>
                  <CardDescription>Educational content for underserved communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    This platform has delivered quality educational content to students in areas with limited internet
                    connectivity, improving learning outcomes.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="font-medium">Impact:</span>
                    <span className="ml-2 text-muted-foreground">5,000+ students reached</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-muted rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">SDG Alignment</h3>
              <p className="text-muted-foreground">How our work contributes to the Sustainable Development Goals</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <span className="text-xl font-bold text-green-600">1</span>
                </div>
                <h4 className="font-bold mb-2">No Poverty</h4>
                <p className="text-sm text-muted-foreground">
                  Supporting innovations that create economic opportunities and reduce poverty.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <span className="text-xl font-bold text-green-600">4</span>
                </div>
                <h4 className="font-bold mb-2">Quality Education</h4>
                <p className="text-sm text-muted-foreground">
                  Enabling solutions that improve access to quality education across Nigeria.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3 mb-4">
                  <span className="text-xl font-bold text-green-600">9</span>
                </div>
                <h4 className="font-bold mb-2">Industry, Innovation and Infrastructure</h4>
                <p className="text-sm text-muted-foreground">
                  Fostering innovation and building resilient infrastructure through technology.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/ideas">
              <Button className="bg-green-600 hover:bg-green-700">Explore Success Stories</Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
