
"use client";

import { useEffect, useState } from "react";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
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

            <p>Logo</p>

            <NavigationMenu>
                <NavigationMenuList>
                    {/* About Section */}
                    <NavigationMenuItem>
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
                    </NavigationMenuItem>


                    {/* Learn Section */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger
                            className="hide-nav-button-bg data-[state=open]:text-[#84cae7]"
                        >
                            Learn
                        </NavigationMenuTrigger>

                        <NavigationMenuContent className="">
                            <ul className="grid w-[250px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/learn/whats-bioinformatics">What's Bioinformatics</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/learn/blogs">Blogs</Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Events Section */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hide-nav-button-bg data-[state=open]:text-[#84cae7]">Events</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[250px] gap-4">
                                <li>
                                    <NavigationMenuLink asChild>
                                        <Link href="/events/previous-events">Previous Events</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/events/gallery">Gallery</Link>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
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