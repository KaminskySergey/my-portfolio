import Contacts from "./Contacts";
import Profile from "./Profile";
import ResumeDownload from "./ResumeDownload";


interface ISidebar {}

export default function Sidebar({}: ISidebar) {
    return <aside className="aside  flex items-center rounded-md flex-col gap-[24px] px-[32px] pb-[32px] pt-[0]">
        <Profile />
        <Contacts />
        <ResumeDownload />
    </aside>
}
