import { Outlet } from "react-router-dom";
import Header from "./Header";
import SidebarOptions from "./SidebarOptions";

export default function Layout() {
  return (
    <div className="grid grid-cols-6 ">
      <div className="h-screen  bg-purple-950  py-5 px-3 col-span-1 text-white">
        <SidebarOptions />
      </div>
      <div className="h-screen col-span-5 mx-2">
        <Header />
        <div className="m-2  min-h-[80vh] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
