import { User } from "@/constants/data";
import { capitalize } from "@/util/user";
import UserCard from "../UserCard";

const Hero = ({ user }: { user: User }) => {
  return (
    <section className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <div className="bg-blue-400 text-white px-6 py-6 rounded-b-3xl h-34 absolute top-0 left-0 w-full z-0" />
      <div className="absolute z-1 top-0 left-0 w-full py-8 px-6">
        <header className="text-2xl font-semibold text-background">
          {capitalize(user.role)} Information
        </header>

        {/* Content */}
        <div className="mt-6">
          <UserCard user={user} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
