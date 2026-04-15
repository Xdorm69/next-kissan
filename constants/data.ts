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

export const data: User[] = [
  {
    id: 2584,
    username: "Amitoj Singh",
    email: "amitoj@gmail.com",
    role: "member",
    image: "/users/fallback.png",
    mobile: "9988066606",
    address: {
      line1: "G-204 Victoria Heights Zirakpur, Punjab",
      line2: "Zirakpur, Punjab - 140603",
    },
  },
];
