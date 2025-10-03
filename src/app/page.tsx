import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen font-sans overflow-hidden">
      {/* DNA GIF background */}
      <div className="absolute -bottom-35 -rotate-[55deg] -right-180">
        <img
          src="/DNA.gif"
          style={{ height: "140vh", width: "auto" }}
          alt="DNA animation"
        />
      </div>
      {/* Gradient overlay with opacity */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-50 via-blue-200 to-indigo-400 opacity-50 z-0" />

      {/* Content */}
      <div className="relative w-full h-full flex flex-col items-start p-10 pt-20 z-10">
        <p className="text-gray-800 text-6xl font-semibold uppercase">Bioinformatics Club</p>
        <p className="text-gray-800 text-3xl ">something something</p>
      </div>
    </div>
  );
}