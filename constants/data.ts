import { getEntryPosition } from "@/util/db";

export type User = {
  id: number;
  username: string;
  email: string;
  role: string;
  mobile: string;
  image: string;
  address: {
    line1: string;
    line2: string;
  };
};

//when entering a new user use binary search to find the correct position and insert it there
//util/db.ts getEntryPosition();
//run tsx constants/data.ts

export const data: User[] = [
  {
    id: 2584,
    username: "User 1",
    email: "biyy@gmail.com",
    role: "member",
    image: "/users/fallback.png",
    mobile: "0088008899",
    address: {
      line1: "504 Zirakpur, Punjab",
      line2: "Zirakpur, Punjab - 140603",
    },
  },
];

