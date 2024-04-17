import Image from "next/image"

interface ICapabilities {}

const capabilities = [
    {
        id: 1,
        name: 'Front-end',
        icon: 'code.svg',
        description: "I leverage the power of React and Next.js to bring your vision to life. With expertise in building scalable and performant frontend applications, I'm equipped to tackle any challenge and deliver cutting-edge solutions."
    },
    {
        id: 2,
        name: 'Backend',
        icon: 'server.svg',
        description: 'I adeptly craft backend solutions using Node.js and Nest.js, delivering robust and scalable architectures. My expertise enables me to tackle any challenge, delivering cutting-edge solutions that bring your vision to life.'
    }
]

export default function Capabilities({}: ICapabilities) {
    return <div>
        <div>
        <h3 className="font-bold text-[24px]">What I do</h3>
        </div>
        <div>
            <ul className="flex">
            {capabilities.map((el, index) => (
                <li key={el.id} className={`${index === 0 ? 'bg-[#3b82f6]' : 'bg-[#fde047]'} rounded-lg flex flex-col gap-2 w-[50%] m-[16px] p-3`}>
                    <div className="flex items-center gap-2 rounded-t-lg">
                        <Image src={`/${el.icon}`} alt={el.name} width={32} height={32}/>
                        <h4 className="font-bold text-[18px]">{el.name}</h4>
                    </div>
                    <div className=" rounded-b-lg pl-6">
                        <p className="font-medium">{el.description}</p>
                    </div>
                </li>
            ))}
            </ul>
        </div>

    </div>
}
