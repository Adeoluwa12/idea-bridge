import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Star } from "lucide-react"

export default function MentorsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Find a Mentor</h1>
        <p className="text-muted-foreground">Connect with experienced mentors who can help develop your idea</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search mentors by name, expertise..." className="pl-8" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Expertise" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Expertise</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="agri">Agriculture</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="edu">Education</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="legal">Legal</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="lagos">Lagos</SelectItem>
              <SelectItem value="abuja">Abuja</SelectItem>
              <SelectItem value="ph">Port Harcourt</SelectItem>
              <SelectItem value="kano">Kano</SelectItem>
              <SelectItem value="enugu">Enugu</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="rating">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="experience">Most Experienced</SelectItem>
              <SelectItem value="recent">Recently Active</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="David Adeyemi" />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>David Adeyemi</CardTitle>
                  <CardDescription>Agricultural Technology Expert</CardDescription>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">4.9</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                15+ years experience in agricultural technology and innovation. Specializes in irrigation systems and
                sustainable farming practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Agriculture</Badge>
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Sustainability</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Ideas Mentored:</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span>85%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Request Mentorship</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Ngozi Emenike" />
                  <AvatarFallback>NE</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Ngozi Emenike</CardTitle>
                  <CardDescription>Healthcare Innovation Specialist</CardDescription>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">4.8</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Medical doctor with 10+ years experience in healthcare innovation. Passionate about telemedicine and
                healthcare access solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Healthcare</Badge>
                <Badge variant="outline">Telemedicine</Badge>
                <Badge variant="outline">Public Health</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Abuja, Nigeria</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Ideas Mentored:</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Request Mentorship</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Chidi Kalu" />
                  <AvatarFallback>CK</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Chidi Kalu</CardTitle>
                  <CardDescription>EdTech Entrepreneur</CardDescription>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">4.7</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Founder of two successful EdTech startups. Expert in educational content development and distribution in
                low-connectivity environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Education</Badge>
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Content Development</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Enugu, Nigeria</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Ideas Mentored:</span>
                  <span>15</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Request Mentorship</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Tunde Okonkwo" />
                  <AvatarFallback>TO</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Tunde Okonkwo</CardTitle>
                  <CardDescription>Renewable Energy Specialist</CardDescription>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">4.6</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Engineer with expertise in renewable energy solutions for developing markets. Specializes in solar and
                micro-grid technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Energy</Badge>
                <Badge variant="outline">Solar</Badge>
                <Badge variant="outline">Engineering</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Ideas Mentored:</span>
                  <span>7</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span>75%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Request Mentorship</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Amina Bello" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Amina Bello</CardTitle>
                  <CardDescription>Fintech Expert</CardDescription>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">4.9</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Banking professional with expertise in financial technology and inclusion. Experienced in microfinance
                and digital payment systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Finance</Badge>
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Microfinance</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Kano, Nigeria</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Ideas Mentored:</span>
                  <span>10</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span>85%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Request Mentorship</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Emeka Johnson" />
                  <AvatarFallback>EJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Emeka Johnson</CardTitle>
                  <CardDescription>Legal Advisor</CardDescription>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 text-sm font-medium">4.7</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Attorney specializing in intellectual property and startup law. Helps innovators protect their ideas and
                navigate regulatory requirements.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Legal</Badge>
                <Badge variant="outline">IP Protection</Badge>
                <Badge variant="outline">Regulatory</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Location:</span>
                  <span>Port Harcourt, Nigeria</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Ideas Mentored:</span>
                  <span>14</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Success Rate:</span>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Request Mentorship</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="mx-2">
          Previous
        </Button>
        <Button variant="outline" className="mx-2">
          Next
        </Button>
      </div>
    </div>
  )
}
