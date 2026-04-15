import { User } from "@/constants/data";
import Image from "next/image";

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="bg-white text-gray-800 p-5 rounded-xl shadow-sm border flex items-center justify-between">
      {/* LEFT CONTENT */}
      <div className="space-y-1">
        <div className="text-xl font-semibold items-center flex gap-2 ">
          {user.username}{" "}
          <i className="bg-blue-500 rounded-full p-1 text-xs -mt-1 scale-80">✔️</i>
        </div>
        <p className="text-sm text-gray-500 capitalize">{user.role}</p>

        <div className="mt-3 space-y-1 text-sm">
          <p className="text-blue-500">📞 {user.mobile}</p>
          <p>✉️ {user.email}</p>
          <p>
            🌐 {user.address.line1}, {user.address.line2}
          </p>
        </div>
      </div>

      {/* RIGHT AVATAR */}
      <div className="w-32 h-28 shadow rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-lg font-bold">
        <Image
          src={user.image}
          alt="user"
          priority
          width={50}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default UserCard;
