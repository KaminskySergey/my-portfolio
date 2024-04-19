
interface ISoftSkills { }

const softSkills = ['Punctual', 'Honest', 'Cooperative', 'Hardworking', 'Committed', 'Energetic', 'Collaboration']

export default function SoftSkills({ }: ISoftSkills) {
    return <div className="flex flex-col gap-2"> 
        <h3 className="font-bold text-black text-[24px]">Soft Skills</h3>
        <ul className="flex flex-wrap">
            {softSkills.map((skill, index) => (
                <li className="bg-[#e1e2e4] m-2 p-2 rounded-lg shadow-inner font-bold" key={index}>{skill}</li>
            ))}
        </ul>
    </div>
}

