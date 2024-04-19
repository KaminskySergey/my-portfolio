import ContainerMain from "@/components/ui/ContainerMain";
import ProgressBar from "../../ui/ProgressBar";
import SkillsList from "./SkillsList";
import Capabilities from "../about/Capabilities";
import Education from "./Education";
import Title from "@/components/ui/Title";

interface IResumeComponent {}

export default function ResumeComponent({}: IResumeComponent) {
    return <ContainerMain>
    <div className="flex flex-col gap-8 py-6">
    <div className="px-6">
            <Title title="Resume"/>
        </div>
        <div className="px-6">
           <Education />
        </div>
        <div className="p-8 bg-[#F2F3F5]">
            <SkillsList />
        </div>
        </div>
        </ContainerMain>
}
