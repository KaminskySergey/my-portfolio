import ProgressBar from "@/components/ui/ProgressBar";

interface IWorkingSkills {}

export default function WorkingSkills({}: IWorkingSkills) {
    return <div className="flex flex-col gap-2">
        <h3 className="font-bold text-black text-[24px]">Working Skills</h3>
        <ul className="flex flex-col gap-2">
            <li><ProgressBar text="React" percent={80} color="blue"/></li>
            <li><ProgressBar text="JavaScript" percent={65} color="yellow"/></li>
            <li><ProgressBar text="NestJS" percent={70} color="red"/></li>
            <li><ProgressBar text="NextJS" percent={70} color="purple"/></li>
            <li><ProgressBar text="NodeJS" percent={65} color="green"/></li>
            
        </ul>
    </div>
}
