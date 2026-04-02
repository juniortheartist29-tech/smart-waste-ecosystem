"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Award, TrendingUp, Users, MapPin } from "lucide-react"

const leaderboardData = {
  global: [
    { rank: 1, name: "Amit Verma", location: "Delhi", points: 15420, level: 12, badge: "Eco Legend" },
    { rank: 2, name: "Sneha Patel", location: "Mumbai", points: 14890, level: 11, badge: "Green Guardian" },
    { rank: 3, name: "Rahul Singh", location: "Bangalore", points: 13750, level: 11, badge: "Planet Protector" },
    { rank: 4, name: "Priya Sharma", location: "Mumbai", points: 12340, level: 10, badge: "Eco Champion", isCurrentUser: true },
    { rank: 5, name: "Vikram Rao", location: "Chennai", points: 11920, level: 10, badge: "Sustainability Star" },
    { rank: 6, name: "Anjali Gupta", location: "Pune", points: 10850, level: 9, badge: "Green Warrior" },
    { rank: 7, name: "Karan Mehta", location: "Hyderabad", points: 9780, level: 9, badge: "Eco Pioneer" },
    { rank: 8, name: "Deepa Nair", location: "Kochi", points: 8650, level: 8, badge: "Nature Friend" },
    { rank: 9, name: "Arjun Kumar", location: "Kolkata", points: 7890, level: 8, badge: "Green Scout" },
    { rank: 10, name: "Meera Iyer", location: "Chennai", points: 7450, level: 7, badge: "Eco Starter" },
  ],
  local: [
    { rank: 1, name: "Sneha Patel", location: "Mumbai", points: 14890, level: 11, badge: "Green Guardian" },
    { rank: 2, name: "Priya Sharma", location: "Mumbai", points: 12340, level: 10, badge: "Eco Champion", isCurrentUser: true },
    { rank: 3, name: "Rohan Desai", location: "Mumbai", points: 8920, level: 8, badge: "Planet Friend" },
    { rank: 4, name: "Kavita Joshi", location: "Mumbai", points: 7650, level: 7, badge: "Green Scout" },
    { rank: 5, name: "Nikhil Shah", location: "Mumbai", points: 6890, level: 7, badge: "Eco Starter" },
  ],
  friends: [
    { rank: 1, name: "Ananya Patel", location: "Bangalore", points: 9450, level: 9, badge: "Green Warrior" },
    { rank: 2, name: "Priya Sharma", location: "Mumbai", points: 12340, level: 10, badge: "Eco Champion", isCurrentUser: true },
    { rank: 3, name: "Raj Malhotra", location: "Delhi", points: 5670, level: 6, badge: "Eco Explorer" },
    { rank: 4, name: "Simran Kaur", location: "Chandigarh", points: 4890, level: 5, badge: "Green Beginner" },
  ],
}

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-6 h-6 text-yellow-500" />
    case 2:
      return <Medal className="w-6 h-6 text-gray-400" />
    case 3:
      return <Award className="w-6 h-6 text-amber-600" />
    default:
      return <span className="w-6 h-6 flex items-center justify-center text-muted-foreground font-semibold">{rank}</span>
  }
}

const getRankStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-yellow-500/10 border-yellow-500/30"
    case 2:
      return "bg-gray-500/10 border-gray-500/30"
    case 3:
      return "bg-amber-500/10 border-amber-500/30"
    default:
      return ""
  }
}

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("global")
  const currentUserRank = leaderboardData.global.find(u => u.isCurrentUser)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
          Leaderboard
        </h1>
        <p className="text-muted-foreground mt-1">
          See how you rank among other eco-warriors
        </p>
      </div>

      {/* Your Rank Card */}
      {currentUserRank && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  #{currentUserRank.rank}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Your Global Rank</h3>
                  <p className="text-muted-foreground">
                    {currentUserRank.points.toLocaleString()} points | Level {currentUserRank.level}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm">Up 3 ranks this week</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="global" className="gap-2">
            <Trophy className="w-4 h-4" />
            <span className="hidden sm:inline">Global</span>
          </TabsTrigger>
          <TabsTrigger value="local" className="gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">Local</span>
          </TabsTrigger>
          <TabsTrigger value="friends" className="gap-2">
            <Users className="w-4 h-4" />
            <span className="hidden sm:inline">Friends</span>
          </TabsTrigger>
        </TabsList>

        {Object.entries(leaderboardData).map(([key, data]) => (
          <TabsContent key={key} value={key} className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  {key === "global" && "Global Rankings"}
                  {key === "local" && "Local Rankings - Mumbai"}
                  {key === "friends" && "Friends Rankings"}
                </CardTitle>
                <CardDescription>
                  {key === "global" && "Top eco-warriors across India"}
                  {key === "local" && "Top performers in your city"}
                  {key === "friends" && "How you compare with friends"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.map((user) => (
                    <div
                      key={`${key}-${user.rank}`}
                      className={`flex items-center justify-between p-4 rounded-xl border ${
                        user.isCurrentUser
                          ? "bg-primary/5 border-primary/30"
                          : getRankStyle(user.rank) || "bg-muted/30 border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 flex justify-center">
                          {getRankIcon(user.rank)}
                        </div>
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className={user.isCurrentUser ? "bg-primary text-primary-foreground" : ""}>
                            {user.name.split(" ").map(n => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-foreground">
                              {user.name}
                              {user.isCurrentUser && <span className="text-primary ml-1">(You)</span>}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{user.location}</span>
                            <span className="mx-1">|</span>
                            <span>Level {user.level}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-foreground">
                          {user.points.toLocaleString()}
                        </p>
                        <Badge variant="secondary" className="text-xs">
                          {user.badge}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
