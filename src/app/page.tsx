import ChristmasTree from "../components/ui/ChristmasTree";
import Logo from "./media/Logo";

export default function Home() {
  return (
    <div className="min-h-screen sm:p-8 overflow-hidden">
      {/* Main container with max width and padding */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Text content - centered on mobile, left on desktop */}
          <div className="text-left lg:text-left order-1 lg:order-1">
            <Logo />
            <h1 className=" text-4xl sm:text-4xl font-bold md:text-4xl xl:text-6xl text-[#103a61] 2xl:text-5xl font-bricolage mb-6">
              Julekort fra Sjømannskirkens Besøkstjeneste
            </h1>
            <p className="text-md md:text-md xl:text-2xl font-medium text-blueColor 2xl:text-2x">
              Vi ønsker deg en riktig GOD JUL og GODT NYTTÅR!
            </p>
          </div>
          {/* Tree container - centered on mobile, right on desktop */}
          <div className="flex justify-center lg:justify-end lg:pt-12 order-2 lg:order-2">
            <ChristmasTree />
          </div>
        </div>
      </div>
    </div>
  );
}
