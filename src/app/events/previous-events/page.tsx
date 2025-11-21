"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import sample from "../../../../public/sample.jpg";
import sample2 from "../../../../public/sample2.jpg";
import sample4 from "../../../../public/sample4.jpg";



export default function PreviousEventsPage() {
  return (
    <div className="w-full pb-32">

      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={sample}
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-seagreen/40 to-black/20 z-10" />
          <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-br from-skyblue/50 to-indigo-400/70" />
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <h1 className="text-white text-4xl md:text-4xl font-semibold tracking-widest uppercase">
              Events
            </h1>
          </div>
        </div>
      </section>


      {/* ----------------- EVENTS SECTION ----------------- */}
      <SectionWrapper title="Latest Events">
        <div className="flex flex-col gap-8">
          {events.map((item, index) => (
            <EventCard key={index} event={item} />
          ))}
        </div>
      </SectionWrapper>




    </div>
  );
}


/* ----------------- SECTION WRAPPER COMPONENT ----------------- */
function SectionWrapper({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className=" w-full py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function EventDescription({ event }: { event: typeof events[0] }) {
  return (
    <div className="flex-1 w-full mt-4 md:mt-0">
      {/* Sponsor Ribbon */}
      <div className="flex items-center gap-4 mb-2">
        {event.sponsors.map((sponsor, i) => (
          <Image
            key={i}
            src={sponsor.logo}
            alt={sponsor.name}
            width={48}
            height={48}
            className="rounded bg-gray-100 p-1 object-contain"
          />
        ))}
      </div>
      <h2 className="text-2xl font-semibold">{event.title}</h2>
      <p className="text-neutral-600 mb-1">{event.description}</p>
      <span className="text-sm text-gray-500">{event.date}</span>
    </div>
  );
}

function EventCard({ event }: { event: typeof events[0] }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl p-6 items-center">
      {/* Event images carousel */}
      <div className="w-full md:w-1/2 h-64 min-h-[16rem] relative rounded-md overflow-hidden min-w-[250px]" style={{ minHeight: '16rem' }}>
        <Carousel className="h-full">
          <CarouselContent className="h-full">
            {event.images.map((img, idx) => (
              <CarouselItem key={idx} className="h-64">
                <div className="relative w-full h-64">
                  <Image
                    src={img}
                    alt={event.title + ' image ' + (idx + 1)}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 z-20" />
          <CarouselNext className="right-2 z-20" />
        </Carousel>
      </div>
      {/* Event Description */}
      <EventDescription event={event} />
    </div>
  );
}



const events = [
  {
    title: "Genome Sequencing Workshop",
    description: "A beginner-friendly workshop introducing the fundamentals of genome sequencing. Highlights included hands-on DNA extraction and a Q&A with Dr. Smith.",
    date: "Nov 12, 2024",
    sponsors: [
      // { name: "Genomics Inc.", logo: "/sponsors/genomics-inc.png" },
      // { name: "BioLab", logo: "/sponsors/biolab.png" }
    ],
    images: [sample, sample2, sample4]
  },
  {
    title: "Protein Folding Seminar",
    description: "Explored the complexities of protein structure and prediction. Keynote by Prof. Lee and interactive folding simulations.",
    date: "Oct 2, 2024",
    sponsors: [
      // { name: "ProteinX", logo: "/sponsors/proteinx.png" }
    ],
    images: [sample2, sample4, sample]
  },
  {
    title: "AI in Biology Symposium",
    description: "Showcased how machine learning is revolutionizing biological research. Panel discussion with AI experts and live demos.",
    date: "Sep 18, 2024",
    sponsors: [
      // { name: "DeepBio", logo: "/sponsors/deepbio.png" },
      // { name: "ML4Life", logo: "/sponsors/ml4life.png" }
    ],
    images: [sample4, sample, sample2]
  }
];
