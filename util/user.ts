import { User } from "@/constants/data";
import { binarySearch } from "./db";

export const getUser = (data: User[], id: number): User | undefined => {
  return binarySearch(data, id);
};

export const capitalize = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
