"use client"
import { navigation } from "@/constans/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface IHeader {}

export default function Header({}: IHeader) {
    const pathname = usePathname()
console.log(pathname)
    return <header className="header rounded-md bg-white">
        <nav className="p-4">
            <ul className="flex flex-col  items-center">
                {
                    navigation.map(el => (
                        <li className={`${pathname === `/${el.name}` ? 'bg-blue-500 hover:bg-blue-500' : 'hover:bg-slate-300'} w-full rounded  mb-4 bg-[#F1F5F8]  transition-all`} key={el.id} >
                            <Link href={`/${el.name}`} className="flex flex-col items-center p-3 gap-1">
                            <Image src={el.path} width={32} height={32} alt={el.name}/>
                            <p className="font-bold text-[12px] text-black">{el.name}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    </header>
}
