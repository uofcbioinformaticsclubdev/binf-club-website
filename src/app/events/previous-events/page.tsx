"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import biohack1 from "../../../../public/events-page/biohacks/biohack1.jpg";
import biohack2 from "../../../../public/events-page/biohacks/biohack2.jpg";
import biohack3 from "../../../../public/events-page/biohacks/biohack3.jpg";
import biohack4 from "../../../../public/events-page/biohacks/biohack4.jpg";
import biohack5 from "../../../../public/events-page/biohacks/biohack5.jpg";

import bioaro from "../../../../public/events-page/biohacks/bioaro.png";
import skorbio from "../../../../public/events-page/biohacks/skorbio.png";
import aimss from "../../../../public/events-page/biohacks/aimss.png";

import industry1_1 from "../../../../public/events-page/industry-night/industry-1.jpg";
import industry1_2 from "../../../../public/events-page/industry-night/industry-2.jpg";
import industry1_3 from "../../../../public/events-page/industry-night/industry-3.jpg";

import industry2_1 from "../../../../public/events-page/industry-night/industry-2-1.jpg";
import industry2_2 from "../../../../public/events-page/industry-night/industry-2-2.jpg";
import industry2_3 from "../../../../public/events-page/industry-night/industry-2-3.jpg";
import industry2_4 from "../../../../public/events-page/industry-night/industry-2-4.jpg";
import industry2_5 from "../../../../public/events-page/industry-night/industry-2-5.jpg";
import ASOC from "../../../../public/events-page/industry-night/ASOC_logo.png";
import FreadSense from "../../../../public/events-page/industry-night/FreadSense.png";



export default function PreviousEventsPage() {
  return (
    <div className="w-full pb-32">

      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={biohack2}
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
      <SectionWrapper title="Previous Events">
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
    <section className=" w-full py-20 pb-0">
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
      <h2 className="text-2xl font-semibold">{event.title}</h2>
      <span className="text-sm text-gray-500">{event.date}</span>
      <p className="text-neutral-600 mb-1">{event.description}</p>
      {/* Sponsor Ribbon */}
      <div className="flex items-center gap-4 mb-2">
        {event.sponsors.map((sponsor, i) => (
          <a key={i} href={sponsor.link || "#"} target="_blank" rel="noopener noreferrer">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={48}
              height={48}
              className="rounded h-12 w-auto p-1 object-contain"
            />
          </a>
        ))}
      </div>
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
    title: "BioHacks",
    description: "BioHack 2025 brought together students, mentors, and innovators to tackle real-world health challenges through data science, machine learning, and statistical analysis. Teams showcased creative, impactful solutions and shared thoughtful presentations that highlighted the power of computational approaches in healthcare. It was an inspiring, collaborative event that sparked new ideas and connections. Thank you to everyone who took part and helped make it a success!",
    date: "March, 2025",
    sponsors: [
      { name: "bioaro", logo: bioaro, link: "https://bioaro.com/" },
      { name: "skorbio", logo: skorbio, link: "https://skorbio.com/" },
      { name: "aimss", logo: aimss, link: "https://www.aimss.ca/" }
    ],
    images: [biohack1, biohack2, biohack3, biohack4, biohack5]
  },
  {
    title: "Industry Night '24",
    description: "Bioinformatics Industry Night featured expert panels, student networking, career advice, and dinner discussions on opportunities, trends, and ideas—bringing academia, start-ups, and industry closer to aspiring bioinformatics professionals.",
    date: "Nov 2024",
    sponsors: [],
    images: [industry1_2, industry1_1, industry1_3]
  },
  {
    title: "Industry Night '25",
    description: "Our Industry 2025 was packed with speakers, students, and industry professionals coming together to discuss the state of the bioinformatics field, new insights and trends, and of course, plenty of networking. Over dinner, the event was an exciting and informative session that opened up new perspectives on different areas of bioinformatics across academia and industry. Thank you for all our members who attended and our esteemed panelists for sharing their views. Thank you so much to our sponsors ASOC and FREDsense!",
    date: "Nov 2025",
    sponsors: [
      { name: "ASOC", logo: ASOC, link: "https://asoc.ucalgary.ca/" },
      { name: "FreadSense", logo: FreadSense, link: "https://fredsense.com/" },
    ],
    images: [industry2_1, industry2_5, industry2_3, industry2_4, industry2_2]
  },
  // {
  //   title: "AI in Biology Symposium",
  //   description: "Showcased how machine learning is revolutionizing biological research. Panel discussion with AI experts and live demos.",
  //   date: "Sep 18, 2024",
  //   sponsors: [
  //     // { name: "DeepBio", logo: "/sponsors/deepbio.png" },
  //     // { name: "ML4Life", logo: "/sponsors/ml4life.png" }
  //   ],
  //   images: [sample4, sample, sample2]
  // }
];
