"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, AlertCircle, Loader2, BarChart3, Award, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function IdeaEvaluationPage() {
  const router = useRouter()
  const [evaluationStage, setEvaluationStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [evaluationComplete, setEvaluationComplete] = useState(false)
  const [evaluationPassed, setEvaluationPassed] = useState(false)
  const [scores, setScores] = useState({
    innovation: 0,
    feasibility: 0,
    impact: 0,
    market: 0,
  })

  // Simulate evaluation process
  useEffect(() => {
    const timer = setTimeout(() => {
      if (evaluationStage < 4) {
        setEvaluationStage(evaluationStage + 1)
        setProgress((evaluationStage + 1) * 25)
      } else {
        setEvaluationComplete(true)
        // Simulate a passed evaluation (in a real app, this would be determined by the actual evaluation)
        setEvaluationPassed(true)
        setScores({
          innovation: 85,
          feasibility: 72,
          impact: 90,
          market: 78,
        })
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [evaluationStage])

  const handleContinue = () => {
    if (evaluationPassed) {
      router.push("/dashboard")
    } else {
      router.push("/idea-feedback")
    }
  }

  const evaluationStages = [
    { name: "Analyzing idea content", icon: <Loader2 className="h-5 w-5 animate-spin" /> },
    { name: "Assessing innovation level", icon: <Loader2 className="h-5 w-5 animate-spin" /> },
    { name: "Evaluating feasibility", icon: <Loader2 className="h-5 w-5 animate-spin" /> },
    { name: "Calculating impact potential", icon: <Loader2 className="h-5 w-5 animate-spin" /> },
    { name: "Generating final report", icon: <Loader2 className="h-5 w-5 animate-spin" /> },
  ]

  return (
    <div className="container py-10">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-col space-y-2 text-center mb-8">
          <h1 className="text-3xl font-bold">Idea Evaluation</h1>
          <p className="text-muted-foreground">Our system is analyzing your idea to provide valuable feedback</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Evaluation Progress</CardTitle>
            <CardDescription>Please wait while we evaluate your idea</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Progress value={progress} className="h-2 w-full" />

            <div className="space-y-4">
              {evaluationStages.map((stage, index) => (
                <div key={index} className="flex items-center">
                  <div className={`mr-4 ${index <= evaluationStage ? "text-green-600" : "text-muted-foreground"}`}>
                    {index < evaluationStage ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : index === evaluationStage ? (
                      stage.icon
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-muted" />
                    )}
                  </div>
                  <span className={index <= evaluationStage ? "font-medium" : "text-muted-foreground"}>
                    {stage.name}
                  </span>
                </div>
              ))}
            </div>

            {evaluationComplete && (
              <div className="mt-8 space-y-6">
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted">
                  {evaluationPassed ? (
                    <div className="flex flex-col items-center text-center">
                      <CheckCircle className="h-16 w-16 text-green-600 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
                      <p className="text-muted-foreground">
                        Your idea has been evaluated as viable and has strong potential for impact.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center">
                      <AlertCircle className="h-16 w-16 text-amber-500 mb-4" />
                      <h3 className="text-xl font-bold mb-2">Your idea needs refinement</h3>
                      <p className="text-muted-foreground">
                        We've identified some areas where your idea could be improved.
                      </p>
                    </div>
                  )}
                </div>

                {evaluationPassed && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-green-600" />
                      Idea Scorecard
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center">
                            <Award className="h-8 w-8 text-green-600 mb-2" />
                            <div className="text-2xl font-bold">{scores.innovation}%</div>
                            <div className="text-sm text-muted-foreground">Innovation Level</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center">
                            <TrendingUp className="h-8 w-8 text-green-600 mb-2" />
                            <div className="text-2xl font-bold">{scores.feasibility}%</div>
                            <div className="text-sm text-muted-foreground">Feasibility</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center">
                            <Users className="h-8 w-8 text-green-600 mb-2" />
                            <div className="text-2xl font-bold">{scores.impact}%</div>
                            <div className="text-sm text-muted-foreground">Impact Potential</div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center">
                            <BarChart3 className="h-8 w-8 text-green-600 mb-2" />
                            <div className="text-2xl font-bold">{scores.market}%</div>
                            <div className="text-sm text-muted-foreground">Market Fit</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter>
            {evaluationComplete ? (
              <Button onClick={handleContinue} className="w-full bg-green-600 hover:bg-green-700">
                {evaluationPassed ? "Find a Mentor" : "See Recommendations"}
              </Button>
            ) : (
              <Button disabled className="w-full">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Evaluating...
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
