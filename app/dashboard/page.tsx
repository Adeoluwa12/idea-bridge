"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Lightbulb,
  Users,
  TrendingUp,
  MessageSquare,
  Bell,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  Plus,
} from "lucide-react"

export default function DashboardPage() {
  const [userRole, setUserRole] = useState("submitter") // In a real app, this would come from auth

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Manage your ideas, connections, and messages</p>
      </div>

      {userRole === "submitter" && <SubmitterDashboard />}

      {userRole === "mentor" && <MentorDashboard />}

      {userRole === "investor" && <InvestorDashboard />}
    </div>
  )
}

function SubmitterDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Ideas</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved Ideas</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">67% approval rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mentors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Connected to your ideas</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 unread messages</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ideas" className="space-y-4">
        <TabsList className="flex flex-wrap w-full">
          <TabsTrigger value="ideas" className="flex-1">
            My Ideas
          </TabsTrigger>
          <TabsTrigger value="evaluation" className="flex-1">
            Evaluation
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex-1">
            Messages
          </TabsTrigger>
          <TabsTrigger value="mentors" className="flex-1">
            Connected Mentors
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ideas" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">My Ideas</h2>
            <Link href="/submit-idea">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" />
                Submit New Idea
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AgriTech Solution</CardTitle>
                  <Badge className="bg-green-600">Approved</Badge>
                </div>
                <CardDescription>Smart irrigation system for small-scale farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Feasibility Score:</span>
                    <span className="font-medium">72%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impact Score:</span>
                    <span className="font-medium">90%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>HealthConnect</CardTitle>
                  <Badge className="bg-green-600">Approved</Badge>
                </div>
                <CardDescription>Mobile app connecting rural patients with doctors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Feasibility Score:</span>
                    <span className="font-medium">80%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impact Score:</span>
                    <span className="font-medium">85%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>EduTech Platform</CardTitle>
                  <Badge className="bg-amber-500">Under Review</Badge>
                </div>
                <CardDescription>Educational content for underserved communities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-4">
                  <div className="flex flex-col items-center text-center">
                    <Clock className="h-10 w-10 text-amber-500 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Your idea is currently being evaluated. We'll notify you when the evaluation is complete.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="evaluation" className="space-y-4">
          <h2 className="text-xl font-semibold">Evaluation Status</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AgriTech Solution</CardTitle>
                  <Badge className="bg-green-600">Approved</Badge>
                </div>
                <CardDescription>Submitted on April 10, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Idea content analysis complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Innovation level assessment complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Feasibility evaluation complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Impact potential calculation complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Final report generated</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Full Evaluation
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>EduTech Platform</CardTitle>
                  <Badge className="bg-amber-500">In Progress</Badge>
                </div>
                <CardDescription>Submitted on April 15, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Idea content analysis complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Innovation level assessment complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-amber-500" />
                    <span>Feasibility evaluation in progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Impact potential calculation pending</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-muted-foreground" />
                    <span className="text-muted-foreground">Final report pending</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button disabled className="w-full">
                  Evaluation in Progress
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>David Adeyemi</CardTitle>
                  <Badge>Mentor</Badge>
                </div>
                <CardDescription>Regarding: AgriTech Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I'm impressed with your irrigation system idea. I'd like to discuss how we can improve the sensor
                  technology to make it more affordable for small-scale farmers.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Reply
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>System Notification</CardTitle>
                  <Badge variant="outline">Notification</Badge>
                </div>
                <CardDescription>Regarding: HealthConnect</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Your idea has been viewed by 3 potential investors in the healthcare sector. Check your dashboard for
                  more details.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Legal Support Team</CardTitle>
                  <Badge variant="outline">Legal</Badge>
                </div>
                <CardDescription>Regarding: HealthConnect</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We've prepared some information about healthcare data privacy regulations that will be important for
                  your app. Would you like to schedule a consultation?
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mentors" className="space-y-4">
          <h2 className="text-xl font-semibold">Connected Mentors</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>David Adeyemi</CardTitle>
                  <Badge className="bg-green-600">Active</Badge>
                </div>
                <CardDescription>Agricultural Technology Expert</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Connected to:</span>
                    <span className="font-medium">AgriTech Solution</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Connected since:</span>
                    <span className="font-medium">April 12, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last interaction:</span>
                    <span className="font-medium">Today</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Profile</Button>
                <Button>Send Message</Button>
              </CardFooter>
            </Card>

            <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-md">
              <Users className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Find More Mentors</h3>
              <p className="text-sm text-muted-foreground text-center mb-4">
                Connect with experienced mentors who can help develop your ideas
              </p>
              <Link href="/mentors">
                <Button className="bg-green-600 hover:bg-green-700">Browse Mentors</Button>
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function MentorDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ideas Mentoring</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mentees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Active mentorship relationships</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 unread messages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Ideas needing mentorship</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="ideas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="ideas">Ideas Needing Help</TabsTrigger>
          <TabsTrigger value="mentees">My Mentees</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="ideas" className="space-y-4">
          <h2 className="text-xl font-semibold">Ideas Needing Mentorship</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Renewable Energy Solution</CardTitle>
                  <Badge>Energy</Badge>
                </div>
                <CardDescription>Low-cost solar panels for rural communities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Feasibility Score:</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impact Score:</span>
                    <span className="font-medium">90%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Submitted by:</span>
                    <span className="font-medium">Chioma N.</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Offer Mentorship</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Waste Management App</CardTitle>
                  <Badge>Environment</Badge>
                </div>
                <CardDescription>Mobile app for community waste recycling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Feasibility Score:</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Impact Score:</span>
                    <span className="font-medium">80%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Submitted by:</span>
                    <span className="font-medium">Tunde O.</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">Offer Mentorship</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mentees" className="space-y-4">
          <h2 className="text-xl font-semibold">My Mentees</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Adebayo Ogunlesi</CardTitle>
                  <Badge className="bg-green-600">Active</Badge>
                </div>
                <CardDescription>AgriTech Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mentoring since:</span>
                    <span className="font-medium">April 12, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last interaction:</span>
                    <span className="font-medium">Today</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress:</span>
                    <span className="font-medium">75% complete</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Profile</Button>
                <Button>Send Message</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Ngozi Emenike</CardTitle>
                  <Badge className="bg-green-600">Active</Badge>
                </div>
                <CardDescription>HealthConnect</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mentoring since:</span>
                    <span className="font-medium">March 28, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last interaction:</span>
                    <span className="font-medium">2 days ago</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress:</span>
                    <span className="font-medium">60% complete</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Profile</Button>
                <Button>Send Message</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Adebayo Ogunlesi</CardTitle>
                  <Badge>Mentee</Badge>
                </div>
                <CardDescription>Regarding: AgriTech Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Thank you for your feedback on the sensor technology. I've made the adjustments you suggested and
                  would love to get your thoughts on the new design.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Reply
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>System Notification</CardTitle>
                  <Badge variant="outline">Notification</Badge>
                </div>
                <CardDescription>New Mentorship Request</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  You have a new mentorship request from Chidi Kalu for their EduTech Platform idea. Review their
                  profile and idea to decide if you'd like to offer mentorship.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Request
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function InvestorDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trending Ideas</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Matching your investment criteria</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Invested Projects</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active investments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 unread messages</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saved Ideas</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Ideas you're tracking</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="trending">Trending Ideas</TabsTrigger>
          <TabsTrigger value="invested">My Investments</TabsTrigger>
          <TabsTrigger value="saved">Saved Ideas</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="trending" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Trending Ideas</h2>
            <div className="flex items-center space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by sector" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="agri">Agriculture</SelectItem>
                  <SelectItem value="health">Healthcare</SelectItem>
                  <SelectItem value="edu">Education</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AgriTech Solution</CardTitle>
                  <Badge>Agriculture</Badge>
                </div>
                <CardDescription>Smart irrigation system for small-scale farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Market Potential:</span>
                    <span className="font-medium">High</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Development Stage:</span>
                    <span className="font-medium">Prototype</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Contact Founder</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>HealthConnect</CardTitle>
                  <Badge>Healthcare</Badge>
                </div>
                <CardDescription>Mobile app connecting rural patients with doctors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Market Potential:</span>
                    <span className="font-medium">Very High</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Development Stage:</span>
                    <span className="font-medium">MVP</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Contact Founder</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>EduTech Platform</CardTitle>
                  <Badge>Education</Badge>
                </div>
                <CardDescription>Educational content for underserved communities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Market Potential:</span>
                    <span className="font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Development Stage:</span>
                    <span className="font-medium">Concept</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Contact Founder</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="invested" className="space-y-4">
          <h2 className="text-xl font-semibold">My Investments</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AgriTech Solution</CardTitle>
                  <Badge className="bg-green-600">Active</Badge>
                </div>
                <CardDescription>Smart irrigation system for small-scale farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Invested:</span>
                    <span className="font-medium">April 15, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Development Stage:</span>
                    <span className="font-medium">Prototype</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Founder:</span>
                    <span className="font-medium">Adebayo Ogunlesi</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Next Milestone:</span>
                    <span className="font-medium">Field Testing (May 2025)</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Progress Report</Button>
                <Button>Contact Founder</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <h2 className="text-xl font-semibold">Saved Ideas</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Renewable Energy Solution</CardTitle>
                  <Badge>Energy</Badge>
                </div>
                <CardDescription>Low-cost solar panels for rural communities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">82%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Market Potential:</span>
                    <span className="font-medium">High</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Development Stage:</span>
                    <span className="font-medium">Concept</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Request Pitch Deck</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Waste Management App</CardTitle>
                  <Badge>Environment</Badge>
                </div>
                <CardDescription>Mobile app for community waste recycling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Innovation Score:</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Market Potential:</span>
                    <span className="font-medium">Medium</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Development Stage:</span>
                    <span className="font-medium">Prototype</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Request Pitch Deck</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <h2 className="text-xl font-semibold">Messages</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Adebayo Ogunlesi</CardTitle>
                  <Badge>Founder</Badge>
                </div>
                <CardDescription>Regarding: AgriTech Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Thank you for your interest in our irrigation system. I've attached our latest prototype test results
                  and would be happy to schedule a demo for you.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Reply
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>System Notification</CardTitle>
                  <Badge variant="outline">Notification</Badge>
                </div>
                <CardDescription>New Investment Opportunity</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  A new idea matching your investment criteria has been added to the platform. Check your dashboard for
                  more details.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Opportunity
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
