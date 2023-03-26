"use client";
import { IUser } from "module/users/hoox";
import React from "react";
export interface IContext {
  users: IUser | null;
  updateData: (e: IUser) => void;
}
export const ContextProvider = React.createContext<IContext>({
  users: null,
  updateData: () => {},
});
