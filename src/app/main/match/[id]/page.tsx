import Title from "@/common/ui/component/title/Title";
import ProfileAvatar from "@/core/layout/profile/ProfileAvatar";
import FullScreen from "@/module/match/component/common/FullScreen";

const Page = () => {
  return (
    // <div className="p-5 flex flex-col gap-y-3">
    //   {/* <FullScreen>
    //     test
    //   </FullScreen> */}

    //   {/* timer */}
    //   <div className="flex flex-col items-center p-5">
    //     <div className="text-8xl font-bold">
    //       08:20
    //     </div>
    //     <div className="flex flex-row gap-x-3">
    //       <div> Pause / start </div>
    //       <div> Stop </div>
    //     </div>
    //   </div>

    //   {/* wasit */}
    //   <div className="flex flex-row gap-x-5 justify-center">
    //     <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 min-w-96">
    //       <ProfileAvatar className="w-14 h-14" />
    //       <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
    //         <div className="font-semibold truncate"> Nama </div>
    //       </div>
    //     </div>

    //     <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 min-w-96">
    //       <ProfileAvatar className="w-14 h-14" />
    //       <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
    //         <div className="font-semibold truncate"> Nama </div>
    //       </div>
    //     </div>

    //     <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 min-w-96">
    //       <ProfileAvatar className="w-14 h-14" />
    //       <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
    //         <div className="font-semibold truncate"> Nama </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="flex flex-row gap-x-3 justify-center mt-3">
    //     {/* call analysis , pilih salah satu*/}
    //     <div className="w-96 flex flex-col gap-y-2">
    //       <Title className="mb-1"> Call Analysis </Title>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
    //     </div>

    //     {/* call position , pilih salah satu*/}
    //     <div className="w-96 flex flex-col gap-y-2">
    //       <Title className="mb-1"> Call Position </Title>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
    //     </div>

    //     {/* zone box , pilih salah satu*/}
    //     <div className="w-96 flex flex-col gap-y-2">
    //       <Title className="mb-1"> Zone Box </Title>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
    //     </div>

    //     {/* call type , pilih salah satu*/}
    //     <div className="w-96 flex flex-col gap-y-2">
    //       <Title className="mb-1"> Call Type </Title>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
    //     </div>

    //     {/* iot , bisa pilih semua*/}
    //     <div className="w-96 flex flex-col gap-y-2">
    //       <Title className="mb-1"> IOT </Title>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
    //       <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
    //     </div>
    //   </div>

    //   {/* table content */}
    //   <div>
    //     table
    //   </div>
    // </div>
    <div className="p-5 flex flex-col gap-y-3">
      {/* <FullScreen>
        test
      </FullScreen> */}

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
      <div className="flex flex-row gap-x-5 justify-center">
        <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 min-w-96">
          <ProfileAvatar className="w-14 h-14" />
          <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
            <div className="font-semibold truncate"> Nama </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 min-w-96">
          <ProfileAvatar className="w-14 h-14" />
          <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
            <div className="font-semibold truncate"> Nama </div>
          </div>
        </div>

        <div className="flex flex-row gap-x-3 items-center border-2 border-solid border-slate-100 rounded-xl p-5 min-w-96">
          <ProfileAvatar className="w-14 h-14" />
          <div className="flex-1 text-muted-foreground leading-tight overflow-hidden">
            <div className="font-semibold truncate"> Nama </div>
          </div>
        </div>
      </div>

      {/* indicator */}
      <div className="flex flex-row gap-x-3 justify-center mt-3">
        {/* call analysis , pilih salah satu*/}
        <div className="w-96 flex flex-col gap-y-2">
          <Title className="mb-1"> Call Analysis </Title>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> C1 </div>
        </div>

        {/* call position , pilih salah satu*/}
        <div className="w-96 flex flex-col gap-y-2">
          <Title className="mb-1"> Call Position </Title>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> P1 </div>
        </div>

        {/* zone box , pilih salah satu*/}
        <div className="w-96 flex flex-col gap-y-2">
          <Title className="mb-1"> Zone Box </Title>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> Z1 </div>
        </div>

        {/* call type , pilih salah satu*/}
        <div className="w-96 flex flex-col gap-y-2">
          <Title className="mb-1"> Call Type </Title>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> CALL1 </div>
        </div>

        {/* iot , bisa pilih semua*/}
        <div className="w-96 flex flex-col gap-y-2">
          <Title className="mb-1"> IOT </Title>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
          <div className="min-w-52 p-5 rounded-xl border-2 border-solid border-slate-100"> IOT1 </div>
        </div>
      </div>

      {/* table content */}
      <div>
        table
      </div>
    </div>
  );
}

export default Page;