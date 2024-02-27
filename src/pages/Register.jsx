import { Input, Select, SelectItem } from "@nextui-org/react";
import { IoMdEyeOff } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useRegisterMutation } from "../redux/apis/authApi";
import { setToken } from "../utils/localstorage";

export default function Register() {
  const navigate = useNavigate();
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");

  const [registerAccount, { isSuccess, isError, error }] =
    useRegisterMutation();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password?.length > 5) {
        toast.error("Password should be 5 Character!!!");
      }

      const userData = {
        fullName: e.target.fullName.value,
        mobileNumber: e.target.mobileNumber.value,
        email: e.target.email.value,
        nid: e.target.nid.value,
        accountType,
        password,
      };

      const res = await registerAccount(userData).unwrap();

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
      toast.success("Registration success");
    }
    if (isError) {
      toast.error(error?.data?.error);
    }
  }, [isError, error, isSuccess]);

  return (
    <div className="flex flex-col items-center justify-center lg:pt-20 pt-10 mx-6 bg-white">
      <div>
        <h1 className="text-3xl mb-5 text-purple-500">MyKash</h1>
      </div>
      <div className=" lg:w-2/3 mb-3">
        <h1 className=" text-2xl text-start text-purple-500">
          Register your account
        </h1>
        <p className="">Join with us and start your account</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" lg:grid flex flex-col lg:grid-cols-2 grid-cols-1 gap-2 lg:w-2/3 w-full z-10 mx-6"
      >
        <div>
          <Input
            type="text"
            color="secondary"
            isRequired
            name="fullName"
            label="Enter your full name"
            autoComplete="off"
          />
        </div>

        <div>
          <Input
            type="text"
            color="secondary"
            label="Enter your mobile Number"
            isRequired
            autoComplete="off"
            name="mobileNumber"
          />
        </div>
        <div>
          <Input
            color="secondary"
            type="email"
            label="Enter your email"
            isRequired
            name="email"
            autoComplete="off"
          />
        </div>
        <div>
          <Input
            color="secondary"
            type="string"
            label="Enter your NID"
            isRequired
            name="nid"
            autoComplete="off"
          />
        </div>
        <div>
          <Select
            color="secondary"
            label="Select Account type"
            isRequired
            name="accountType"
            onChange={(e) => setAccountType(e.target.value)}
          >
            <SelectItem key={"user"} value="user">
              User
            </SelectItem>
            <SelectItem key={"agent"} value="agent">
              Agent
            </SelectItem>
          </Select>
        </div>
        <div>
          <Input
            label="Enter your password"
            color="secondary"
            isRequired
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={
              password?.length === 0
                ? false
                : password?.length === 5
                ? false
                : true
            }
            value={password}
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
        </div>

        <div className="lg:flex justify-between  mt-2 items-center col-span-2">
          <p>
            Already have an account ?{" "}
            <Link to={"/login"} className="text-purple-500 cursor-pointer">
              Login
            </Link>
          </p>
          <input
            type="submit"
            className="px-5 py-3 bg-purple-500 text-white rounded-lg cursor-pointer"
            value={"Register"}
          />
        </div>
      </form>
      <img
        src="/src/assets/bg.png"
        alt=""
        className="absolute bottom-0 w-screen opacity-60 h-[50vh]  z-0 "
      />
    </div>
  );
}
