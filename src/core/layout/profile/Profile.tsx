import { Popover } from "antd";
import ProfileContent from "./ProfileContent";
import ProfileAvatar from "./ProfileAvatar";
import { auth } from "@/core/module/auth/lib/auth";
import type { AuthUser } from "@/core/module/auth/type/auth";

const Profile = async () => {

  const session = await auth()

  return (
    <Popover
      content={<ProfileContent user={session?.user as AuthUser} />}
      trigger="click"
      placement="rightBottom"
      className="hover:cursor-pointer"
      overlayInnerStyle={{ padding: 20, border: "1px solid rgba(226 232 240)", borderRadius: 7 }}
    >
      <ProfileAvatar className="w-10 h-10" avatar={session?.user?.path_photo} />
    </Popover>
  );
}

export default Profile;