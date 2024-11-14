"use client";

import { useState } from "react";
import Image from "next/image";

export const ProfileImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="z-10 w-[221px] h-[329px] relative mb-3 tracking-[-0.13px] bg-gradient-to-b from-[#e9e9e9] via-[#e9e9e9] to-[#ffffff] rounded-[13.66px] flex-none p-[3.54px] transition-all duration-200 overflow-visible active:from-[#e0e0e0] active:via-[#fefefe] active:to-[#fefefe]" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="z-10 w-full h-full relative bg-gradient-to-t from-[#ececec] to-[#ffffff] rounded-[10.12px] p-[3.04px] overflow-hidden shadow-[0_0_1px_#00000012,0_0_1px_#0000000d,0_3px_3px_#00000040,0_1px_3px_#0000001f] active:shadow-[0_0_1px_#00000012,0_0_1px_#0000000d,0_3px_3px_#00000020,0_1px_3px_#0000001a]">
                <Image 
                    src={isHovered ? "/image1.jpg" : "/image.png"}
                    alt="Profile Picture" 
                    height={329} 
                    width={221} 
                    loading="eager" 
                    className={`block rounded-[10.12px] object-cover w-full h-full transition-all duration-500 ${!isHovered ? 'filter grayscale' : ''} ${isHovered ? 'scale-105' : 'scale-100'}`} 
                />
            </div>
        </div>
    );
};
