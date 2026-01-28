import { FaUser } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import UserData from "../molecules/user-data";

export default function UserStatistics() {
  return (
    <>
      <main className="bg-white rounded-3xl px-6 py-8 flex flex-row gap-8">
        <UserData label="Account Created" value={2026} icon={FaUser} />
        <div className="w-px h-full bg-gray-300" />
        <UserData
          label="Saved Establishments"
          value={3}
          icon={MdOutlineRestaurantMenu}
        />
        <div className="w-px h-full bg-gray-300" />
        <UserData label="Created Reviews" value={20} icon={FaStar} />
      </main>
    </>
  );
}
