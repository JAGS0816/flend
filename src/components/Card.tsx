const Card = ({title, description}: {title:string, description:string}) => {
    return (
        <div className=" rounded-2xl shadow-xl border-2 p-12 flex flex-col space-y-8 text-left w-full">
            <h2 className="text-2xl font-bold mt-20">{title}</h2>
            <span className="text-gray-600 font-lg">{description}</span>
        </div>
    )
}

export default Card