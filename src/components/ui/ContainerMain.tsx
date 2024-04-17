import { ReactNode } from "react"

interface IContainerMain {
    children: ReactNode
}

export default function ContainerMain({children}: IContainerMain) {
    return <section className="p-6 rounded-md">{children}</section>
}
