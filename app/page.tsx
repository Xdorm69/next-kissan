import { EnterDetails } from "@/components/EnterDetails";
import Hero from "@/components/pages/Hero";
import UserCard from "@/components/UserCard";
import { data } from "@/constants/data";
import { capitalize, getUser } from "@/util/user";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) => {
  const params = await searchParams;
  const id = params.id;

  const user = getUser(data, Number(id));
  if (!user) return <EnterDetails />;

  return (
    <main>
      <Hero user={user} />
    </main>
  );
};

export default page;
