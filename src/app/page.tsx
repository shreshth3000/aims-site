import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Blob from "@/components/temp"; 

export default function HomePage() {
  const categories = [
    "Collectibles", "Digital Art", "Music and Audio", "Virtual Real Estate",
    "Gaming Assets", "Photography", "Fashion and Wearables",
  ];

  const topCategories = [
    { name: "Digital Art", avatar: "/avatars/avatar1.png" },
    { name: "Music and Audio", avatar: "/avatars/avatar2.png" },
    { name: "Gaming Assets", avatar: "/avatars/avatar3.png" },
    { name: "Collectibles", avatar: "/avatars/avatar4.png" },
    { name: "Virtual Real Estate", avatar: "/avatars/avatar5.png" },
    { name: "Photography", avatar: "/avatars/avatar6.png" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-10 font-sans">
      <header className="flex flex-col items-center mb-12 space-y-4 text-center">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-10 h-10 bg-gradient-to-br from-custom-light-blue to-custom-mid-blue rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white text-lg font-bold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Our Latest{" "}
            <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">
              Works
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button key={category} variant="outline" className="btn-category">
              {category}
            </Button>
          ))}
        </div>
      </header>

      
      <main className="relative isolate grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
<Blob className="top-0 left-0 w-1/2 h-full bg-sky-500 opacity-30" />
      <Blob className="top-0 left-220 w-1/2 h-full bg-sky-500 opacity-30" />


        {/* The rest of your card grid remains the same */}
        <Card className="project-card-bg col-span-1 md:col-span-2 lg:col-span-2 h-[300px] flex items-center justify-center p-6 relative overflow-hidden bg-card project-card-glow">
          <div className="relative z-15 text-center space-y-4">
            <h2 className="text-5xl font-extrabold text-white mb-4">PROJECT</h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="tezos-icon" />
              <div>
                <p className="text-xl text-gray-300">Current Bid</p>
                <p className="text-4xl font-bold text-custom-light-blue">7.45 ETH</p>
                <p className="text-sm text-gray-500">$20,456.12</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="col-span-1 md:col-span-1 lg:col-span-2 h-[300px] relative overflow-hidden bg-card card-glow">
          <Image
            src="/vr-glasses.jpg"
            alt="Person with VR Headset"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-70"
          />
        </Card>

        <Card className="col-span-1 md:col-span-2 lg:col-span-2 h-[300px] relative overflow-hidden bg-card card-glow car-city-gradient">
          <Image
            src="/car.jpg"
            alt="Car in a futuristic city"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-70"
          />
        </Card>

        <Card className="col-span-1 md:col-span-2 lg:col-span-2 h-[300px] flex items-center justify-center p-4 relative overflow-hidden bg-card card-glow">
          <div className="cube-grid-container w-full h-full">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="cube">
                {(i === 2 || i === 6) && (
                  <div className="cube-bars">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <div key={j} className="cube-bar" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </main>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Top categories we have</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCategories.map((category) => (
            <button
              key={category.name}
              className="group relative rounded-xl focus:outline-none transition-all duration-300 w-full"
            >
              <div className="absolute inset-0 rounded-xl z-0 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-800 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <Card
                className="relative z-10 flex items-center p-4 space-x-4 w-full border rounded-xl
                bg-card border-card transition-all duration-300
                group-hover:border-blue-400 group-hover:shadow-xl group-hover:shadow-blue-400/40"
              >
                <Avatar className="w-12 h-12">
                  <AvatarImage src={category.avatar} alt={category.name} />
                  <AvatarFallback>{category.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="text-lg font-semibold text-white group-hover:text-white">
                  {category.name}
                </span>
              </Card>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}