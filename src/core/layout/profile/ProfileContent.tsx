import { Tag } from "antd";
import ProfileAvatar from "./ProfileAvatar";
import Link from "next/link";
import { LuSettings } from "react-icons/lu";
import type { AuthUser } from "@/core/module/auth/type/auth";

type ProfileContentProps = {
  user?: AuthUser
}

const ProfileContent = ({ user }: ProfileContentProps) => {
  return (
    <div className="w-72 flex flex-col gap-y-3 relative">
      <Link href="/main/profile" className="absolute text-primary text-xl -top-3 -right-3 hover:text-primary/50">
        <LuSettings />
      </Link>
      <div className="flex flex-row gap-x-3 items-center">
        <ProfileAvatar className="w-14 h-14" avatar={user?.path_photo} />
        <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
          <div className="font-semibold truncate"> {user?.nama} </div>
          <div> {user?.email} </div>
        </div>
      </div>
      <div>
        <Tag className="bg-slate-200 border-none"> {user?.role} </Tag>
      </div>
    </div>
  );
}

export default ProfileContent;