import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Scan,
  Leaf,
  Recycle,
  TrendingUp,
  ArrowRight,
  Award,
  Target,
  Flame,
} from "lucide-react"

// Mock user data
const userData = {
  name: "Priya",
  level: 5,
  title: "Eco Warrior",
  points: 1240,
  pointsToNextLevel: 2000,
  streak: 12,
  co2Saved: 24.5,
  itemsRecycled: 156,
  treesEquivalent: 3,
}

const recentScans = [
  { id: 1, item: "Plastic Bottle", category: "Recyclable", points: 10, time: "2 hours ago" },
  { id: 2, item: "Banana Peel", category: "Organic", points: 5, time: "5 hours ago" },
  { id: 3, item: "Newspaper", category: "Recyclable", points: 8, time: "Yesterday" },
]

const weeklyChallenge = {
  title: "Zero Plastic Week",
  description: "Avoid single-use plastics for 7 days",
  progress: 65,
  daysLeft: 3,
  reward: 500,
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col gap-2">
        <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
          Welcome back, {userData.name}!
        </h1>
        <p className="text-muted-foreground">
          {"You're on a"} {userData.streak}-day streak. Keep up the great work!
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <QuickActionCard
          href="/dashboard/scan"
          icon={Scan}
          label="Scan Waste"
          color="primary"
        />
        <QuickActionCard
          href="/dashboard/rewards"
          icon={Award}
          label="View Rewards"
          color="accent"
        />
        <QuickActionCard
          href="/dashboard/marketplace"
          icon={Recycle}
          label="Marketplace"
          color="chart-2"
        />
        <QuickActionCard
          href="/dashboard/learn"
          icon={Target}
          label="Challenges"
          color="chart-4"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="CO2 Saved"
          value={`${userData.co2Saved} kg`}
          description="This month"
          icon={Leaf}
          trend="+12%"
        />
        <StatsCard
          title="Items Recycled"
          value={userData.itemsRecycled.toString()}
          description="Total scans"
          icon={Recycle}
          trend="+8%"
        />
        <StatsCard
          title="Trees Equivalent"
          value={userData.treesEquivalent.toString()}
          description="Impact measure"
          icon={TrendingUp}
          trend="+1"
        />
        <StatsCard
          title="Day Streak"
          value={userData.streak.toString()}
          description="Keep it going!"
          icon={Flame}
          trend="Personal best!"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Level Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Level Progress</span>
              <span className="text-sm font-normal text-muted-foreground">
                Level {userData.level} - {userData.title}
              </span>
            </CardTitle>
            <CardDescription>
              {userData.pointsToNextLevel - userData.points} points to Level {userData.level + 1}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress
                value={(userData.points / userData.pointsToNextLevel) * 100}
                className="h-3"
              />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{userData.points} pts</span>
                <span className="text-muted-foreground">{userData.pointsToNextLevel} pts</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Challenge */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-primary">Weekly Challenge</CardTitle>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                {weeklyChallenge.daysLeft} days left
              </span>
            </div>
            <CardDescription>{weeklyChallenge.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {weeklyChallenge.description}
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span className="font-semibold">{weeklyChallenge.progress}%</span>
              </div>
              <Progress value={weeklyChallenge.progress} className="h-2" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Reward: <span className="font-semibold text-primary">{weeklyChallenge.reward} pts</span>
              </span>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Scans */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Scans</CardTitle>
            <CardDescription>Your latest waste scanning activity</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/scan">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentScans.map((scan) => (
              <div
                key={scan.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Recycle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{scan.item}</p>
                    <p className="text-sm text-muted-foreground">{scan.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">+{scan.points} pts</p>
                  <p className="text-xs text-muted-foreground">{scan.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function QuickActionCard({
  href,
  icon: Icon,
  label,
  color,
}: {
  href: string
  icon: React.ElementType
  label: string
  color: string
}) {
  const colorClasses: Record<string, string> = {
    primary: "bg-primary/10 text-primary hover:bg-primary/20",
    accent: "bg-accent/10 text-accent-foreground hover:bg-accent/20",
    "chart-2": "bg-chart-2/10 text-chart-2 hover:bg-chart-2/20",
    "chart-4": "bg-chart-4/10 text-chart-4 hover:bg-chart-4/20",
  }

  return (
    <Link href={href}>
      <Card className={`group cursor-pointer transition-all hover:shadow-md ${colorClasses[color]} border-transparent`}>
        <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
          <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-medium text-sm">{label}</span>
        </CardContent>
      </Card>
    </Link>
  )
}

function StatsCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
}: {
  title: string
  value: string
  description: string
  icon: React.ElementType
  trend: string
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary">{trend}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
