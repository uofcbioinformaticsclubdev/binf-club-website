// // Colour palette for the website
// // Coolors : https://coolors.co/b0abd8-22aaa1-84cae7-fffdf1-2d3142 
"use client";

import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(
    () => import("@/components/background/ParticlesBackground"),
    { ssr: false }
)

import ArticleCard from "@/components/ui/article-card";
import blogs from "@/data/BlogData";

export default function Blogs() {
    return (
        <div className="relative min-h-screen">
            <div className='flex flex-col justify-center items-center'>
                <div className='relative w-full md:h-130'>
                    <ParticlesBackground />
                    <div className="mt-10 absolute left-10 bottom-10 text-[#2B2C2C]">
                        <h1 className="text-5xl font-bold pt-5">Blogs</h1>
                        <h2 className="text-2xl font-semi-bold pt-2 w-3/4">
                            Hear from our members as they share their insights on bioinformatics 
                            topics!
                        </h2>
                    </div>
                </div>
                <section className="pt-30 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-[#fffdf1]">
                    {blogs.map((blog, index) => (
                        <ArticleCard
                            key={index}
                            image={blog.image}
                            author={blog.author}
                            title={blog.title}
                            header={blog.header}
                            date={blog.date}
                        />
                    ))}
                </section>
            </div>
        </div>
    )
}

