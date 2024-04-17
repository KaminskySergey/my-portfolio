import { contactsLinks } from "@/constans/contacts-link";
import Image from "next/image";
import Link from "next/link";

interface IContacts { }



export default function Contacts({ }: IContacts) {
    
    return <div className="bg-[#F2F3F5] rounded w-full p-2">
        <ul className="flex flex-col gap-3">
            {
                contactsLinks.map(el => (
                    <li key={el.id} className="flex items-center gap-2 p-1">
                        <div className="p-1 bg-white">
                            <div className="relative w-[24px] h-[24px]">
                                <Image src={el.path} fill={true} alt="phone" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#ABABAD] font-medium text-[14px]">{el.description}</p>
                            <p className="text-[#79796C] font-bold text-[16px]">{el.name}</p>
                        </div>
                    </li>
                ))
            }


        </ul>
        
    </div>
}
