import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight } from "lucide-react"
import { Button, buttonVariants } from "./ui/button"
import ThemeSwitch from "./ThemeSwitch"
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = async () => {
    const {getAccessToken} = getKindeServerSession()

    const token = await getAccessToken()
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
                        {(!token)?
                            <LoginLink 
                                className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })}>
                            Sign in
                            </LoginLink>:
                            <Link href={"/dashboard"}>
                                <Button className=" bg-[#81F0E8] hover:text-neutral-100 text-neutral-700">
                                    <span className="font-semibold ">Dashboard</span>
                                </Button>
                            </Link>
                        }
                        
                    {/*<ThemeSwitch/>*/}   
                    </div>
                    
                    

                </div>
            </MaxWidthWrapper>
        </nav>
    )
}
export default Navbar