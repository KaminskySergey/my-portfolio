import Image from "next/image"

interface IEducation {}

const education = [
    {
        name: 'Complete Secondary Education',
        years: '2007 - 2018',
        icon: '',
        style: 'bg-cyan-400 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70'
    },
    {
        name: 'Bachelor of the Historical Faculty at ZNU',
        years: '2018 - 2022',
        icon: '',
        style: 'bg-yellow-400 shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/70'
    },
    {
        name: 'Full Stack Course at GoIT',
        years: '2021 - 2022',
        icon: '',
        style: 'bg-lime-400 shadow-lg shadow-lime-400/50 hover:shadow-lime-400/70'
    },
    {
        name: 'Integration Courses in German Language',
        years: '2023 - 2024',
        icon: '',
        style: 'bg-purple-400 shadow-lg shadow-purple-400/50 hover:shadow-purple-400/70'
    },

]
export default function Education({}: IEducation) {
    return <div className="flex flex-col gap-2">
        <h3 className="font-bold text-black text-[24px] ml-[16px]">Educatoin</h3>
        <ul className="flex flex-wrap">
{education.map((el, idx) => (
    <li key={idx} className={`flex flex-col h-[160px] w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-3`}>
    <div className={`rounded-lg flex flex-col p-2 gap-2 ${el.style} transition-all h-full`}>
    <div className=" flex items-center ml-2 mt-2 gap-2 rounded-t-lg">
        <Image src={`/education.svg`} alt={el.name} width={32} height={32}/>
    </div>
    <div className="rounded-b-lg pl-6">
        <h4 className="font-bold text-[18px]">{el.name}</h4>
        <p className="font-medium">{el.years}</p>
    </div>
    </div>
</li>
))}
        </ul>
    </div>
}
