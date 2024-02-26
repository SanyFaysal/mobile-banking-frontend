import { User } from "@nextui-org/react";

export default function Header() {
  return (
    <div className="bg-purple-50 px-3 py-3 rounded flex justify-between items-center">
      <h3 className="text-xl">Dashboard</h3>
      <User
        name="Jane Doe"
        description="Product Designer"
        avatarProps={{
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
      />
    </div>
  );
}
