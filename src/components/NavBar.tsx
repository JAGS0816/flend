import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "./ui/button"
import ThemeSwitch from "./ThemeSwitch"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = async () => {

    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30  dark:bg-stone-950/50 w-full bg-transparent backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between">
                    <Link 
                        href="/" 
                        className="flex z-40 font-semibold">
                        <span className="font-semibold">Flend.</span>
                    </Link>

                    
                    <div className=" items-center space-x-1 sm:space-x-4 flex">
                        <LoginLink 
                            className={buttonVariants({
                            variant: "ghost",
                            size: "sm"
                        })}>
                        Sign in
                        </LoginLink>
                        <Link
                            href="/about"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })}>
                            About
                        </Link>
                        
                    <ThemeSwitch/>   
                    </div>
                    
                    

                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
export default Navbar