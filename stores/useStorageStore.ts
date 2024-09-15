import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UserType } from "@/types/user";

interface StorageStateType {
  userType: string;
  setUserType: (userType: UserType) => void;
}

export const useStorageStore = create<StorageStateType>()(
  persist(
    (set) => ({
      userType: "",
      setUserType: (userType: "Member" | "Trainer") =>
        set({ userType: userType }),
    }),
    {
      name: "UserType",
    },
  ),
);
