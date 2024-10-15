import { cn } from "@/core/lib/util";
import Image from "next/image";

type ProfileAvatarProps = {
  className?: string
  avatar?: string
  width?: number
  height?: number
}

const ProfileAvatar = ({ className, avatar, width = 100, height = 100 }: ProfileAvatarProps) => {
  
  // console.log(avatar)
  
  return (
    <Image
      // src={avatar ? `${process.env.PUBLIC_API_URL}${avatar}` : "https://avatar.iran.liara.run/public"}
      src={"https://avatar.iran.liara.run/public"}
      alt="avatar"
      width={width}
      height={height}
      className={cn("w-8 h-8 rounded-full", className)}
    />
  );
}

export default ProfileAvatar;