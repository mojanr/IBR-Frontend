"use client"

import Error from "@/common/ui/component/error/Error";
import { useEditUser } from "../../hook/user";
import FormEditUser from "./FormEditUser";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export type FormEditUserWrapperProps = {
  id: string | number
}

const FormEditUserWrapper = ({ id }: FormEditUserWrapperProps) => {

  // use get user by id
  const { data, isLoading, isFetching, isError, error } = useEditUser(id as number)

  return (
    <>
      {isError && (error.status != 404) ? (
        <Error />
      ) : (
        isLoading || isFetching ? (
          <div className="w-full flex items-center justify-center">
            <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
          </div>
        ) : (
          <>
            <FormEditUser defaultValues={{
              ...data?.data?.data?.user,
              ...data?.data?.data?.detail,
              user_id: `${data?.data?.data?.detail.users_id}`,
              id_m_lisensi: `${data?.data?.data?.detail.id_m_lisensi}`,
            }} />
          </>
        )
      )}
    </>
  );
}

export default FormEditUserWrapper;