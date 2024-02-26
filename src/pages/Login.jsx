import { Input, Select, SelectItem } from "@nextui-org/react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/apis/authApi";
import toast from "react-hot-toast";
import { setToken } from "../utils/localstorage";

export default function Login() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [loginUser, { isSuccess, isLoading, isError, error }] =
    useLoginMutation();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const emailOrMobileNumber = e.target.emailOrMobileNumber.value;
      const password = e.target.password.value;
      const data = { emailOrMobileNumber, password };
      const res = await loginUser(data).unwrap();
      if (res) {
        navigate("/layout/user");
        setToken(res.token);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setToken();
      toast.success("Logged in success");
    }
    if (isError) {
      toast.error(error?.data?.error);
    }
  }, [isError, error, isSuccess]);

  return (
    <div className="flex flex-col items-center justify-center pt-20 bg-white">
      <div className=" w-1/2 mb-3">
        <h1 className=" text-2xl text-start text-purple-500">
          Login to your account
        </h1>
        <p className="">Join with us and continue your account</p>
      </div>
      <form onSubmit={handleLogin} className=" flex flex-col gap-y-2 w-1/2 ">
        <Input
          isRequired
          color="secondary"
          type="string"
          autoComplete="off"
          name="emailOrMobileNumber"
          label="Enter Your Email / Mobile Number"
        />

        <Input
          label="Enter your password"
          color="secondary"
          isRequired
          autoComplete="off"
          name="password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <IoMdEyeOff className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        <div className="flex justify-between  mt-2 items-center">
          <p>
            Don't have any account ?{" "}
            <Link to={"/register"} className="text-purple-500">
              Register
            </Link>
          </p>
          <input
            type="submit"
            className="px-5 py-3 bg-purple-500 text-white rounded-lg "
          />
        </div>
      </form>
    </div>
  );
}
