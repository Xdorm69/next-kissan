import { data } from "@/constants/data";

const AdminPage = () => {
  const al = alert("Enter admin password");
  if (al != process.env.ADMIN_PASS) return (window.location.href = "/");
  return (
    <section className="py-6 px-4 h-screen w-full">
      <h1>All available users</h1>
      <ul>
        {data.map(({ id }) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </section>
  );
};

export default AdminPage;
