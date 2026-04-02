"use client"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Camera,
  Upload,
  X,
  CheckCircle,
  AlertTriangle,
  Recycle,
  Leaf,
  Trash2,
  Zap,
  Info,
  RotateCcw,
} from "lucide-react"

type WasteCategory = "recyclable" | "organic" | "hazardous" | "e-waste" | "general"

interface ScanResult {
  item: string
  category: WasteCategory
  confidence: number
  instructions: string[]
  tips: string[]
  points: number
  impact: string
}

const categoryConfig: Record<WasteCategory, { icon: React.ElementType; color: string; label: string; bin: string }> = {
  recyclable: { icon: Recycle, color: "bg-blue-500", label: "Recyclable", bin: "Blue Bin" },
  organic: { icon: Leaf, color: "bg-primary", label: "Organic/Wet Waste", bin: "Green Bin" },
  hazardous: { icon: AlertTriangle, color: "bg-destructive", label: "Hazardous", bin: "Red Bin" },
  "e-waste": { icon: Zap, color: "bg-accent", label: "E-Waste", bin: "Special Collection" },
  general: { icon: Trash2, color: "bg-muted-foreground", label: "General Waste", bin: "Black Bin" },
}

// Mock AI scan results
const mockScanResults: ScanResult[] = [
  {
    item: "PET Plastic Bottle",
    category: "recyclable",
    confidence: 94,
    instructions: [
      "Remove the cap and label if possible",
      "Rinse the bottle to remove any residue",
      "Crush to save space",
      "Place in the blue recycling bin",
    ],
    tips: [
      "PET bottles can be recycled into new bottles, clothing, and carpets",
      "One recycled bottle saves enough energy to power a lightbulb for 3 hours",
    ],
    points: 10,
    impact: "Recycling this bottle saves 0.1 kg of CO2",
  },
  {
    item: "Banana Peel",
    category: "organic",
    confidence: 98,
    instructions: [
      "Place directly in organic waste bin",
      "Can be added to home compost",
      "Do not mix with dry waste",
    ],
    tips: [
      "Banana peels are rich in potassium and make excellent compost",
      "They decompose within 2 weeks in proper composting conditions",
    ],
    points: 5,
    impact: "Composting this prevents 0.05 kg of methane emissions",
  },
  {
    item: "Old Mobile Phone",
    category: "e-waste",
    confidence: 96,
    instructions: [
      "Remove SIM card and memory card",
      "Factory reset the device",
      "Take to authorized e-waste collection center",
      "Never throw in regular trash",
    ],
    tips: [
      "Mobile phones contain valuable metals like gold and silver",
      "Proper recycling prevents toxic materials from entering soil",
    ],
    points: 50,
    impact: "Recycling prevents 70 kg of CO2 and toxic leaching",
  },
]

export default function ScanPage() {
  const [mode, setMode] = useState<"idle" | "camera" | "uploading" | "scanning" | "result">("idle")
  const [scanResult, setScanResult] = useState<ScanResult | null>(null)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setMode("camera")
    } catch {
      alert("Unable to access camera. Please check permissions.")
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }
    setMode("idle")
  }, [])

  const captureImage = useCallback(() => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0)
        const imageData = canvas.toDataURL("image/jpeg")
        setCapturedImage(imageData)
        stopCamera()
        simulateScan()
      }
    }
  }, [stopCamera])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setCapturedImage(event.target?.result as string)
        simulateScan()
      }
      reader.readAsDataURL(file)
    }
  }

  const simulateScan = () => {
    setMode("scanning")
    setTimeout(() => {
      const randomResult = mockScanResults[Math.floor(Math.random() * mockScanResults.length)]
      setScanResult(randomResult)
      setMode("result")
    }, 2000)
  }

  const resetScan = () => {
    setMode("idle")
    setScanResult(null)
    setCapturedImage(null)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-foreground">
          Scan Waste
        </h1>
        <p className="text-muted-foreground mt-1">
          Point your camera at any waste item to identify and learn how to dispose it properly
        </p>
      </div>

      {mode === "idle" && (
        <div className="grid sm:grid-cols-2 gap-4">
          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow group"
            onClick={startCamera}
          >
            <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Camera className="w-10 h-10 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">Use Camera</h3>
                <p className="text-sm text-muted-foreground">Scan in real-time</p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:shadow-lg transition-shadow group"
            onClick={() => fileInputRef.current?.click()}
          >
            <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Upload className="w-10 h-10 text-accent-foreground" />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground">Upload Image</h3>
                <p className="text-sm text-muted-foreground">From your gallery</p>
              </div>
            </CardContent>
          </Card>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      )}

      {mode === "camera" && (
        <Card className="overflow-hidden">
          <CardContent className="p-0 relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-48 h-48 border-4 border-primary rounded-2xl" />
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4">
              <Button
                size="icon"
                variant="secondary"
                className="w-12 h-12 rounded-full"
                onClick={stopCamera}
              >
                <X className="w-6 h-6" />
              </Button>
              <Button
                size="icon"
                className="w-16 h-16 rounded-full"
                onClick={captureImage}
              >
                <Camera className="w-8 h-8" />
              </Button>
              <div className="w-12 h-12" />
            </div>
          </CardContent>
        </Card>
      )}

      {mode === "scanning" && (
        <Card>
          <CardContent className="p-8 flex flex-col items-center justify-center gap-6">
            {capturedImage && (
              <div className="w-48 h-48 rounded-2xl overflow-hidden">
                <img
                  src={capturedImage}
                  alt="Captured waste"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin" />
              </div>
              <p className="text-lg font-semibold text-foreground">Analyzing...</p>
              <p className="text-sm text-muted-foreground">AI is identifying your waste item</p>
            </div>
          </CardContent>
        </Card>
      )}

      {mode === "result" && scanResult && (
        <div className="space-y-6">
          {/* Result Header */}
          <Card className="overflow-hidden">
            <div className={`${categoryConfig[scanResult.category].color} p-6 text-white`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  {capturedImage && (
                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/30">
                      <img
                        src={capturedImage}
                        alt="Scanned item"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold">{scanResult.item}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                        {categoryConfig[scanResult.category].label}
                      </Badge>
                      <span className="text-sm text-white/80">
                        {scanResult.confidence}% confident
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">+{scanResult.points}</div>
                  <div className="text-sm text-white/80">points earned</div>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                {(() => {
                  const Icon = categoryConfig[scanResult.category].icon
                  return <Icon className="w-8 h-8 text-foreground" />
                })()}
                <div>
                  <p className="font-semibold text-foreground">
                    Place in {categoryConfig[scanResult.category].bin}
                  </p>
                  <p className="text-sm text-muted-foreground">{scanResult.impact}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Disposal Instructions
              </CardTitle>
              <CardDescription>Follow these steps for proper disposal</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3">
                {scanResult.instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{instruction}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-5 h-5 text-chart-2" />
                Did You Know?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {scanResult.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <Leaf className="w-4 h-4 text-chart-2 flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex gap-4">
            <Button className="flex-1" onClick={resetScan}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Scan Another Item
            </Button>
            <Button variant="outline" className="flex-1">
              Share Result
            </Button>
          </div>
        </div>
      )}

      {/* Recent Scans History */}
      {mode === "idle" && (
        <Card>
          <CardHeader>
            <CardTitle>Scan History</CardTitle>
            <CardDescription>Your recent waste scans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockScanResults.map((result, index) => {
                const config = categoryConfig[result.category]
                const Icon = config.icon
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${config.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{result.item}</p>
                        <p className="text-sm text-muted-foreground">{config.label}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">+{result.points} pts</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
