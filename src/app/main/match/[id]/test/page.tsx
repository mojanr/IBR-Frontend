import Title from "@/common/ui/component/title/Title";
import ProfileAvatar from "@/core/layout/profile/ProfileAvatar";
import FullScreen from "@/module/match/component/common/FullScreen";

const Page = () => {
  return (
    <div className="w-full h-dvh flex flex-row gap-x-5">
      <div className="w-96 h-full flex flex-col justify-center gap-y-5">
        {/* timer */}
        <div className="flex flex-col items-center p-5">
          <div> Quarter dropdown </div>
          <div className="text-8xl font-bold">
            08:20
          </div>
          <div className="flex flex-row gap-x-3">
            <div> Pause / start </div>
            <div> Stop </div>
          </div>
        </div>

        {/* wasit */}
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 w-full">
            <ProfileAvatar className="w-14 h-14" />
            <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
              <div className="font-semibold truncate"> Nama </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 w-full">
            <ProfileAvatar className="w-14 h-14" />
            <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
              <div className="font-semibold truncate"> Nama </div>
            </div>
          </div>

          <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 w-full">
            <ProfileAvatar className="w-14 h-14" />
            <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
              <div className="font-semibold truncate"> Nama </div>
            </div>
          </div>
        </div>
      </div>


      {/* content */}
      <div className="flex-1 flex items-center">
        {/* indicator */}
        <div className="flex flex-col gap-y-3 justify-center mt-3">
          {/* call analysis , pilih salah satu*/}
          <Title className="mb-1"> Call Analysis </Title>
          <div className="w-96 flex flex-row gap-x-3">
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
          </div>

          {/* call position , pilih salah satu*/}
          <Title className="mb-1"> Call Position </Title>
          <div className="w-96 flex flex-row gap-x-3">
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
          </div>

          {/* zone box , pilih salah satu*/}
          <Title className="mb-1"> Zone Box </Title>
          <div className="w-96 flex flex-row gap-x-3">
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
          </div>

          {/* call type , pilih salah satu*/}
          <Title className="mb-1"> Call Type </Title>
          <div className="w-96 flex flex-row gap-x-3">
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
          </div>

          {/* iot , bisa pilih semua*/}
          <Title className="mb-1"> IOT </Title>
          <div className="flex flex-row gap-x-3 gap-y-3 flex-wrap">
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
            <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;