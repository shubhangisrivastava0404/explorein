import Image from "next/image"

export default function Component() {
  return (
    <div className="relative min-h-screen w-full max-w-sm mx-auto bg-gray-100 overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=400"
          alt="Indian architecture background"
          width={400}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/70"></div>
      </div>

      {/* Left Sidebar Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <p className="text-gray-600 text-sm whitespace-nowrap">Tap to explore a new place</p>
      </div>

      {/* Right Navigation */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-center">
        <div className="flex flex-col gap-8 text-white text-sm font-medium">
          <button className="hover:text-blue-200 transition-colors">HOME</button>
          <button className="hover:text-blue-200 transition-colors">ABOUT</button>
          <button className="hover:text-blue-200 transition-colors">CONTACT</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
            Explore
            <br />
            In
          </h1>
          <p className="text-white/90 text-lg max-w-xs mx-auto leading-relaxed">
            Uncover the beauty, culture, and magic of India
          </p>
        </div>
      </div>

      {/* Bottom Navigation Hint */}
      <div className="absolute bottom-8 right-4">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
          <p className="text-white text-xs">Swipe or tap to continue</p>
        </div>
      </div>
    </div>
  )
}
