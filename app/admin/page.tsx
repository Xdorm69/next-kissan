"use client";
import { data } from "@/constants/data";
import { useState } from "react";
import toast from "react-hot-toast";

const AdminPage = () => {
  const [password, setPassword] = useState<string>("");
  const [admin, setAdmin] = useState<boolean>(false);

  const handlePasswordValidation = () => {
    if (password === "amitoj123") {
      setAdmin(true);
      toast.success("Validated successfully");
    } else {
      toast.error("Failed to validate");
    }
  };

  if (admin === false) {
    return (
      <div className="py-18 px-4 h-screen w-full">
        <input
          type="password"
          value={password}
          placeholder="enter password"
          className="bg-gray-200 rounded shadow px-2 py-1"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handlePasswordValidation}
          className="btn btn-primary ml-2"
        >
          Validate
        </button>
      </div>
    );
  } else {
    return (
      <section className="py-18 px-4 h-screen w-full">
        <h1>All available users</h1>
        <ul>
          {data.map(({ id }) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </section>
    );
  }
};

export default AdminPage;
