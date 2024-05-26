"use client"

import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import InfoComponent from "@/components/InfoComponent"
import { Button } from "@/components/ui/button"
import { dashInfo } from "@/config/DashboardConfig"
import Link from "next/link"

interface PageProps {
    params: {
        service: string
    }
}

const Page = ({params}: PageProps) => {
    const {service} = params
    console.log(service)

    function shuffleArray<T>(array: T[]): T[] {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const projects = shuffleArray(dashInfo.projects)


    return(
        <>
            <MaxWidthWrapper className="pt-8 pb-8 overflow-x-hidden ">
                <div className="w-full text-center border-b-2 border-neutral-300 dark:border-neutral-800 space-y-2 py-2">
                    <h1 className="text-4xl font-bold mb-4 text-[#81F0E8]">¿Qué ofrecemos?</h1>
                    {
                    dashInfo.description ?
                    <div className=" text-xl">
                        {dashInfo.description}
                    </div>:
                    <></>
                }    
                </div>
                       
                <div className="pt-2 text-[#81F0E8] flex w-full flex-wrap items-center justify-center sm:space-x-3 overflow-x-scroll sm:overflow-x-hidden">
                    {
                        dashInfo.products
                        .map((item, key) => (
                            <div key={key}>
                                <Link
                                href={"/dashboard/"+item[0]}>
                                    <Button variant={"outline"} className=" border-2 font-semibold mr-2 mt-2" value={item[0]}>{item[1]}</Button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid pt-4 gap-4">
                    {
                        projects
                        .filter((project) => project.product.includes(service)).slice(0, 2)
                        .map((project, key) => (
                            <div key={key}>
                                <InfoComponent project={project}/>
                            </div>
                        ))
                    }
                </div>

            </MaxWidthWrapper>
        </>
    )
}


export default Page