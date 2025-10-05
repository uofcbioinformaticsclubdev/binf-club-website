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
          <p className="text-neutral-800 text-7xl font-extrabold uppercase">Bioinformatics Club</p>
          <p className="text-seagreen font-semibold text-3xl ">Where code meets codons</p>
        </div>
      </div>

      {/**********************************************************/}


      {/* Section: Our Club Activities */}
      <section className="w-full bg-gradient-to-tr bg-cream py-24 px-8">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="relative pb-16">
            <div className="absolute -left-10 top-2 h-10 w-1 bg-periwinkle rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 pl-6">
              Our Club Activities
            </h2>
            <p className="text-lg text-gray-700 mt-4 pl-6">
              We strive to make bioinformatics accessible by encouraging engagement
              with its core topics and promoting critical thinking around current challenges in the field.
              Additionally, we aim to highlight bioinformatics as a viable career path for students from all disciplines,
              offering a unique way to apply their skills in an innovative and interdisciplinary domain.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
              <div className="text-periwinkle font-bold text-xl mb-3">🤝 Networking</div>
              <p className="text-gray-700">
                Connect with peers, researchers, and professionals shaping the future
                of computational biology.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
              <div className="text-skyblue font-bold text-xl mb-3">🧠 Skill-Building</div>
              <p className="text-gray-700">
                Participate in tutorials, workshops, and projects designed to make
                bioinformatics tools accessible and exciting.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300">
              <div className="text-seagreen font-bold text-xl mb-3">🌳 Career Growth</div>
              <p className="text-gray-700">
                Discover unique career paths that blend programming, biology, and
                problem-solving — and earn incentives as you learn.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-seagreen text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition">
              Join Our Community
            </button>
          </div>
        </div>
      </section>

    </>
  );
}