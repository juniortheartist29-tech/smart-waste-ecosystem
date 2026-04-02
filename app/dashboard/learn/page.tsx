"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  PlayCircle,
  FileText,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Lightbulb,
  Recycle,
  Leaf,
  Zap,
  Droplets,
  Info,
} from "lucide-react"

interface Course {
  id: number
  title: string
  description: string
  category: string
  duration: string
  lessons: number
  progress?: number
  completed?: boolean
  points: number
  level: "Beginner" | "Intermediate" | "Advanced"
  icon: React.ElementType
}

interface Article {
  id: number
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  featured?: boolean
}

const courses: Course[] = [
  {
    id: 1,
    title: "Waste Segregation 101",
    description: "Learn the basics of sorting your household waste into the right categories",
    category: "Basics",
    duration: "15 min",
    lessons: 5,
    progress: 80,
    points: 100,
    level: "Beginner",
    icon: Recycle,
  },
  {
    id: 2,
    title: "Home Composting Guide",
    description: "Turn your kitchen waste into nutrient-rich compost for your garden",
    category: "Composting",
    duration: "25 min",
    lessons: 8,
    progress: 45,
    points: 150,
    level: "Intermediate",
    icon: Leaf,
  },
  {
    id: 3,
    title: "E-Waste Disposal",
    description: "Safely dispose of electronic devices and understand their impact",
    category: "E-Waste",
    duration: "20 min",
    lessons: 6,
    progress: 0,
    points: 200,
    level: "Intermediate",
    icon: Zap,
  },
  {
    id: 4,
    title: "Plastic-Free Living",
    description: "Practical tips to reduce single-use plastic in your daily life",
    category: "Sustainability",
    duration: "30 min",
    lessons: 10,
    completed: true,
    points: 250,
    level: "Advanced",
    icon: Droplets,
  },
  {
    id: 5,
    title: "Understanding Recycling Symbols",
    description: "Decode the numbers and symbols on plastic packaging",
    category: "Basics",
    duration: "10 min",
    lessons: 4,
    progress: 0,
    points: 80,
    level: "Beginner",
    icon: Info,
  },
  {
    id: 6,
    title: "Circular Economy Explained",
    description: "How waste becomes a resource in the circular economy model",
    category: "Advanced",
    duration: "35 min",
    lessons: 12,
    progress: 0,
    points: 300,
    level: "Advanced",
    icon: Recycle,
  },
]

const articles: Article[] = [
  {
    id: 1,
    title: "5 Common Recycling Mistakes You Should Avoid",
    excerpt: "Many well-intentioned recyclers accidentally contaminate recycling bins. Learn how to avoid these common mistakes.",
    category: "Tips",
    readTime: "5 min read",
    date: "Mar 15, 2024",
    featured: true,
  },
  {
    id: 2,
    title: "The Journey of a Plastic Bottle",
    excerpt: "From your home to the recycling plant - follow the journey of a plastic bottle and see how it gets a new life.",
    category: "Education",
    readTime: "8 min read",
    date: "Mar 12, 2024",
  },
  {
    id: 3,
    title: "Why Wet Waste Segregation Matters",
    excerpt: "Understanding the importance of separating wet waste and how it contributes to composting and biogas production.",
    category: "Composting",
    readTime: "6 min read",
    date: "Mar 10, 2024",
  },
  {
    id: 4,
    title: "Setting Up a Home Composting System",
    excerpt: "A step-by-step guide to creating your own composting system at home, even with limited space.",
    category: "DIY",
    readTime: "10 min read",
    date: "Mar 8, 2024",
  },
  {
    id: 5,
    title: "E-Waste: The Fastest Growing Waste Stream",
    excerpt: "Electronic waste is growing at an alarming rate. Learn about its impact and how to dispose of it responsibly.",
    category: "E-Waste",
    readTime: "7 min read",
    date: "Mar 5, 2024",
  },
]

const quickTips = [
  "Rinse containers before recycling to prevent contamination",
  "Remove caps from bottles - they are often different plastic types",
  "Flatten cardboard boxes to save space in recycling bins",
  "Banana peels make excellent compost material",
  "Old newspapers can be used as brown matter in composting",
  "Never put batteries in regular trash - find proper disposal centers",
]

export default function LearnPage() {
  const [activeTab, setActiveTab] = useState("courses")
  const [randomTip] = useState(() => quickTips[Math.floor(Math.random() * quickTips.length)])

  const inProgressCourses = courses.filter(c => c.progress && c.progress > 0 && !c.completed)
  const completedCourses = courses.filter(c => c.completed)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
          Learn & Grow
        </h1>
        <p className="text-muted-foreground mt-1">
          Expand your knowledge about waste management and sustainable living
        </p>
      </div>

      {/* Quick Tip Card */}
      <Card className="bg-accent/10 border-accent/20">
        <CardContent className="p-4 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Quick Tip of the Day</p>
            <p className="text-sm text-muted-foreground mt-1">{randomTip}</p>
          </div>
        </CardContent>
      </Card>

      {/* Progress Overview */}
      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 mx-auto text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{inProgressCourses.length}</p>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 mx-auto text-chart-2 mb-2" />
            <p className="text-2xl font-bold text-foreground">{completedCourses.length}</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 mx-auto text-accent mb-2" />
            <p className="text-2xl font-bold text-foreground">450</p>
            <p className="text-sm text-muted-foreground">Points Earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="courses" className="gap-2">
            <PlayCircle className="w-4 h-4" />
            Courses
          </TabsTrigger>
          <TabsTrigger value="articles" className="gap-2">
            <FileText className="w-4 h-4" />
            Articles
          </TabsTrigger>
        </TabsList>

        {/* Courses Tab */}
        <TabsContent value="courses" className="mt-6 space-y-6">
          {/* Continue Learning */}
          {inProgressCourses.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Continue Learning</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {inProgressCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}

          {/* All Courses */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-4">All Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Articles Tab */}
        <TabsContent value="articles" className="mt-6 space-y-6">
          {/* Featured Article */}
          {articles.find(a => a.featured) && (
            <Card className="overflow-hidden">
              <div className="bg-primary/10 h-32 flex items-center justify-center">
                <FileText className="w-16 h-16 text-primary/40" />
              </div>
              <CardContent className="p-6">
                <Badge className="mb-3">{articles[0].category}</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {articles[0].title}
                </h3>
                <p className="text-muted-foreground mb-4">{articles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {articles[0].readTime}
                    </span>
                    <span>{articles[0].date}</span>
                  </div>
                  <Button>
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Article List */}
          <div className="grid sm:grid-cols-2 gap-4">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-5">
                  <Badge variant="secondary" className="mb-3">{article.category}</Badge>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon
  const levelColors = {
    Beginner: "bg-primary/10 text-primary",
    Intermediate: "bg-chart-2/10 text-chart-2",
    Advanced: "bg-accent/10 text-accent-foreground",
  }

  return (
    <Card className={`overflow-hidden hover:shadow-md transition-shadow ${course.completed ? "bg-primary/5 border-primary/20" : ""}`}>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className={levelColors[course.level]}>
                {course.level}
              </Badge>
              {course.completed && (
                <Badge variant="default" className="bg-primary">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
              )}
            </div>
            <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {course.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {course.duration}
              </span>
              <span>{course.lessons} lessons</span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-accent" />
                {course.points} pts
              </span>
            </div>
            {course.progress !== undefined && !course.completed && (
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-1.5" />
              </div>
            )}
            {!course.progress && !course.completed && (
              <Button size="sm" className="w-full">
                Start Course
              </Button>
            )}
            {course.progress && course.progress > 0 && !course.completed && (
              <Button size="sm" className="w-full">
                Continue
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
