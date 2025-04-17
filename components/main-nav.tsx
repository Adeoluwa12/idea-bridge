import React from "react"
import Link from "next/link"
import { Lightbulb } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import { MobileNav } from "./mobile-nav"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6 w-full">
      <MobileNav />
      <Link href="/" className="flex items-center space-x-2">
        <Lightbulb className="h-6 w-6 text-green-600" />
        <span className="font-bold text-xl">IdeaBridge Nigeria</span>
      </Link>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-500 to-green-700 p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Lightbulb className="h-6 w-6 text-white" />
                      <div className="mb-2 mt-4 text-lg font-medium text-white">IdeaBridge Nigeria</div>
                      <p className="text-sm leading-tight text-white/90">
                        Empowering Nigerians to submit innovative ideas for national development
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/about" title="Our Mission">
                  Learn about our vision for Nigerian innovation
                </ListItem>
                <ListItem href="/how-it-works" title="How It Works">
                  Understand the process from idea to implementation
                </ListItem>
                <ListItem href="/impact" title="Our Impact">
                  See how we're transforming Nigeria through innovation
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/ideas" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Ideas Gallery</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/mentors" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Mentors</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/investors" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Investors</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-auto flex items-center space-x-4">
        <ModeToggle />
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
