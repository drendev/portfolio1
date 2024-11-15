import Link from "next/link"

export const Logo = () => {
    return (
        <Link href="/" className="tracking-[-0.13px] bg-gradient-to-b from-[#e9e9e9] via-[#e9e9e9] to-[#ffffff] rounded-[13.66px] flex-none p-[3.54px] transition-all duration-200 overflow-visible active:from-[#e0e0e0] active:via-[#fefefe] active:to-[#fefefe]">
            <div className="bg-gradient-to-t from-[#ececec] to-[#ffffff] rounded-[10.12px] w-full h-full p-[3.04px] overflow-hidden shadow-[0_0_1px_#00000012,0_0_1px_#0000000d,0_3px_3px_#00000040,0_1px_3px_#0000001f] active:shadow-[0_0_1px_#00000012,0_0_1px_#0000000d,0_3px_3px_#00000020,0_1px_3px_#0000001a]">
                <div className="gap-[2px] text-[#101010] bg-gradient-to-t to-[#f4f4f4] from-[#fefefe] rounded-[8px] items-center w-[40px] h-[40px]  text-[13px] font-medium leading-[1.07692] flex overflow-hidden">
                    <div className="bg-[url('/logo.png')] bg-no-repeat bg-cover bg-center h-[60px] w-[40px]">
                    </div>
                </div>
            </div>
        </Link>
    )
}