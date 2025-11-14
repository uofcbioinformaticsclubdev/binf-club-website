import Image from "next/image";

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <div className="relative w-full h-screen min-h-screen font-sans overflow-hidden">
        {/* DNA GIF background */}
        <div className="absolute -bottom-35 -rotate-[55deg] -right-180">
          <Image
            src="/DNA.gif"
            alt="DNA animation"
            width={800}
            height={1400}
            priority
            style={{ height: "140vh", width: "auto" }}
          />
        </div>

        {/* Gradient overlay with opacity */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-50 via-[#92cbe3] to-indigo-400 opacity-80 z-0" />

        {/* Content */}
        <div className="relative w-full h-full min-h-full flex flex-col justify-center p-10 pt-20 z-10">
          <p className="text-neutral-800 text-7xl font-extrabold uppercase out">Bioinformatics Club</p>
          <p className="text-seagreen font-semibold text-3xl ">Where code meets codons</p>
        </div>
      </div>

      {/**********************************************************/}


      {/* Section: Our Club Activities */}
      <section className="w-full bg-gradient-to-tr bg-neutral-50 pt-24 pb-12 px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="relative pb-16">
            <div className="absolute -left-10 top-2 h-10 w-1 bg-periwinkle rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 pl-6">
              Our Club Activities
            </h2>
            <p className="text-lg text-gray-700 mt-4 pl-6">
              Bioinformatics Club is a student-led community at the University of Calgary.
              We open the world of bioinformatics to students from all disciplines and skill levels.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
              <div className="text-periwinkle font-bold text-xl mb-3">🤝 Networking</div>
              <p className="text-gray-700">
                Connect with peers, researchers, and professionals shaping the future
                of bioinformatics.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
              <div className="text-skyblue font-bold text-xl mb-3">🧠 Skill-Building</div>
              <p className="text-gray-700">
                Participate in labs and workshops designed to make
                bioinformatics tools accessible and exciting.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
              <div className="text-seagreen font-bold text-xl mb-3">🌱 Career Growth</div>
              <p className="text-gray-700">
                Discover unique career paths that blend programming, biology, and
                problem-solving — from healthcare to agriculture and beyond.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-seagreen text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition">
              Check Out Our Events
            </button>
          </div>
        </div>
      </section>




        {/* <svg
          className="relative block w-full bg-gradient-to-b from-neutral-50 to-white h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="oklch(92.2% 0 0)"
            strokeWidth="25"
            d="M0,160 C240,500 500,50 720,20 S900,450 1500,160"
          />

          <rect x="100" y="150" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="220" y="170" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="340" y="130" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="460" y="175" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="580" y="90" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="700" y="30" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="820" y="60" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="940" y="180" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="1060" y="130" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="1180" y="140" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
          <rect x="1300" y="120" width="8" height="100" rx="4" ry="4" fill="oklch(92.2% 0 0)" />
        </svg> */}



<svg
  className="w-full bg-gradient-to-b from-neutral-50 to-white h-48"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  preserveAspectRatio="none"
>
  <path
    fill="none"
    stroke="oklch(96.7% 0.001 286.375)"
    strokeWidth="6"
    d="M0,180 Q180,80 360,160 T720,160 T1080,175 T1440,160"
  />

  <path
    fill="none"
    stroke="oklch(92.2% 0 0)"
    strokeWidth="6"
    d="M0,150 Q180,260 360,180 T720,180 T1080,175 T1440,180"
  />

  <line x1="60" y1="160" x2="60" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="180" y1="160" x2="180" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="300" y1="160" x2="300" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="420" y1="160" x2="420" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="540" y1="160" x2="540" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="660" y1="160" x2="660" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="780" y1="160" x2="780" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="900" y1="160" x2="900" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="1020" y1="160" x2="1020" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="1140" y1="160" x2="1140" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="1260" y1="160" x2="1260" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
  <line x1="1380" y1="160" x2="1380" y2="180" stroke="oklch(85% 0 0)" strokeWidth="4" />
</svg>


<section className="bg-white w-full h-screen">

</section>


        {/* TRANSITION ELEMENT */}
        <div className="w-full">
          <div className="w-full text-4xl break-words whitespace-normal">
            010101001011010010100101100101010101010010110100101001011001010101010100101101001010010110010101010101001011010010
            010101001011010010100101100101010101010010110100101001011001010101010100101101001010010110010101010101001011010010
            010101001011010010100101100101010101010010110100101001011001010101010100101101001010010110010101010101001011010010
            AGTCAGGCTTAGCGTACGTAGCTAAGTCAGGCTTAGCGTACGTAGCTAAGTCAGGCTTAGCGTACGTAGCTAAGTCAGGCTTAGCGTACGTAGCTAAGTCAGGCTTAGCGTACGT

          </div>
        </div>

      </>
      );
}