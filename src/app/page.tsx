import Image from "next/image";
import Link from "next/link";
import drawing from "./../../public/drawing.png"


export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <div className="relative w-full h-screen min-h-screen font-sans overflow-hidden">

        {/* DNA GIF background */}
        <div className="absolute -bottom-[35vh] md:-bottom-[55vh] -rotate-[55deg] -right-180 md:-right-140">
          <Image
            src="/DNA.gif"
            alt="DNA animation"
            width={800}
            height={1400}
            priority
            className="hidden md:block h-[200vh] w-auto object-contain"
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

            {/* Networking */}
            <div className="group relative bg-white rounded-2xl shadow-purple-50 shadow-2xl p-8 overflow-hidden">

              {/* Blurred circle */}
              <div className="absolute -top-6 -left-6 size-44 bg-periwinkle/20 blur-2xl rounded-full 
                  transition-all duration-300 group-hover:size-72"></div>

              <div className="relative text-periwinkle font-bold text-xl mb-3">🤝 Networking</div>
              <p className="relative text-gray-700">
                Connect with peers, researchers, and professionals shaping the future
                of bioinformatics.
              </p>
            </div>

            {/* Skill Building */}
            <div className="group relative bg-white rounded-2xl shadow-sky-50 shadow-2xl p-8 overflow-hidden">

              {/* Blurred circle */}
              <div className="absolute -top-6 -left-6 size-44 bg-skyblue/20 blur-2xl rounded-full
                  transition-all duration-300 group-hover:size-72"></div>

              <div className="relative text-skyblue font-bold text-xl mb-3">🧠 Skill-Building</div>
              <p className="relative text-gray-700">
                Participate in labs and workshops designed to make
                bioinformatics tools accessible and exciting.
              </p>
            </div>

            {/* Career Growth */}
            <div className="group relative bg-white rounded-2xl shadow-emerald-50 shadow-2xl p-8 overflow-hidden">

              {/* Blurred circle */}
              <div className="absolute -top-6 -left-6 size-44 bg-seagreen/15 blur-2xl rounded-full
                  transition-all duration-300 group-hover:size-72"></div>

              <div className="relative text-seagreen font-bold text-xl mb-3">🌱 Career Growth</div>
              <p className="relative text-gray-700">
                Discover unique career paths that blend programming, biology, and
                problem-solving — from healthcare to agriculture and beyond.
              </p>
            </div>


          </div>

          {/* Check Out Our Events */}
          <div className="mt-16 text-center">
            <Link href="/previous-events" className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-400 to-seagreen">
              Check Out Our Events
            </Link>

          </div>
        </div>
      </section >

      {/* Section divider */}
      {/* <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 md:h-28 bg-neutral-50">
        <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60"
          className="stroke-current text-seagreen/70"
          fill="none" stroke-width="4" stroke-dasharray="2 12" opacity="0.6" />
        <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60"
          className="stroke-current text-sky-400"
          fill="none" stroke-width="4" stroke-dasharray="2 12" opacity="0.6" />
      </svg> */}

      <section className="w-full flex justify-center items-center relative py-72 px-8">
        <div className="absolute inset-0 bg-neutral-50 -z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 700"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="oklch(73.6% 0.116 179.4)"
              d="
                M0,120
                C180,180 360,80 540,140
                C720,200 900,100 1000,140
                C1260,220 1350,140 1440,120 
                L1440,600
                C1260,700 1080,500 900,560
                C720,620 540,520 360,580
                C180,640 90,560 0,600
                Z
              "
            />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            “Our goal is to make bioinformatics accessible. We dream of science that is interdisciplinary and open”
          </p>
        </div>
      </section>



      {/* Section: What is Bioinformatics? */}
      <section className="relative w-full pt-0 py-32 px-8 bg-white">

        {/* Subtle Background Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-seagreen/5 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative">

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            What is Bioinformatics?
          </h2>

          {/* Divider */}
          <div className="flex justify-center pb-5 pt-5 opacity-70">
            <svg width="160" height="40" viewBox="0 0 200 40">
              <path d="M0,20 C40,0 60,40 100,20 C140,0 160,40 200,20"
                stroke="oklch(78.6% 0.075 286.8)" strokeWidth="4" fill="none" />
            </svg>
          </div>



          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            Living things carry their blueprint in molecules like DNA that dictate their characteristics and survival.
            Bioinformatics is the science of decoding that information using computers.
            It’s the bridge between biology and informatics.
          </p>


          <div className="w-full pt-5 flex justify-center items-center">
            <Image
              src={drawing}
              alt="Bioinformatics sketch"
              className="max-w-full h-auto sm:w-1/2 md:w-1/3 lg:w-1/2"
            />
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



      {/* <svg
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
</svg> */}



    </>
  );
}