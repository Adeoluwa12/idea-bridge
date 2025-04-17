import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter } from "lucide-react"

export default function InvestorsPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Investors & Partners</h1>
        <p className="text-muted-foreground">Connect with investors and partners to bring your idea to life</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search investors by name, focus area..." className="pl-8" />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Investor Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="vc">Venture Capital</SelectItem>
              <SelectItem value="angel">Angel Investors</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="ngo">NGOs</SelectItem>
              <SelectItem value="government">Government</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Focus Area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Areas</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="agri">Agriculture</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="edu">Education</SelectItem>
              <SelectItem value="energy">Energy</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="active">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="active">Most Active</SelectItem>
              <SelectItem value="recent">Recently Joined</SelectItem>
              <SelectItem value="investment">Investment Size</SelectItem>
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
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Nigeria Innovation Fund" />
                  <AvatarFallback>NIF</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Nigeria Innovation Fund</CardTitle>
                  <CardDescription>Venture Capital</CardDescription>
                </div>
              </div>
              <Badge className="bg-green-600">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Early-stage venture capital fund focused on Nigerian tech startups with high growth potential and
                positive social impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Fintech</Badge>
                <Badge variant="outline">Healthcare</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Investment Range:</span>
                  <span>₦5M - ₦50M</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Ideas Funded:</span>
                  <span>15</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Stage Focus:</span>
                  <span>Seed, Series A</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Connect</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Green Africa Initiative" />
                  <AvatarFallback>GAI</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Green Africa Initiative</CardTitle>
                  <CardDescription>NGO / Impact Investor</CardDescription>
                </div>
              </div>
              <Badge className="bg-green-600">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Non-profit organization providing grants and investments to sustainable development projects across
                Nigeria with focus on environmental impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Agriculture</Badge>
                <Badge variant="outline">Renewable Energy</Badge>
                <Badge variant="outline">Water</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Grant/Investment Range:</span>
                  <span>₦2M - ₦20M</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Projects Supported:</span>
                  <span>28</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Focus:</span>
                  <span>Sustainability, SDGs</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Connect</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Lagos Angel Network" />
                  <AvatarFallback>LAN</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Lagos Angel Network</CardTitle>
                  <CardDescription>Angel Investors</CardDescription>
                </div>
              </div>
              <Badge className="bg-green-600">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Network of angel investors providing early-stage funding, mentorship, and connections to Nigerian
                startups with innovative solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">E-commerce</Badge>
                <Badge variant="outline">Services</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Investment Range:</span>
                  <span>₦1M - ₦15M</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Startups Funded:</span>
                  <span>32</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Stage Focus:</span>
                  <span>Pre-seed, Seed</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Connect</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Nigerian Healthcare Fund" />
                  <AvatarFallback>NHF</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Nigerian Healthcare Fund</CardTitle>
                  <CardDescription>Sector-Specific Fund</CardDescription>
                </div>
              </div>
              <Badge className="bg-green-600">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Investment fund dedicated to healthcare innovations that improve access, quality, and affordability of
                healthcare services across Nigeria.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Healthcare</Badge>
                <Badge variant="outline">MedTech</Badge>
                <Badge variant="outline">Telemedicine</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Investment Range:</span>
                  <span>₦10M - ₦75M</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Companies in Portfolio:</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Stage Focus:</span>
                  <span>Seed, Series A</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Connect</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Abuja Tech Ventures" />
                  <AvatarFallback>ATV</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Abuja Tech Ventures</CardTitle>
                  <CardDescription>Venture Capital</CardDescription>
                </div>
              </div>
              <Badge className="bg-green-600">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Technology-focused venture capital firm investing in startups that leverage technology to solve Nigerian
                and African challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">AI/ML</Badge>
                <Badge variant="outline">Fintech</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Investment Range:</span>
                  <span>₦15M - ₦100M</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Companies in Portfolio:</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Stage Focus:</span>
                  <span>Seed, Series A, Series B</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Connect</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Nigerian Youth Innovation Fund" />
                  <AvatarFallback>NYIF</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Nigerian Youth Innovation Fund</CardTitle>
                  <CardDescription>Government Initiative</CardDescription>
                </div>
              </div>
              <Badge className="bg-green-600">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Government-backed fund providing grants and low-interest loans to young Nigerian entrepreneurs with
                innovative ideas across various sectors.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Multi-sector</Badge>
                <Badge variant="outline">Youth-led</Badge>
                <Badge variant="outline">Social Impact</Badge>
              </div>
              <div className="text-sm">
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Funding Range:</span>
                  <span>₦500K - ₦10M</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Projects Funded:</span>
                  <span>150+</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted-foreground">Focus:</span>
                  <span>Youth Empowerment, Job Creation</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">Connect</Button>
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
