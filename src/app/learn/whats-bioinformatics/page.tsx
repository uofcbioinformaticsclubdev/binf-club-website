import { BadgeCheck, Stethoscope, Pill, Factory, Dna, Badge, BadgeCheckIcon } from "lucide-react";

export default function BioinformaticsInfoPage() {
  return (
    <div className="relative min-h-screen">
      <div className='flex flex-col justify-center items-center'>
        <div className='bg-gradient-to-tr bg-neutral-50 relative w-full md:h-130'>
          <img src="/img/bioinformatics-header.avif" alt="Binformatics header image"
            className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-[#92cbe3] to-indigo-400 opacity-40"></div>
          <div className="mt-10 absolute left-10 bottom-10 text-[#EEF5FD]">
            <h1 className="text-5xl font-bold pt-5">What is Bioinformatics?</h1>
            <h2 className="text-2xl font-semi-bold pt-2 w-3/4">
              Get to know the field our club loves!
            </h2>
          </div>
        </div>
        <div className="mt-10 max-w-4xl mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-[#2B2C2C] font-bold">Origins</h2>
            {/* Divider */}
            <div className="flex justify-center opacity-70">
              <svg width="150" height="40" viewBox="0 0 200 40">
                <path d="M0,20 C40,0 60,40 100,20 C140,0 160,40 200,20"
                  stroke="oklch(78.6% 0.075 286.8)" strokeWidth="4" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-lg text-[#2B2C2C] text-center font-semi-bold">
            Bioinformatics started taking shape in the 80s and grew massively through the
            2000s and 2010s with the rise of <b>next generation sequencing (NGS)</b>.
          </p>
          <div className="mt-10 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-[#2B2C2C]">What it looks like today</h2>
            {/* Divider */}
            <div className="flex justify-center opacity-70">
              <svg width="150" height="40" viewBox="0 0 200 40">
                <path d="M0,20 C40,0 60,40 100,20 C140,0 160,40 200,20"
                  stroke="oklch(78.6% 0.075 286.8)" strokeWidth="4" fill="none" />
              </svg>
            </div>
          </div>
          <p className="text-lg text-[#2B2C2C] text-center font-semi-bold">Today, bioinformatics is a core part of <b>precision medicine</b>, <b>AI</b>, and <b>modern biological research</b>.</p>
          <div className="my-10 w-3/4 h-auto">
            <img src="/img/what-is-bioinformatics.jpg" alt="Bioinformatics flow diagram" className="w-full h-full" />
          </div>
        </div>
        <section className="w-full flex justify-center items-center relative py-40 px-8">
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
              It's the <b>bridge</b> between Biology and Informatics.
            </p>
          </div>
        </section>
        <div className="mt-10 max-w-4xl mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl text-[#2B2C2C] font-bold">Key Sectors</h2>
            {/* Divider */}
            <div className="flex justify-center opacity-70">
              <svg width="150" height="40" viewBox="0 0 200 40">
                <path d="M0,20 C40,0 60,40 100,20 C140,0 160,40 200,20"
                  stroke="oklch(78.6% 0.075 286.8)" strokeWidth="4" fill="none" />
              </svg>
            </div>
          </div>
          <div className="my-10 flex flex-row gap-12">
            <div className="flex flex-col gap-3 justify-center items-center">
              <Stethoscope className="text-[#84CAE7] " size={72} />
              <h3 className="mt-3 text-[#2B2C2C] text-3xl font-bold">Healthcare</h3>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <Pill className="text-seagreen" size={72} />
              <h3 className="mt-3 text-[#2B2C2C] text-3xl font-bold">Pharmaceutical</h3>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <Factory className="text-[#B0ABD8]" size={72} />
              <h3 className="mt-3 text-[#2B2C2C] text-3xl font-bold">Petrochemical</h3>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center">
              <Dna className="text-[#84CAE7]" size={72} />
              <h3 className="mt-3 text-[#2B2C2C] text-3xl font-bold">Bioengineering</h3>
            </div>
          </div>
          <div className="my-10 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-[#2B2C2C]">Methods associated with Bioinformatics</h2>
            {/* Divider */}
            <div className="flex justify-center opacity-70">
              <svg width="150" height="40" viewBox="0 0 200 40">
                <path d="M0,20 C40,0 60,40 100,20 C140,0 160,40 200,20"
                  stroke="oklch(78.6% 0.075 286.8)" strokeWidth="4" fill="none" />
              </svg>
            </div>
            <div className="mt-5 flex flex-col gap-3 justify-start items-start">
              <div className="flex flex-row gap-3 justify-center items-center">
                <BadgeCheckIcon className="text-seagreen" size={40} />
                <h3 className="text-[#2B2C2C] text-2xl font-bold">Statistical methods</h3>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center">
                <BadgeCheckIcon className="text-seagreen" size={40} />
                <h3 className="text-[#2B2C2C] text-2xl font-bold">DNA Sequencing</h3>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center">
                <BadgeCheckIcon className="text-seagreen" size={40} />
                <h3 className="text-[#2B2C2C] text-2xl font-bold">Machine Learning</h3>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center">
                <BadgeCheckIcon className="text-seagreen" size={40} />
                <h3 className="text-[#2B2C2C] text-2xl font-bold">Artificial Intelligence</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
