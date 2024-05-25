import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight} from "lucide-react"
import { buttonVariants } from "./ui/button"
import ThemeSwitch from "./ThemeSwitch"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Footer = () => {

    return (
        <footer>
            <MaxWidthWrapper className=" p-12 my-8 space-y-4">
                <span className="font-semibold text-3xl">Flend.</span>
                <div className=" flex">
                    
                    <div className=" rounded-2xl shadow-xl m-5 p-12 flex flex-col space-y-10 text-center flex-1">
                        
                        <h2 className="text-2xl font-bold mt-9">Conócenos</h2>
                        <span className="text-gray-300 font-lg text-justify">Brindamos soluciones financieras personalizadas y accesibles para estudiantes, impulsando un futuro financiero sólido y próspero.</span>
                    </div>

                    <div className=" rounded-2xl shadow-xl m-5 p-12 flex flex-col space-y-10 text-center flex-1">
                        
                        <h2 className="text-2xl font-bold mt-9">¿Algún problema?</h2>
                        <span className="text-gray-300 font-lg">ayudame@flend.com</span>
                        <span className="text-gray-300 font-lg">+52 614 7292876</span>
                    </div>

                    <div className=" rounded-2xl shadow-xl m-5 p-12 flex flex-col space-y-10 text-center flex-1 hover:scale-110 duration-300">
                        
                        <h2 className="text-2xl font-bold mt-9">&quot;Construyendo juntos un futuro financiero sólido y prometedor.&quot;</h2>
                        
                    </div>
                </div>

                
            </MaxWidthWrapper>
        </footer>
    )
}
export default Footer