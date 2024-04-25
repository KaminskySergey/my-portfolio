'use client'

interface ITitle {
    title: string
}

export default function Title({title}: ITitle) {
    return <h2 className="font-bold text-[32px] inline-block relative">
    {title}
    {/* <span className="absolute top-1/2 right-[-125%] rounded-md w-24 h-0.5 bg-blue-500 transform"></span> */}
</h2>
}
