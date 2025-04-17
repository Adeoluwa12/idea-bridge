"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, FileText, Scale, Shield, AlertTriangle } from "lucide-react"

export default function LegalDashboardPage() {
  const [activeTab, setActiveTab] = useState("needs-help")

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Legal Support Dashboard</h1>
        <p className="text-muted-foreground">Provide legal assistance to Nigerian innovators</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ideas Needing Legal Help</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Scale className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Currently providing assistance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Cases</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Successfully resolved</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 unread messages</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search ideas or founders..." className="pl-8" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Legal Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="ip">Intellectual Property</SelectItem>
              <SelectItem value="business">Business Formation</SelectItem>
              <SelectItem value="regulatory">Regulatory Compliance</SelectItem>
              <SelectItem value="contracts">Contracts</SelectItem>
              <SelectItem value="privacy">Data Privacy</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="agri">Agriculture</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="edu">Education</SelectItem>
              <SelectItem value="energy">Energy</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="urgent">Most Urgent</SelectItem>
              <SelectItem value="complexity">Complexity</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="needs-help" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="needs-help">Needs Legal Help</TabsTrigger>
          <TabsTrigger value="active">Active Cases</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>

        <TabsContent value="needs-help" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>HealthConnect</CardTitle>
                  <Badge>Healthcare</Badge>
                </div>
                <CardDescription>Mobile app connecting rural patients with doctors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Ngozi E." />
                      <AvatarFallback>NE</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Ngozi Emenike</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Legal Needs:</h3>
                    <p className="text-sm text-muted-foreground">
                      Requires assistance with healthcare data privacy regulations and patient confidentiality
                      requirements for telemedicine applications.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Data Privacy</Badge>
                    <Badge variant="outline">Healthcare Regulations</Badge>
                    <Badge
                      variant="secondary"
                      className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                    >
                      Urgent
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Offer Legal Help</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AgriTech Solution</CardTitle>
                  <Badge>Agriculture</Badge>
                </div>
                <CardDescription>Smart irrigation system for small-scale farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Adebayo O." />
                      <AvatarFallback>AO</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Adebayo Ogunlesi</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Legal Needs:</h3>
                    <p className="text-sm text-muted-foreground">
                      Seeking patent protection for their irrigation technology and advice on forming a company to
                      commercialize the product.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Intellectual Property</Badge>
                    <Badge variant="outline">Business Formation</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Offer Legal Help</Button>
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Chidi K." />
                      <AvatarFallback>CK</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Chidi Kalu</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Legal Needs:</h3>
                    <p className="text-sm text-muted-foreground">
                      Needs assistance with content licensing agreements and copyright protection for educational
                      materials.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Copyright</Badge>
                    <Badge variant="outline">Licensing</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Offer Legal Help</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Microfinance Platform</CardTitle>
                  <Badge>Finance</Badge>
                </div>
                <CardDescription>Digital microloans for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Amina B." />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Amina Bello</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Legal Needs:</h3>
                    <p className="text-sm text-muted-foreground">
                      Requires guidance on financial regulations, lending licenses, and compliance with Nigerian banking
                      laws.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Financial Regulations</Badge>
                    <Badge variant="outline">Compliance</Badge>
                    <Badge
                      variant="secondary"
                      className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
                    >
                      Urgent
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button className="bg-green-600 hover:bg-green-700">Offer Legal Help</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Renewable Energy Solution</CardTitle>
                  <Badge>Energy</Badge>
                </div>
                <CardDescription>Low-cost solar panels for rural communities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Tunde O." />
                      <AvatarFallback>TO</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Tunde Okonkwo</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Legal Assistance:</h3>
                    <p className="text-sm text-muted-foreground">
                      Providing guidance on energy sector regulations and helping secure necessary permits for solar
                      installation.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Regulatory Compliance</Badge>
                    <Badge variant="outline">Permits</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Started:</span>
                    <span className="font-medium">April 10, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium">Drafting permit applications</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Case File</Button>
                <Button>Send Update</Button>
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Chioma N." />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Chioma Nwosu</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Legal Assistance:</h3>
                    <p className="text-sm text-muted-foreground">
                      Assisting with terms of service, privacy policy, and environmental compliance regulations for the
                      waste management platform.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Terms of Service</Badge>
                    <Badge variant="outline">Privacy Policy</Badge>
                    <Badge variant="outline">Environmental Regulations</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Started:</span>
                    <span className="font-medium">April 5, 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium">Finalizing documents</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Case File</Button>
                <Button>Send Update</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>FarmConnect</CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    Completed
                  </Badge>
                </div>
                <CardDescription>Marketplace connecting farmers to buyers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Ibrahim M." />
                      <AvatarFallback>IM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Ibrahim Mohammed</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Legal Assistance Provided:</h3>
                    <p className="text-sm text-muted-foreground">
                      Drafted marketplace terms, seller agreements, and advised on e-commerce regulations for
                      agricultural products.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">E-commerce</Badge>
                    <Badge variant="outline">Contracts</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completed:</span>
                    <span className="font-medium">March 25, 2025</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Case History</Button>
                <Button variant="outline">Follow Up</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>MedTrack</CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    Completed
                  </Badge>
                </div>
                <CardDescription>Medication tracking and reminder app</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Folake A." />
                      <AvatarFallback>FA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Folake Adeyemi</div>
                      <div className="text-sm text-muted-foreground">Founder</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Legal Assistance Provided:</h3>
                    <p className="text-sm text-muted-foreground">
                      Advised on health data privacy regulations, drafted privacy policy, and helped secure necessary
                      health sector approvals.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Healthcare Regulations</Badge>
                    <Badge variant="outline">Data Privacy</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completed:</span>
                    <span className="font-medium">March 15, 2025</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Case History</Button>
                <Button variant="outline">Follow Up</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Ngozi Emenike</CardTitle>
                  <Badge>Founder</Badge>
                </div>
                <CardDescription>Regarding: HealthConnect</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Thank you for offering to help with our healthcare data privacy concerns. I've attached our current
                  privacy policy draft. Could you review it and suggest improvements to ensure we're compliant with
                  Nigerian health data regulations?
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
                <CardDescription>New Legal Request</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  You have a new legal assistance request from Adebayo Ogunlesi for their AgriTech Solution. They need
                  help with patent protection and business formation.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Request
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Tunde Okonkwo</CardTitle>
                  <Badge>Founder</Badge>
                </div>
                <CardDescription>Regarding: Renewable Energy Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I've received the draft permit applications you prepared. They look good, but I have a few questions
                  about the environmental impact assessment requirements. Could we schedule a call to discuss?
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Reply
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
