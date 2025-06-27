import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Discover India</h1>
        <p className="text-gray-600">Explore the diverse beauty and rich culture</p>
      </div>

      {/* The Land of Vibrance Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-orange-600 mb-4">The Land of Vibrance</h2>
            <p className="text-gray-700 leading-relaxed">
              Discover the royal heritage of Rajasthan, where majestic palaces meet golden deserts. Experience vibrant
              cultures, traditional crafts, and the timeless beauty of ancient architecture that tells stories of kings
              and queens.
            </p>
            <p className="text-gray-600 text-sm">
              From the pink city of Jaipur to the golden sands of Jaisalmer, every corner holds a piece of history.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Rajasthan palace"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Desert landscape"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Traditional crafts"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Camel safari"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
          </div>
        </div>
      </section>

      {/* The Dawn of Beauty Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="grid grid-cols-2 gap-3 md:order-1">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Kerala backwaters"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Houseboat"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Coconut trees"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Spice gardens"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
          </div>
          <div className="space-y-4 md:order-2">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">The Dawn of Beauty</h2>
            <p className="text-gray-700 leading-relaxed">
              Experience the serene backwaters of Kerala, where emerald waters wind through lush landscapes. Discover
              pristine beaches, aromatic spice plantations, and the gentle rhythm of life on traditional houseboats.
            </p>
            <p className="text-gray-600 text-sm">
              From Alleppey's tranquil canals to Munnar's rolling hills, nature's beauty unfolds at every turn.
            </p>
          </div>
        </div>
      </section>

      {/* The Emerald State Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-600 mb-4">The Emerald State</h2>
            <p className="text-gray-700 leading-relaxed">
              Journey through the misty mountains and verdant valleys of India's hill stations. Breathe in the crisp
              mountain air, walk through tea gardens that stretch to the horizon, and witness breathtaking sunrises over
              snow-capped peaks.
            </p>
            <p className="text-gray-600 text-sm">
              From Darjeeling's famous tea estates to Shimla's colonial charm, the mountains call to every soul seeking
              peace.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Tea plantations"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Mountain valleys"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Hill station"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Mountain sunrise"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-32"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center py-8 bg-white rounded-lg shadow-sm">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Explore?</h3>
        <p className="text-gray-600 mb-6">Start your journey through incredible India today</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Plan Your Trip
        </button>
      </div>
    </div>
  )
}
