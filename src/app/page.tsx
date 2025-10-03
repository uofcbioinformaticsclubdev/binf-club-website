import DNA from "../../public/DNA.png";
import Image from "next/image";


export default function Home() {
  return (
    <div className="font-sans w-full min-h-screen grid place-items-center 
      bg-gradient-to-br from-white via-indigo-200 to-blue-300
    ">
      <div className="w-full h-full flex flex-col items-start p-10 pt-20">
        <p className="text-gray-800 text-6xl font-semibold uppercase">Bioinformatics Club</p>
        <p className="text-gray-800 text-3xl ">something something</p>
      </div>
    </div>
  );
}
