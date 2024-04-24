import { IWork } from "@/types/works.interface";
import Image from "next/image";
import Link from "next/link";

interface IWorkCard {
    items: IWork
 }

export default function WorkCard({items }: IWorkCard) {
    return (<li className={`flex flex-col relative `}>
    <div className="relative w-full h-[300px]  overflow-hidden">
        <Image
            className="object-cover w-full rounded-t-lg md:h-auto md:rounded-none md:rounded-s-lg"
            fill
            src={`/works${items.image}.jpg`}
            alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    </div>
    <div className="absolute bottom-0 text-center flex flex-col items-center gap-2  left-0 w-full py-2 px-4  bg-opacity-80 bg-black">
        <div>
        <h4 className="text-yellow-500 font-bold">{items.name}</h4>
        </div>
        <div className="">
            <ul className="flex gap-2">
                <li className="border border-transparent rounded-lg p-1 justify-center bg-[#F2F3F5] transition-all hover:scale-125 hover:bg-slate-300 cursor-pointer "><Link href={items.link.gitHub}><Image src={'/github.svg'} alt="git" width={24} height={24}/></Link></li>
                <li className="border border-transparent rounded-lg p-1 justify-center bg-[#F2F3F5] transition-all hover:scale-125 hover:bg-slate-300 cursor-pointer "><Link href={items.link.webSite}><Image src={'/website.svg'} alt="website" width={24} height={24}/></Link></li>
            </ul>     
             </div>
    </div>
</li>)
}
