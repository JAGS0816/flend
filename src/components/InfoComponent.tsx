import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
import { Button } from "./ui/button"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
  

const InfoComponent = (
    {project}:
    {project: {
        title: string;
        link: string;
        product: string[];
        shortDesc: string;
        longDesc: string;
        keyPoints: string[];
        images: string[];
    }}
) => {

    return(
        
        <div className="rounded-xl border-2 p-4 max-h-[30rem] sm:max-h-[26rem] grid grid-rows-10 z-0 text-white">
            <h1 className="font-bold pb-2 row-span-1">{project.title}</h1>
            <div className="px-8 py-8 row-span-6 sm:row-span-7">
                {project.images && project.images.length > 0 && (
                    <Image
                        className="rounded-lg object-cover w-full h-56"
                        src={project.images[0]}
                        alt="Project Image"
                        width={1000}
                        height={1000}
                    />
                )}
            </div>
            <div className="text-sm flex row-span-3 sm:row-span-2 items-start 2xl:items-center overflow-y-hidden justify-between">
                <p>{project.shortDesc}</p>
            
                <Drawer>
                    <DrawerTrigger className=" h-full">
                        <Button variant="outline">
                            See more
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className=" border-0">
                        <DrawerHeader>
                        <DrawerTitle>{project.title}</DrawerTitle>
                        <DrawerDescription className=" max-h-full text-white">
                            <p>{project.longDesc}</p>
                            <div className="flex flex-col lg:flex-row pt-4 space-y-4">
                                {project.images && project.images.length > 0 && (
                                    <div className="w-full flex justify-center items-center">
                                        <Carousel className="w-full max-w-xs md:max-w-sm xl:max-w-xl flex justify-center items-center">
                                            <CarouselContent>
                                                {project.images.map((photo, index) => (
                                                        <CarouselItem key={index}>
                                                            <div className="flex justify-center items-center h-full">
                                                                <Image
                                                                    height={900}
                                                                    width={900}
                                                                    className="rounded-xl shadow-md object-cover"
                                                                    alt="Project Image"
                                                                    src={photo}
                                                                />
                                                            </div>
                                                        </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </Carousel>
                                    </div>
                                )}
                                <div className="w-full flex justify-start items-center text-sm">
                                    <ul>
                                        {project.keyPoints.map((feature, index) => (
                                            <li key={index}>
                                                <div className="flex justify-start items-center">
                                                    <Check className="w-4 h-4"/>
                                                    <span className="pl-2">{feature}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            {project.link ? (
                                <div className="flex w-full">
                                    <div className="w-full">
                                        <Link href={project.link} target="_blank">
                                            <Button variant="outline">
                                                <span className="pr-2">Visit</span>
                                                <ArrowRight className="w-4 h-4"/>
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="w-full flex justify-end">
                                        <DrawerClose className="mr-2">
                                            <Button variant="outline">Go back</Button>
                                        </DrawerClose>
                                    </div>
                                </div>
                            ) : (
                                <DrawerClose className="mr-2">
                                    <Button variant="outline">Go back</Button>
                                </DrawerClose>
                            )}
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}

export default InfoComponent
