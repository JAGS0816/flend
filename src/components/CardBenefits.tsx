import { Minus } from "lucide-react"

const CardBenefits = ({title}: {title:string}) => {
    return (
        <div className=" rounded-full shadow-xl p-8 flex flex-col text-center w-full bg-background hover:scale-110 duration-300">
            <Minus className="w-60 h-36  items-center" />
            <h2 className="text-2xl font-bold">{title}</h2>
        
        </div>
    )
}

export default CardBenefits