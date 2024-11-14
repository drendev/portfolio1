import Image from "next/image"

export const BackgroundDesktop = () => {
    return (
        <div className="absolute top-[165px] left-[-25px] flex-col items-center flex">
            <Image src="/graph.svg"
            loading="eager" 
            width={620}
            height={620}
            alt="" 
            className="mt-0 block max-w-full"/>
        </div>
    )
}