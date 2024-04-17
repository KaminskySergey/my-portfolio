import Image from "next/image";
import ProfileImage from "./ProfileImage";
import SocialLink from "./SocialLink";

interface IProfile {}

export default function Profile({}: IProfile) {
    return <div className="w-full flex justify-center relative">
        <div className="absolute w-[200px] h-[200px] top-[-50%] rounded">
            <Image fill={true} src="/profile.jpg" className="shadow-xl  align-middle border-none rounded" alt="profile"/>
        </div>
    <div className="w-full pt-[94px] flex flex-col items-center gap-2">
        <div>
            <h1 className="font-bold text-[20px] text-black">Serhii Kaminskyi</h1>
        </div>
        <div className="bg-[#e1e2e4] p-2 rounded text-bold text-black text-[14px]">
            <p>FullStack development</p>
        </div>
        <div>
            <SocialLink />
        </div>
    </div>
    </div>

}
