import SoftSkills from "./SoftSkills";
import WorkingSkills from "./WorkingSkills";

interface ISkillsList {}

export default function SkillsList({}: ISkillsList) {
    return <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="md:w-[55%]">
            <WorkingSkills />
    </div>
    <div className="md:w-[45%]">
        <SoftSkills />
    </div>
    </div>
}
