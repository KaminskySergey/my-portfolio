import Image from "next/image";

interface IProfileImage {}

export default function ProfileImage({}: IProfileImage) {
    return <div className="relative w-[128px] h-[128px]">
    <Image
      src="/profile.jpg"
      fill={true}
      alt="Picture of the author"
    />
  </div>
}
