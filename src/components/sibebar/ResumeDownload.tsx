import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

interface IResumeDownload { }

export default function ResumeDownload({ }: IResumeDownload) {
    return <div>

        <Link href={'/resume.pdf'} target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-500 p-[12px] transition-all flex items-center justify-between gap-2 text-white font-bold py-2 px-4 rounded"><FiDownload /> Download CV</Link>
    </div>
}
