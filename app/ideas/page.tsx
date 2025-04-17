import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

export default function IdeasGalleryPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Ideas Gallery</h1>
        <p className="text-muted-foreground">Explore innovative ideas from across Nigeria</p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search ideas..." className="pl-8" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
              <SelectItem value="agri">Agriculture</SelectItem>
              <SelectItem value="health">Healthcare</SelectItem>
              <SelectItem value="edu">Education</SelectItem>
              <SelectItem value="energy">Energy</SelectItem>
              <SelectItem value="env">Environment</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="SDG" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All SDGs</SelectItem>
              <SelectItem value="sdg1">No Poverty</SelectItem>
              <SelectItem value="sdg2">Zero Hunger</SelectItem>
              <SelectItem value="sdg3">Good Health</SelectItem>
              <SelectItem value="sdg4">Quality Education</SelectItem>
              <SelectItem value="sdg6">Clean Water</SelectItem>
              <SelectItem value="sdg7">Clean Energy</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="popular">
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="impact">Highest Impact</SelectItem>
              <SelectItem value="innovation">Most Innovative</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon" className="w-full sm:w-auto">
            <Filter className="h-4 w-4" />
            <span className="ml-2 sm:hidden">Filter</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>AgriTech Solution</CardTitle>
              <Badge>Agriculture</Badge>
            </div>
            <CardDescription>Smart irrigation system for small-scale farmers</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              An affordable smart irrigation system that helps small-scale farmers optimize water usage and increase
              crop yields.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Innovation Score:</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Impact Score:</span>
                <span className="font-medium">90%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">SDG Alignment:</span>
                <span className="font-medium">SDG 2, 6</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/ideas/agritech-solution" className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
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
            <p className="text-sm text-muted-foreground mb-4">
              A telemedicine platform that connects patients in rural areas with healthcare professionals, improving
              access to quality healthcare.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Innovation Score:</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Impact Score:</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">SDG Alignment:</span>
                <span className="font-medium">SDG 3</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/ideas/healthconnect" className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
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
            <p className="text-sm text-muted-foreground mb-4">
              A platform providing accessible educational content to underserved communities, with offline capabilities
              for areas with limited internet.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Innovation Score:</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Impact Score:</span>
                <span className="font-medium">88%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">SDG Alignment:</span>
                <span className="font-medium">SDG 4</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/ideas/edutech-platform" className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Renewable Energy Solution</CardTitle>
              <Badge>Energy</Badge>
            </div>
            <CardDescription>Low-cost solar panels for rural communities</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Affordable solar panel technology designed specifically for rural Nigerian communities, with simplified
              installation and maintenance.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Innovation Score:</span>
                <span className="font-medium">82%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Impact Score:</span>
                <span className="font-medium">87%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">SDG Alignment:</span>
                <span className="font-medium">SDG 7</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/ideas/renewable-energy-solution" className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
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
            <p className="text-sm text-muted-foreground mb-4">
              A mobile application that incentivizes and coordinates community-based waste collection and recycling
              efforts.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Innovation Score:</span>
                <span className="font-medium">75%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Impact Score:</span>
                <span className="font-medium">80%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">SDG Alignment:</span>
                <span className="font-medium">SDG 11, 12</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/ideas/waste-management-app" className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
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
            <p className="text-sm text-muted-foreground mb-4">
              A digital platform providing microloans to small businesses and entrepreneurs who lack access to
              traditional banking services.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Innovation Score:</span>
                <span className="font-medium">79%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Impact Score:</span>
                <span className="font-medium">84%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">SDG Alignment:</span>
                <span className="font-medium">SDG 1, 8</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/ideas/microfinance-platform" className="w-full">
              <Button variant="outline" className="w-full">
                View Details
              </Button>
            </Link>
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
