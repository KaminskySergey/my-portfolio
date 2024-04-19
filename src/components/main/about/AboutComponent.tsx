import ContainerMain from "@/components/ui/ContainerMain";
import Title from "@/components/ui/Title";
import MyDescription from "./MyDescription";
import Capabilities from "./Capabilities";
import Technologies from "./Technologies";

interface IAboutComponent {}

export default function AboutComponent({}: IAboutComponent) {
    return <ContainerMain>
        <div className="flex flex-col gap-4 p-6">
        <div>
        <Title title="About" />
        <MyDescription />
        </div>
        <Capabilities />
        <Technologies />
        </div>
    </ContainerMain>
}
