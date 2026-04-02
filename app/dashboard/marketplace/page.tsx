"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Filter,
  MapPin,
  Star,
  Package,
  Recycle,
  Leaf,
  Zap,
  Plus,
  ShoppingBag,
  TrendingUp,
  CheckCircle,
  Phone,
} from "lucide-react"

type MaterialCategory = "plastic" | "paper" | "metal" | "glass" | "organic" | "e-waste"

interface Listing {
  id: number
  title: string
  category: MaterialCategory
  quantity: string
  price: string
  location: string
  seller: string
  rating: number
  verified: boolean
  description: string
  postedDate: string
}

const categoryConfig: Record<MaterialCategory, { icon: React.ElementType; color: string; label: string }> = {
  plastic: { icon: Recycle, color: "bg-blue-500", label: "Plastic" },
  paper: { icon: Package, color: "bg-amber-500", label: "Paper" },
  metal: { icon: Zap, color: "bg-gray-500", label: "Metal" },
  glass: { icon: Leaf, color: "bg-emerald-500", label: "Glass" },
  organic: { icon: Leaf, color: "bg-primary", label: "Organic" },
  "e-waste": { icon: Zap, color: "bg-purple-500", label: "E-Waste" },
}

const buyListings: Listing[] = [
  {
    id: 1,
    title: "PET Bottles - Clean & Sorted",
    category: "plastic",
    quantity: "50+ kg available",
    price: "Rs. 18/kg",
    location: "Andheri, Mumbai",
    seller: "Green Recyclers Ltd",
    rating: 4.8,
    verified: true,
    description: "Clean PET bottles sorted by color. Ideal for recycling units.",
    postedDate: "2 hours ago",
  },
  {
    id: 2,
    title: "Newspaper & Cardboard Bundle",
    category: "paper",
    quantity: "30 kg available",
    price: "Rs. 14/kg",
    location: "Powai, Mumbai",
    seller: "Sharma Household",
    rating: 4.5,
    verified: true,
    description: "Old newspapers and cardboard boxes, clean and dry.",
    postedDate: "5 hours ago",
  },
  {
    id: 3,
    title: "Aluminum Cans Collection",
    category: "metal",
    quantity: "15 kg available",
    price: "Rs. 85/kg",
    location: "Bandra, Mumbai",
    seller: "Eco Warriors Society",
    rating: 4.9,
    verified: true,
    description: "Crushed aluminum cans from beverages. Ready for pickup.",
    postedDate: "1 day ago",
  },
  {
    id: 4,
    title: "Glass Bottles - Mixed Colors",
    category: "glass",
    quantity: "40 kg available",
    price: "Rs. 8/kg",
    location: "Thane, Mumbai",
    seller: "City Waste Solutions",
    rating: 4.6,
    verified: true,
    description: "Assorted glass bottles, labels removed. Bulk purchase preferred.",
    postedDate: "1 day ago",
  },
  {
    id: 5,
    title: "Kitchen Compost Ready",
    category: "organic",
    quantity: "25 kg available",
    price: "Rs. 5/kg",
    location: "Dadar, Mumbai",
    seller: "Urban Composters",
    rating: 4.7,
    verified: false,
    description: "Well-composted kitchen waste, perfect for gardens.",
    postedDate: "3 days ago",
  },
  {
    id: 6,
    title: "Old Laptops & Components",
    category: "e-waste",
    quantity: "5 units",
    price: "Rs. 500/unit",
    location: "Lower Parel, Mumbai",
    seller: "Tech Recycle Hub",
    rating: 4.9,
    verified: true,
    description: "Non-working laptops with intact components for parts recovery.",
    postedDate: "4 days ago",
  },
]

const marketStats = {
  totalListings: 1234,
  avgPrice: "Rs. 22/kg",
  totalTraded: "45,000 kg",
  activeUsers: 2500,
}

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState("buy")
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [showCreateListing, setShowCreateListing] = useState(false)

  const filteredListings = buyListings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "all" || listing.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
            Eco Marketplace
          </h1>
          <p className="text-muted-foreground mt-1">
            Buy and sell recyclable materials with verified partners
          </p>
        </div>
        <Dialog open={showCreateListing} onOpenChange={setShowCreateListing}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              List Your Waste
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Listing</DialogTitle>
              <DialogDescription>
                List your recyclable materials for sale
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="e.g., Clean PET Bottles" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(categoryConfig).map(([key, config]) => (
                      <SelectItem key={key} value={key}>
                        {config.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" placeholder="e.g., 20 kg" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" placeholder="e.g., Rs. 15/kg" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Pickup Location</Label>
                <Input id="location" placeholder="e.g., Andheri, Mumbai" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe your materials..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowCreateListing(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowCreateListing(false)}>
                Create Listing
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Market Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <ShoppingBag className="w-6 h-6 mx-auto text-primary mb-2" />
            <p className="text-2xl font-bold text-foreground">{marketStats.totalListings}</p>
            <p className="text-xs text-muted-foreground">Active Listings</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-6 h-6 mx-auto text-chart-2 mb-2" />
            <p className="text-2xl font-bold text-foreground">{marketStats.avgPrice}</p>
            <p className="text-xs text-muted-foreground">Avg. Price</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Recycle className="w-6 h-6 mx-auto text-accent-foreground mb-2" />
            <p className="text-2xl font-bold text-foreground">{marketStats.totalTraded}</p>
            <p className="text-xs text-muted-foreground">Materials Traded</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-6 h-6 mx-auto text-chart-4 mb-2" />
            <p className="text-2xl font-bold text-foreground">{marketStats.activeUsers}</p>
            <p className="text-xs text-muted-foreground">Verified Users</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="buy">Browse Listings</TabsTrigger>
          <TabsTrigger value="my-listings">My Listings</TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="mt-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {Object.entries(categoryConfig).map(([key, config]) => (
                  <SelectItem key={key} value={key}>
                    {config.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Listings Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredListings.map((listing) => {
              const config = categoryConfig[listing.category]
              const Icon = config.icon
              return (
                <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`${config.color} h-2`} />
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-lg ${config.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <Badge variant="secondary">{config.label}</Badge>
                      </div>
                      {listing.verified && (
                        <Badge variant="outline" className="text-primary border-primary/30 gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </Badge>
                      )}
                    </div>

                    <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                      {listing.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {listing.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Package className="w-4 h-4" />
                        <span>{listing.quantity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{listing.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        <p className="text-lg font-bold text-primary">{listing.price}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Star className="w-3 h-3 fill-accent text-accent" />
                          <span>{listing.rating}</span>
                          <span>| {listing.seller}</span>
                        </div>
                      </div>
                      <Button size="sm">
                        <Phone className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="my-listings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Listings</CardTitle>
              <CardDescription>Manage your active and past listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <ShoppingBag className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No listings yet</h3>
                <p className="text-muted-foreground mb-4">
                  Start selling your recyclable materials to earn extra income
                </p>
                <Button onClick={() => setShowCreateListing(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Listing
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
