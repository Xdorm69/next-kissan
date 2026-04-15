import { User } from "@/constants/data";

//implementing binary search to get the location of next entry in my local db
export function getEntryPosition(data: User[], id: number): number {
  let st = 0,
    end = data.length - 1;
  while (st <= end) {
    let mid = st + Math.floor((end - st) / 2);
    if (data[mid].id === id) {
      return mid;
    } else if (data[mid].id < id) {
      st = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return st;
}

export const binarySearch = (data: User[], id: number): User | undefined => {
  const pos = getEntryPosition(data, id);

  if (pos < data.length && data[pos].id === id) {
    return data[pos];
  }

  return undefined;
};
