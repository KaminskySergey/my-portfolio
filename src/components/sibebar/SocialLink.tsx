'use client'
import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";
import { socialLinks } from "@/constans/social-link";


interface ISocialLink {}


  export default function SocialLink({}: ISocialLink) {
    const [isActive, setIsActive] = useState<number | null>(null);

    return (
        <ul className="flex gap-1">
            {socialLinks.map(el => (
                <li 
                    key={el.id} 
                    className={`rounded ${isActive === el.id ? 'bg-slate-300' : 'bg-[#F2F3F5]'} transition-all p-1`}
                    onMouseEnter={() => setIsActive(el.id)}
                    onMouseLeave={() => setIsActive(null)}
                >
                    <Link  href={el.url}>
                        <Image src={el.path} width={32} height={32} alt={el.url} />
                    </Link>
                </li>
            ))}
        </ul>
    );
}