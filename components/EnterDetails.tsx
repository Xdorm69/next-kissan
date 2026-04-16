"use client";

import { data, User } from "@/constants/data";
import { FormEvent, useState } from "react";
import Hero from "./pages/Hero";

const placeholders: User = {
  id: 0,
  image: "/users/fallback.png",
  role: "member",
  username: "Bob Singh",
  email: "bob@gmail.com",
  mobile: "8899000555",
  address: {
    line1: "G214, Victoria, Zirakpur",
    line2: "Zirakpur, Punjab - 140603",
  },
};

export const EnterDetails = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [user, setUser] = useState<User>({
    id: Number(data[data.length - 1].id) + 1,
    username: "",
    email: "",
    role: "member",
    mobile: "",
    address: {
      line1: "",
      line2: "",
    },
    image: "/users/fallback.png",
  });

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //add basic validations
    setSubmit(true);
  };

  if (submit) {
    return <Hero user={user} />;
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <form
        className="bg-gray-100 shadow rounded px-6 py-4 flex flex-col gap-2"
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <h1 className="text-2xl font-semibold">Enter User Details</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            placeholder={placeholders.username}
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder={placeholders.email}
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mobile">Mobile</label>
          <input
            name="mobile"
            type="text"
            placeholder={placeholders.mobile}
            value={user.mobile}
            onChange={(e) => setUser({ ...user, mobile: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder={placeholders.address.line1}
            value={user.address.line1}
            onChange={(e) =>
              setUser({
                ...user,
                address: { ...user.address, line1: e.target.value },
              })
            }
          />
          <input
            type="text"
            placeholder={placeholders.address.line2}
            value={user.address.line2}
            onChange={(e) =>
              setUser({
                ...user,
                address: { ...user.address, line2: e.target.value },
              })
            }
          />
        </div>

        <button type="submit" className="mt-4 w-full btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
