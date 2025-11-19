"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import sample from "../../../../public/sample.jpg"

export default function PreviousEventsPage() {
  return (
    <div className="w-full pb-32">

      {/* ----------------- HERO SECTION ----------------- */}
      <section className="relative w-full h-[70vh] flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={sample}
            alt="Hero"
            fill
            className="object-cover rotate-y-180"
            priority
          />
          <div className="absolute inset-0 backdrop-blur-xs bg-gradient-to-br from-seagreen-50/30 via-skyblue/50 to-indigo-400/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-4xl font-semibold tracking-widest uppercase">
              Events • News • Blog
            </h1>
          </div>
        </div>
      </section>


      {/* ----------------- EVENTS SECTION ----------------- */}
      <SectionWrapper title="Latest Events">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>

            {events.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <Card className="rounded-xl overflow-hidden shadow">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </SectionWrapper>


      {/* ----------------- BLOG SECTION ----------------- */}
      <SectionWrapper title="Bioinformatics Blog">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>

            {blogs.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <Card className="rounded-xl overflow-hidden shadow">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.author} • {item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600">{item.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </SectionWrapper>


      {/* ----------------- USER BLOG SECTION ----------------- */}
      <SectionWrapper title="User Posts">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>

            {userBlogs.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <Card className="rounded-xl overflow-hidden shadow">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.author} • {item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-2">{item.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded-md bg-seagreen/15 text-seagreen">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
    <section className="w-full py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        {children}
      </div>
    </section>
  );
}


/* ----------------- MOCK DATA ----------------- */

const events = [
  {
    title: "Genome Sequencing Workshop",
    description: "A beginner-friendly workshop introducing the fundamentals of genome sequencing.",
    date: "Nov 12, 2024"
  },
  {
    title: "Protein Folding Seminar",
    description: "Dive into the complexities of protein structure and prediction.",
    date: "Oct 2, 2024"
  },
  {
    title: "AI in Biology Symposium",
    description: "Exploring how machine learning is revolutionizing biological research.",
    date: "Sep 18, 2024"
  }
];

const blogs = [
  {
    title: "What Is Bioinformatics?",
    description: "A breakdown of how biology and computer science intersect.",
    author: "Admin",
    date: "Jan 12, 2025"
  },
  {
    title: "Sequencing Technologies Explained",
    description: "NGS, Sanger, and long-read sequencing compared.",
    author: "Carol",
    date: "Feb 3, 2025"
  },
  {
    title: "Beginner’s Guide to Python in Biology",
    description: "Learn how Python is used to analyze biological datasets.",
    author: "Marcus",
    date: "Mar 8, 2025"
  }
];

const userBlogs = [
  {
    title: "Analyzing RNA Expression",
    description: "My experience analyzing RNA-seq datasets in R.",
    author: "Lina",
    date: "Mar 2, 2025",
    tags: ["RNA", "R Language", "Biology"]
  },
  {
    title: "MIT’s Protein Database Exploration",
    description: "What I learned browsing thousands of protein entries.",
    author: "John D",
    date: "Feb 28, 2025",
    tags: ["Proteins", "Research"]
  },
  {
    title: "My First Genome Assembly",
    description: "A fun introduction to assembling a bacterial genome.",
    author: "Kai",
    date: "Feb 15, 2025",
    tags: ["Genomics", "Assembly"]
  }
]
