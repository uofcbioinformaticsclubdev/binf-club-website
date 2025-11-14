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
    return (
        <nav
            className="fixed w-full p-3 flex flex-row items-center justify-between z-50  backdrop-blur-lg border-b border-gray-200 bg-cream/50"
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
                                        <Link href="/learn/blog">Blog</Link>
                                    </NavigationMenuLink>
                                    <NavigationMenuLink asChild>
                                        <Link href="/learn/workshops">Workshops</Link>
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
            <Link href="/contact" className="font-medium text-white px-4 py-0.5 bg-[#22AAA1]/50 rounded-md">
                Contact
            </Link>


        </nav>
    )
}

export default navbar