"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lightbulb, Upload, Mic, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SubmitIdeaPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [problem, setProblem] = useState("")
  const [description, setDescription] = useState("")
  const [audience, setAudience] = useState("")
  const [industry, setIndustry] = useState("")
  const [sdg, setSdg] = useState("")
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission and evaluation process
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to evaluation page
      router.push("/idea-evaluation")
    }, 2000)
  }

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold">Submit Your Idea</h1>
          <p className="text-muted-foreground">
            Share your innovative solution and get feedback, mentorship, and support
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-green-600" />
              Idea Submission Form
            </CardTitle>
            <CardDescription>Fill out the details below to submit your idea for evaluation</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Idea Title</Label>
                <Input
                  id="title"
                  placeholder="Give your idea a catchy, descriptive title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="problem">Problem You're Solving</Label>
                <Textarea
                  id="problem"
                  placeholder="Describe the problem your idea addresses"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  required
                  className="min-h-[100px]"
                />
              </div>

              <Tabs defaultValue="text" className="w-full">
                <Label>Describe Your Idea</Label>
                <TabsList className="grid w-full grid-cols-3 my-2">
                  <TabsTrigger value="text">
                    <Send className="mr-2 h-4 w-4" />
                    Text
                  </TabsTrigger>
                  <TabsTrigger value="audio">
                    <Mic className="mr-2 h-4 w-4" />
                    Audio
                  </TabsTrigger>
                  <TabsTrigger value="upload">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="text">
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of your idea and how it works"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="min-h-[150px]"
                  />
                </TabsContent>
                <TabsContent value="audio">
                  <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-md">
                    <Mic className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">Click to record your idea description</p>
                    <Button type="button" variant="outline">
                      Start Recording
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="upload">
                  <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-md">
                    <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                    <p className="text-sm text-muted-foreground mb-4">Upload a document, video, or presentation</p>
                    <Button type="button" variant="outline">
                      Choose File
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="space-y-2">
                <Label htmlFor="audience">Target Audience</Label>
                <Input
                  id="audience"
                  placeholder="Who will benefit from your idea?"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={industry} onValueChange={setIndustry} required>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="energy">Energy</SelectItem>
                      <SelectItem value="transportation">Transportation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="app">Mobile App</SelectItem>
                      <SelectItem value="web">Web Platform</SelectItem>
                      <SelectItem value="hardware">Hardware/Device</SelectItem>
                      <SelectItem value="service">Service</SelectItem>
                      <SelectItem value="process">Process Improvement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sdg">SDG Alignment</Label>
                <Select value={sdg} onValueChange={setSdg}>
                  <SelectTrigger id="sdg">
                    <SelectValue placeholder="Select primary SDG alignment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sdg1">No Poverty</SelectItem>
                    <SelectItem value="sdg2">Zero Hunger</SelectItem>
                    <SelectItem value="sdg3">Good Health and Well-being</SelectItem>
                    <SelectItem value="sdg4">Quality Education</SelectItem>
                    <SelectItem value="sdg5">Gender Equality</SelectItem>
                    <SelectItem value="sdg6">Clean Water and Sanitation</SelectItem>
                    <SelectItem value="sdg7">Affordable and Clean Energy</SelectItem>
                    <SelectItem value="sdg8">Decent Work and Economic Growth</SelectItem>
                    <SelectItem value="sdg9">Industry, Innovation and Infrastructure</SelectItem>
                    <SelectItem value="sdg10">Reduced Inequality</SelectItem>
                    <SelectItem value="sdg11">Sustainable Cities and Communities</SelectItem>
                    <SelectItem value="sdg12">Responsible Consumption and Production</SelectItem>
                    <SelectItem value="sdg13">Climate Action</SelectItem>
                    <SelectItem value="sdg14">Life Below Water</SelectItem>
                    <SelectItem value="sdg15">Life on Land</SelectItem>
                    <SelectItem value="sdg16">Peace, Justice and Strong Institutions</SelectItem>
                    <SelectItem value="sdg17">Partnerships for the Goals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="media">Media Upload (Optional)</Label>
                <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-md">
                  <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload images, videos, or documents to support your idea
                  </p>
                  <Button type="button" variant="outline">
                    Choose Files
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Idea for Evaluation"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
