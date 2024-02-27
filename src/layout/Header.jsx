import { User } from "@nextui-org/react";

export default function Header() {
  return (
    <div className="bg-purple-50 px-3 py-3 rounded flex justify-between items-center sticky top-0 z-10">
      <h3 className="text-xl">Dashboard</h3>
      <User
        name="Abu Sani Faysal"
        description="User"
        avatarProps={{
          className: "bg-purple-500 text-white  text-lg font-bold",
        }}
      />
    </div>
  );
}
