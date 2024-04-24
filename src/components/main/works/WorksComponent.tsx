import ContainerMain from "@/components/ui/ContainerMain";
import Title from "@/components/ui/Title";
import WorkList from "./WorkList";


export default function WorksComponent() {
    return <ContainerMain>
        <div className="flex flex-col gap-8 py-6">
            <div className="px-6">
                <Title title="Works" />
            </div>
            <div className="px-6">
                <WorkList />
            </div>
        </div>
    </ContainerMain>
}
