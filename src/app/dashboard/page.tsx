"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ProjectComponent from "@/components/ProjectComponent"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { dashInfo } from "@/config/DashboardConfig"
import { useEffect, useState } from "react"

const Page = () => {
    const [hability, setHability] = useState("")

    return(
        <>
            <MaxWidthWrapper className="pt-8 pb-8">
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
                       
                <div className="pt-2 text-[#81F0E8]">
                    <ToggleGroup onValueChange={(value) => setHability(value)} type="single">
                        {
                            dashInfo.habilities
                            .map((item, key) => (
                                <div key={key}>
                                    <ToggleGroupItem value={item[0]}>{item[1]}</ToggleGroupItem>
                                </div>
                            ))
                        }
                    </ToggleGroup>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 md:grid pt-4 gap-4">
                    {
                        dashInfo.projects
                        .filter((project) => (hability)?project.hability.includes(hability): true)
                        .map((project, key) => (
                            <div key={key}>
                                <ProjectComponent project={project}/>
                            </div>
                        ))
                    }
                </div>

            </MaxWidthWrapper>
        </>
    )
}

export default Page