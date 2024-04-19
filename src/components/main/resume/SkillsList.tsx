import SoftSkills from "./SoftSkills";
import WorkingSkills from "./WorkingSkills";

interface ISkillsList {}

export default function SkillsList({}: ISkillsList) {
    return <div className="w-full flex gap-8">
        <div className="w-[55%]">
            <WorkingSkills />
    </div>
    <div className="w-[45%]">
        <SoftSkills />
    </div>
    </div>
}
