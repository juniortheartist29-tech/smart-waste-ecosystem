"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Gift,
  Star,
  Trophy,
  Target,
  Zap,
  Leaf,
  Flame,
  Award,
  ShoppingBag,
  Coffee,
  Ticket,
  Heart,
  Lock,
  CheckCircle,
} from "lucide-react"

// Mock user rewards data
const userRewards = {
  points: 1240,
  totalEarned: 3450,
  level: 5,
  title: "Eco Warrior",
  streak: 12,
  nextLevelPoints: 2000,
}

const achievements = [
  {
    id: 1,
    name: "First Scan",
    description: "Complete your first waste scan",
    icon: Zap,
    earned: true,
    points: 50,
    date: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    icon: Flame,
    earned: true,
    points: 100,
    date: "Jan 22, 2024",
  },
  {
    id: 3,
    name: "Recycling Pro",
    description: "Recycle 100 items correctly",
    icon: Trophy,
    earned: true,
    points: 200,
    date: "Feb 5, 2024",
  },
  {
    id: 4,
    name: "Eco Champion",
    description: "Save 10 kg of CO2",
    icon: Leaf,
    earned: true,
    points: 150,
    date: "Feb 20, 2024",
  },
  {
    id: 5,
    name: "Community Leader",
    description: "Refer 5 friends to BIOLOOP",
    icon: Star,
    earned: false,
    points: 500,
    progress: 60,
  },
  {
    id: 6,
    name: "Zero Waste Hero",
    description: "Complete 30 days without general waste",
    icon: Award,
    earned: false,
    points: 1000,
    progress: 40,
  },
]

const redeemableRewards = [
  {
    id: 1,
    name: "Coffee Voucher",
    description: "Free coffee at partner cafes",
    icon: Coffee,
    points: 200,
    category: "Food & Drink",
  },
  {
    id: 2,
    name: "Movie Ticket",
    description: "Single ticket at PVR Cinemas",
    icon: Ticket,
    points: 500,
    category: "Entertainment",
  },
  {
    id: 3,
    name: "Eco Tote Bag",
    description: "Reusable shopping bag",
    icon: ShoppingBag,
    points: 300,
    category: "Products",
  },
  {
    id: 4,
    name: "Plant a Tree",
    description: "Donate to plant a tree in your name",
    icon: Leaf,
    points: 100,
    category: "Donate",
  },
  {
    id: 5,
    name: "Charity Donation",
    description: "Donate to environmental causes",
    icon: Heart,
    points: 150,
    category: "Donate",
  },
  {
    id: 6,
    name: "Premium Features",
    description: "1 month of premium access",
    icon: Star,
    points: 800,
    category: "App",
  },
]

const challenges = [
  {
    id: 1,
    name: "Zero Plastic Week",
    description: "Avoid single-use plastics for 7 days",
    reward: 500,
    progress: 65,
    daysLeft: 3,
    participants: 1234,
  },
  {
    id: 2,
    name: "Compost Champion",
    description: "Compost 20 items this month",
    reward: 300,
    progress: 45,
    daysLeft: 12,
    participants: 856,
  },
  {
    id: 3,
    name: "E-Waste Drive",
    description: "Properly dispose of 3 electronic items",
    reward: 400,
    progress: 33,
    daysLeft: 20,
    participants: 567,
  },
]

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
          Rewards & Achievements
        </h1>
        <p className="text-muted-foreground mt-1">
          Earn points, unlock badges, and redeem exciting rewards
        </p>
      </div>

      {/* Points Overview Card */}
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-primary-foreground/80 text-sm">Available Points</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl md:text-5xl font-bold">{userRewards.points.toLocaleString()}</span>
                <span className="text-primary-foreground/80">pts</span>
              </div>
              <p className="text-sm text-primary-foreground/70 mt-2">
                Total earned: {userRewards.totalEarned.toLocaleString()} pts
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">{userRewards.level}</p>
                <p className="text-xs text-primary-foreground/80">Level</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <Flame className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">{userRewards.streak}</p>
                <p className="text-xs text-primary-foreground/80">Day Streak</p>
              </div>
              <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">{achievements.filter(a => a.earned).length}</p>
                <p className="text-xs text-primary-foreground/80">Badges</p>
              </div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Level {userRewards.level} - {userRewards.title}</span>
              <span>Level {userRewards.level + 1}</span>
            </div>
            <Progress
              value={(userRewards.points / userRewards.nextLevelPoints) * 100}
              className="h-2 bg-primary-foreground/20"
            />
            <p className="text-xs text-primary-foreground/70 mt-2">
              {userRewards.nextLevelPoints - userRewards.points} pts to next level
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Achievements</TabsTrigger>
          <TabsTrigger value="redeem">Redeem</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        {/* Achievements Tab */}
        <TabsContent value="overview" className="mt-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={achievement.earned ? "border-primary/30 bg-primary/5" : "opacity-80"}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                      achievement.earned 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {achievement.earned ? (
                        <achievement.icon className="w-7 h-7" />
                      ) : (
                        <Lock className="w-7 h-7" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{achievement.name}</h3>
                        {achievement.earned && (
                          <CheckCircle className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {achievement.description}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <Badge variant={achievement.earned ? "default" : "secondary"}>
                          {achievement.points} pts
                        </Badge>
                        {achievement.earned ? (
                          <span className="text-xs text-muted-foreground">{achievement.date}</span>
                        ) : achievement.progress ? (
                          <span className="text-xs text-muted-foreground">{achievement.progress}% complete</span>
                        ) : null}
                      </div>
                      {!achievement.earned && achievement.progress && (
                        <Progress value={achievement.progress} className="h-1.5 mt-2" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Redeem Tab */}
        <TabsContent value="redeem" className="mt-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {redeemableRewards.map((reward) => {
              const canAfford = userRewards.points >= reward.points
              return (
                <Card key={reward.id} className={!canAfford ? "opacity-60" : ""}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                        <reward.icon className="w-7 h-7 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{reward.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {reward.description}
                        </p>
                        <Badge variant="outline" className="mt-2">
                          {reward.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Gift className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{reward.points} pts</span>
                      </div>
                      <Button size="sm" disabled={!canAfford}>
                        {canAfford ? "Redeem" : "Not enough"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        {/* Challenges Tab */}
        <TabsContent value="challenges" className="mt-6">
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <Card key={challenge.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-chart-2/10 flex items-center justify-center">
                        <Target className="w-7 h-7 text-chart-2" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{challenge.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {challenge.description}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <Badge variant="outline" className="text-chart-2 border-chart-2/30">
                            {challenge.daysLeft} days left
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {challenge.participants.toLocaleString()} participants
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1">
                        <Gift className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary">{challenge.reward} pts</span>
                      </div>
                      <div className="w-32">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>Progress</span>
                          <span>{challenge.progress}%</span>
                        </div>
                        <Progress value={challenge.progress} className="h-2" />
                      </div>
                    </div>
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
