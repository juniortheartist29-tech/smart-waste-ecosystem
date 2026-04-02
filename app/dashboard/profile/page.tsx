"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  User,
  MapPin,
  Calendar,
  Award,
  Leaf,
  Recycle,
  TrendingUp,
  Share2,
  Edit,
  TreeDeciduous,
  Droplets,
  Zap,
  Target,
  Trophy,
  Flame,
} from "lucide-react"

// Mock user profile data
const userProfile = {
  name: "Priya Sharma",
  email: "priya.sharma@email.com",
  location: "Mumbai, Maharashtra",
  joinDate: "January 2024",
  level: 5,
  title: "Eco Warrior",
  points: 1240,
  totalPoints: 3450,
  nextLevelPoints: 2000,
  streak: 12,
  maxStreak: 21,
  rank: 4,
  totalRanked: 50000,
}

const impactStats = {
  co2Saved: 24.5,
  co2Goal: 50,
  itemsRecycled: 156,
  itemsGoal: 200,
  treesEquivalent: 3,
  waterSaved: 1250, // liters
  energySaved: 45, // kWh
  plasticAvoided: 8.5, // kg
}

const achievements = [
  { name: "First Scan", icon: Zap, earned: true },
  { name: "Week Warrior", icon: Flame, earned: true },
  { name: "Recycling Pro", icon: Trophy, earned: true },
  { name: "Eco Champion", icon: Leaf, earned: true },
  { name: "Community Leader", icon: Target, earned: false },
  { name: "Zero Waste Hero", icon: Award, earned: false },
]

const activityHistory = [
  { date: "Today", action: "Scanned PET Bottle", points: 10, type: "scan" },
  { date: "Today", action: "Completed Weekly Challenge", points: 100, type: "challenge" },
  { date: "Yesterday", action: "Scanned Newspaper", points: 8, type: "scan" },
  { date: "Yesterday", action: "Referred a Friend", points: 50, type: "referral" },
  { date: "2 days ago", action: "Scanned Banana Peel", points: 5, type: "scan" },
  { date: "3 days ago", action: "Listed items on Marketplace", points: 20, type: "marketplace" },
]

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            My Profile
          </h1>
          <p className="text-muted-foreground mt-1">
            Your account details and environmental impact
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Edit className="w-4 h-4" />
          Edit Profile
        </Button>
      </div>

      {/* Profile Header Card */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary/80 h-24 md:h-32" />
        <CardContent className="relative pb-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4 -mt-12 md:-mt-16">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-background shadow-lg">
              <AvatarFallback className="bg-primary text-primary-foreground text-3xl md:text-4xl">
                {userProfile.name.split(" ").map(n => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{userProfile.name}</h2>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {userProfile.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {userProfile.joinDate}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="text-sm px-3 py-1">
                    Level {userProfile.level} - {userProfile.title}
                  </Badge>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 rounded-xl bg-primary/5">
              <p className="text-2xl font-bold text-primary">{userProfile.points.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Current Points</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-chart-2/5">
              <p className="text-2xl font-bold text-chart-2">{userProfile.streak}</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-accent/5">
              <p className="text-2xl font-bold text-accent-foreground">#{userProfile.rank}</p>
              <p className="text-sm text-muted-foreground">Global Rank</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-chart-4/5">
              <p className="text-2xl font-bold text-chart-4">{achievements.filter(a => a.earned).length}</p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="impact">
        <TabsList>
          <TabsTrigger value="impact">Impact Stats</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        {/* Impact Stats Tab */}
        <TabsContent value="impact" className="mt-6 space-y-6">
          {/* Main Impact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  CO2 Emissions Saved
                </CardTitle>
                <CardDescription>Your carbon footprint reduction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {impactStats.co2Saved} <span className="text-lg text-muted-foreground">kg</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Monthly Goal: {impactStats.co2Goal} kg</span>
                    <span className="font-medium">{Math.round((impactStats.co2Saved / impactStats.co2Goal) * 100)}%</span>
                  </div>
                  <Progress value={(impactStats.co2Saved / impactStats.co2Goal) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-chart-2" />
                  Items Recycled
                </CardTitle>
                <CardDescription>Total waste items properly disposed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {impactStats.itemsRecycled} <span className="text-lg text-muted-foreground">items</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Goal: {impactStats.itemsGoal} items</span>
                    <span className="font-medium">{Math.round((impactStats.itemsRecycled / impactStats.itemsGoal) * 100)}%</span>
                  </div>
                  <Progress value={(impactStats.itemsRecycled / impactStats.itemsGoal) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Impact Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Your Environmental Impact</CardTitle>
              <CardDescription>The real-world difference you are making</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ImpactStatCard
                  icon={TreeDeciduous}
                  value={impactStats.treesEquivalent.toString()}
                  label="Trees Equivalent"
                  description="CO2 absorbed"
                  color="text-primary"
                />
                <ImpactStatCard
                  icon={Droplets}
                  value={`${impactStats.waterSaved}`}
                  label="Liters Saved"
                  description="Water conservation"
                  color="text-blue-500"
                />
                <ImpactStatCard
                  icon={Zap}
                  value={`${impactStats.energySaved}`}
                  label="kWh Saved"
                  description="Energy conservation"
                  color="text-amber-500"
                />
                <ImpactStatCard
                  icon={Recycle}
                  value={`${impactStats.plasticAvoided}`}
                  label="kg Plastic"
                  description="Single-use avoided"
                  color="text-chart-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Share Impact */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-foreground">Share Your Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Inspire others by sharing your environmental achievements
                </p>
              </div>
              <Button className="gap-2">
                <Share2 className="w-4 h-4" />
                Generate Impact Card
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Badges</CardTitle>
              <CardDescription>
                {achievements.filter(a => a.earned).length} of {achievements.length} badges earned
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center p-4 rounded-xl ${
                        achievement.earned
                          ? "bg-primary/10"
                          : "bg-muted/50 opacity-50"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                        achievement.earned
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <p className="text-xs font-medium text-center mt-2 text-foreground">
                        {achievement.name}
                      </p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest actions and points earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityHistory.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-primary">
                      +{activity.points} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ImpactStatCard({
  icon: Icon,
  value,
  label,
  description,
  color,
}: {
  icon: React.ElementType
  value: string
  label: string
  description: string
  color: string
}) {
  return (
    <div className="text-center">
      <div className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-2 ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm font-medium text-foreground">{label}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  )
}
