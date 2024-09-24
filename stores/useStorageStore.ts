import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "@/types/user";

type Nullable<T> = T | null;

interface StorageStateType {
  userType: Nullable<"Member" | "Trainer">;
  setUserType: (userType: UserType) => void;
}

export const useStorageStore = create<StorageStateType>()(
  persist(
    (set) => ({
      userType: null,
      setUserType: (userType: "Member" | "Trainer") =>
        set({ userType: userType }),
    }),
    {
      name: "UserType",
    },
  ),
);
