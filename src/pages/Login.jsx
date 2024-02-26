import { Input, Select, SelectItem } from "@nextui-org/react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = () => {};
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
          color="secondary"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          color="secondary"
          placeholder="Enter your password"
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
              Login
            </Link>
          </p>
          <button className="px-5 py-3 bg-purple-500 text-white rounded-lg ">
            Login{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
