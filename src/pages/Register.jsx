import { Input, Select, SelectItem } from "@nextui-org/react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);
  const [pass, setPass] = useState("");
  console.log({ pass });
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex flex-col items-center justify-center pt-20 bg-white">
      <div className=" w-1/2 mb-3">
        <h1 className=" text-2xl text-start text-purple-500">
          Register your account
        </h1>
        <p className="">Join with us and start your account</p>
      </div>
      <form className=" flex flex-col gap-y-2 w-1/2 ">
        <Input
          type="text"
          color="secondary"
          required
          label="Full Name"
          placeholder="Enter your full name"
        />

        <Input
          type="text"
          color="secondary"
          label="Mobile Number"
          placeholder="Enter your mobile Number"
        />
        <Input
          color="secondary"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Select
          color="secondary"
          label="Account type"
          placeholder="Select type"
        >
          <SelectItem key="User">User</SelectItem>
          <SelectItem key="agent">Agent</SelectItem>
        </Select>
        <Input
          label="Password"
          color="secondary"
          placeholder="Enter your password"
          onChange={(e) => setPass(e.target.value)}
          isInvalid={pass?.length === 5 ? false : true}
          value={pass}
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
            Already have an account ?{" "}
            <Link to={"/login"} className="text-purple-500">
              Login
            </Link>
          </p>
          <button className="px-5 py-3 bg-purple-500 text-white rounded-lg ">
            Register{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
