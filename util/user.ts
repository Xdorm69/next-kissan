import { data, User } from "@/constants/data";

export const getUser = (id: number): User | undefined => {
  return data.find((user) => user.id === id);
};

export const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
