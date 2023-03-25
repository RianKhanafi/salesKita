import { IUser } from "module/users/hoox";
import React from "react";

export const ContextProvider = React.createContext<{
  users: IUser | null;
  updateData: (e: IUser) => void;
}>({
  users: null,
  updateData: () => {},
});
