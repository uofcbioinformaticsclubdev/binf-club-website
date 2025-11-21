
"use client";

import { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Link from "next/link"

function navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full p-3 flex flex-row items-center justify-between z-50 transition-all duration-500
        ${scrolled
                    ? "backdrop-blur-lg bg-cream/70 border-b border-gray-200"
                    : "bg-transparent border-transparent"
                }
      `}
        >

            <Link href="/">
                <div className="flex">
                    <img src={"./binf_logo.png"} className="h-10 w-auto ">
                    </img>
                </div>
            </Link>

            <NavigationMenu>
                <NavigationMenuList>

                    <NavigationMenuLink className="hide-nav-button-bg text-neutral-900 font-semibold data-[state=open]:text-[#84cae7]" asChild>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>

                    {/* About Section */}
                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className="hide-nav-button-bg data-[state=open]:text-[#84cae7]"
                        >
                            About
                        </NavigationMenuTrigger>

                        <NavigationMenuContent className="">
                            <ul className="grid w-[250px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/about">About Bioinformatics Club</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/about/team">Team</Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}


                    {/* Learn Section */}
                    <NavigationMenuItem>
                        {/* <NavigationMenuTrigger
                            className="hide-nav-button-bg data-[state=open]:text-[#84cae7]"
                        >
                            Learn
                        </NavigationMenuTrigger> */}

                        <NavigationMenuLink className="hide-nav-button-bg text-neutral-900 font-semibold data-[state=open]:text-[#84cae7]" asChild>
                            <Link href="/learn/blog">Learn</Link>
                        </NavigationMenuLink>

                        {/* <NavigationMenuContent className="">
                            <ul className="grid w-[250px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/learn/whats-bioinformatics">What's Bioinformatics</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/learn/blog">Blog</Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent> */}
                    </NavigationMenuItem>

                    {/* Events Section */}
                    <NavigationMenuItem>
                        {/* <NavigationMenuTrigger className="hide-nav-button-bg data-[state=open]:text-[#84cae7]">Events</NavigationMenuTrigger> */}
                        {/* <ul className="grid w-[250px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/events/previous-events">Event News</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/events/gallery">Gallery</Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul> */}
                        <NavigationMenuLink className="hide-nav-button-bg text-neutral-900 font-semibold data-[state=open]:text-[#84cae7]" asChild>
                            <Link href="/events/previous-events">Events</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>


            {/* Contact */}
            <Link href="/contact" className="font-medium text-white px-4 py-0.5 bg-gradient-to-r from-teal-400 to-seagreen rounded-md">
                Contact
            </Link>


        </nav>
    )
}

export default navbar