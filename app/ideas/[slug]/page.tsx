"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  TrendingUp,
  BarChart3,
  Award,
  MessageSquare,
  Share2,
  Heart,
  Calendar,
  MapPin,
  Target,
  FileText,
} from "lucide-react"

export default function IdeaDetailPage() {
  const params = useParams()
  const slug = params.slug
  const [isLiked, setIsLiked] = useState(false)

  // In a real app, you would fetch the idea details based on the slug
  // For now, we'll use a mock idea
  const idea = {
    title: "AgriTech Solution",
    category: "Agriculture",
    description:
      "An affordable smart irrigation system that helps small-scale farmers optimize water usage and increase crop yields.",
    problem:
      "Small-scale farmers in Nigeria face challenges with water management, leading to crop failures and reduced yields, especially during dry seasons.",
    solution:
      "Our smart irrigation system uses affordable sensors to monitor soil moisture and weather conditions, automatically controlling water flow to optimize usage. The system is solar-powered and can be controlled via a simple mobile app or SMS for farmers without smartphones.",
    impact:
      "This solution can increase crop yields by up to 30% while reducing water usage by 40%, directly benefiting over 2 million small-scale farmers across Nigeria.",
    sdgs: ["SDG 2: Zero Hunger", "SDG 6: Clean Water and Sanitation"],
    scores: {
      innovation: 85,
      feasibility: 72,
      impact: 90,
      market: 78,
    },
    founder: {
      name: "Adebayo Ogunlesi",
      location: "Lagos, Nigeria",
      image: "/placeholder.svg?height=40&width=40",
    },
    stage: "Prototype",
    submitted: "April 10, 2025",
    likes: 42,
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-2 mb-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
          <Link href="/ideas" className="hover:underline">
            Ideas Gallery
          </Link>
          <span>/</span>
          <span>{idea.category}</span>
          <span>/</span>
          <span>{idea.title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{idea.title}</h1>
            <p className="text-muted-foreground">{idea.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={toggleLike}>
              <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              {isLiked ? idea.likes + 1 : idea.likes}
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About This Idea</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">The Problem</h3>
                <p className="text-muted-foreground">{idea.problem}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Solution</h3>
                <p className="text-muted-foreground">{idea.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Potential Impact</h3>
                <p className="text-muted-foreground">{idea.impact}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">SDG Alignment</h3>
                <div className="flex flex-wrap gap-2">
                  {idea.sdgs.map((sdg, index) => (
                    <Badge key={index} variant="outline">
                      {sdg}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="details" className="space-y-4">
            <TabsList className="flex w-full">
              <TabsTrigger value="details" className="flex-1">
                Details
              </TabsTrigger>
              <TabsTrigger value="updates" className="flex-1">
                Updates
              </TabsTrigger>
              <TabsTrigger value="comments" className="flex-1">
                Comments
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Technology Used</h3>
                    <p className="text-muted-foreground">
                      Our system uses low-cost moisture sensors, Arduino-based controllers, and a simple mobile
                      interface. The entire system is designed to be affordable, with a target price point of under $50
                      for small farms.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Implementation Plan</h3>
                    <p className="text-muted-foreground">
                      We plan to pilot the system with 50 farmers in Lagos and Oyo states, refine based on feedback, and
                      then scale to other regions. We're working with agricultural cooperatives to reach more farmers
                      efficiently.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Current Challenges</h3>
                    <p className="text-muted-foreground">
                      We're working to further reduce costs while maintaining reliability, and developing training
                      materials for farmers who may not be familiar with technology-based solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Target Market</h3>
                    <p className="text-muted-foreground">
                      Our primary market is small-scale farmers (1-5 acres) in Nigeria, with a focus on those growing
                      high-value crops like vegetables and fruits. This represents approximately 2.3 million farmers
                      nationwide.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Competitive Landscape</h3>
                    <p className="text-muted-foreground">
                      Existing irrigation solutions are either too expensive for small-scale farmers or not optimized
                      for local conditions. Our solution is specifically designed for Nigerian agricultural conditions
                      and priced for accessibility.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Growth Strategy</h3>
                    <p className="text-muted-foreground">
                      We plan to partner with agricultural extension services and NGOs to reach farmers, and develop a
                      subscription model for ongoing support and maintenance to ensure sustainability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="updates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Latest Updates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-2 border-green-600 pl-4 py-2">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      April 15, 2025
                    </div>
                    <h3 className="font-semibold mb-1">Prototype Testing Complete</h3>
                    <p className="text-muted-foreground">
                      We've completed initial testing of our prototype with 5 farmers in Lagos State. Results show a 25%
                      reduction in water usage and positive feedback on ease of use.
                    </p>
                  </div>

                  <div className="border-l-2 border-muted pl-4 py-2">
                    <div className="flex items-center text-sm text-muted-foreground mb-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      April 10, 2025
                    </div>
                    <h3 className="font-semibold mb-1">Idea Submitted and Approved</h3>
                    <p className="text-muted-foreground">
                      Our AgriTech Solution was submitted to IdeaBridge Nigeria and received approval with high scores
                      for innovation and impact potential.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="comments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Comments and Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="David" />
                      <AvatarFallback>DA</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <span className="font-medium">David Adeyemi</span>
                        <Badge className="ml-2" variant="outline">
                          Mentor
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This is a promising solution that addresses a real need. Have you considered integrating weather
                        forecast data to further optimize irrigation scheduling?
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>April 14, 2025</span>
                        <Button variant="ghost" size="sm" className="h-auto p-0 ml-4">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Ngozi" />
                      <AvatarFallback>NE</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <span className="font-medium">Ngozi Emenike</span>
                        <Badge className="ml-2" variant="outline">
                          Investor
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        I'd be interested in seeing more data on the cost-benefit analysis for farmers of different
                        scales. What's the ROI timeframe for a farmer with 2 acres?
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>April 13, 2025</span>
                        <Button variant="ghost" size="sm" className="h-auto p-0 ml-4">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Add Comment</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Idea Scorecard</CardTitle>
              <CardDescription>Evaluation results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center">
                      <Award className="h-8 w-8 text-green-600 mb-2" />
                      <div className="text-2xl font-bold">{idea.scores.innovation}%</div>
                      <div className="text-sm text-muted-foreground">Innovation</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center">
                      <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                      <div className="text-2xl font-bold">{idea.scores.feasibility}%</div>
                      <div className="text-sm text-muted-foreground">Feasibility</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center">
                      <Users className="h-8 w-8 text-green-600 mb-2" />
                      <div className="text-2xl font-bold">{idea.scores.impact}%</div>
                      <div className="text-sm text-muted-foreground">Impact</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center">
                      <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
                      <div className="text-2xl font-bold">{idea.scores.market}%</div>
                      <div className="text-sm text-muted-foreground">Market Fit</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Founder</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={idea.founder.image || "/placeholder.svg"} alt={idea.founder.name} />
                  <AvatarFallback>
                    {idea.founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{idea.founder.name}</div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="mr-1 h-3 w-3" />
                    {idea.founder.location}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Founder
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Idea Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Category:</span>
                  <span className="font-medium">{idea.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Development Stage:</span>
                  <span className="font-medium">{idea.stage}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Submitted:</span>
                  <span className="font-medium">{idea.submitted}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support This Idea</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Target className="mr-2 h-4 w-4" />
                Invest in This Idea
              </Button>
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Offer Mentorship
              </Button>
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Offer Legal Help
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
