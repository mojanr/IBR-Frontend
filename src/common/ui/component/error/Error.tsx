import { BiSolidError } from "react-icons/bi";

type ErrorProps = {
  message?: string
}

const Error = ({ message = "Ooops, something went wrong with our server, please try again later!" }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center px-5 pb-5 pt-5">
      <BiSolidError className="text-8xl text-red-500" />
      <div className="text-center font-semibold">{message}</div>
    </div>
  );
}

export default Error;