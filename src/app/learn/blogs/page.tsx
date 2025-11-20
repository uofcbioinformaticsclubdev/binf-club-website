// // Colour palette for the website
// // Coolors : https://coolors.co/b0abd8-22aaa1-84cae7-fffdf1-2d3142 
"use client";

import { act, useState } from 'react';
import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(
    () => import("@/components/background/ParticlesBackground"),
    { ssr: false }
)

import ArticleCard from "@/components/ui/article-card";
import blogs from "@/data/BlogData";

export default function Blogs() {

    const [activeTabs, setActiveTabs] = useState<string[]>(["all"])

    // Sample tags that could be used for filtering (just for UI purposes)
    const tabs = ["all", "sequence analysis", "gene expression", "protein structure", "variants"]

    const handleClick = (tab: string) => {

        // Case 1 : User clicks 'All' tag
        if (tab === "all") {
            setActiveTabs(["all"])
            return
        }

        // Case 2 : User clicks non-"all" tag
        let updated: string[] = [];

        if (activeTabs.includes(tab)) {
            // Case 2a : Remove tab if already clicked
            updated = activeTabs.filter((t) => t != tab);
        } else {
            // Case 2a : Activate the tab when clicked
            updated = [...activeTabs.filter((t) => t != "all"), tab]
        }

        if (updated.length == 0) {
            updated = ["all"]
        }

        setActiveTabs(updated)
    }

    return (
        <div className="relative min-h-screen">
            <div className='flex flex-col justify-center items-center'>
                <div className='relative w-full md:h-130'>
                    <ParticlesBackground />
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-50 via-[#92cbe3] to-indigo-400 opacity-80 -z-20" />
                    <div className="mt-10 absolute left-10 bottom-10 text-[#2B2C2C]">
                        <h1 className="text-5xl font-bold pt-5">Blogs</h1>
                        <h2 className="text-2xl font-semi-bold pt-2 w-3/4">
                            Hear from our members as they share their insights on bioinformatics
                            topics!
                        </h2>
                    </div>
                </div>
                <div className="pt-5 bg-[#fffdf1]">
                    <div className='py-4 px-10 text-[#2B2C2C] font-semi-bold flex flex-row gap-6 justify-start'>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleClick(tab)}
                                className={`px-3 py-2 rounded-full cursor-pointer ${activeTabs.includes(tab) ? "bg-[#36C7B5]" : "hover:bg-[#36C7B5]/20 transparent"}`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        {blogs.map((blog, index) => (
                            <ArticleCard
                                key={index}
                                image={blog.image}
                                author={blog.author}
                                title={blog.title}
                                header={blog.header}
                                date={blog.date}
                                tags={blog.tags}
                            />
                        ))}
                    </section>
                </div>
            </div>
        </div>
    )
}

