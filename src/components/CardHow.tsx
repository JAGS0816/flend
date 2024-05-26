import Image from "next/image";

const CardHow = ({title, description, image, ind}: {title:string, description:string, image:string, ind:number}) => {
    const result =  (ind%2)?(
        <div className=" flex w-full px-20 rounded-md bg-[#EEEBFE] items-center sm:flex-row flex-col">
            <div className=" w-full flex items-center justify-start">
                <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                className=" rounded-lg"
                />
            </div>
        
            <div className="p-12 flex flex-col space-y-8 text-left w-full items-center justify-end">
                <h2 className="text-2xl font-bold">{title}</h2>
                <span className="text-gray-600 font-lg">{description}</span>
            </div>
        </div>
    ):(
        <div className=" flex w-full px-20 rounded-md bg-[#EEEBFE] items-center sm:flex-row flex-col">
            <div className="p-12 flex flex-col space-y-8 text-left w-full items-center justify-start">
                <h2 className="text-2xl font-bold">{title}</h2>
                <span className="text-gray-600 font-lg">{description}</span>
            </div>
            <div className=" w-full flex items-center justify-end">
                <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                />
            </div>
        </div>
    )
    return result
}

export default CardHow