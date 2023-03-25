import { useEffect, useState } from "react";
import { axiosApp } from "utils/axios";
import Cookies from "js-cookie";

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
}

export interface IAuth {
  username: string;
  password: string;
}

export type IResponse = {
  limit: number;
  skip: number;
  total: number;
  users: IUser[];
};

export enum STATUS {
  idle = "idle",
  loading = "loading",
  success = "success",
  error = "error",
}
const useFetchUser = (params: string) => {
  const [data, setData] = useState<IResponse>({
    limit: 0,
    skip: 0,
    total: 0,
    users: [],
  });
  const [status, setStatus] = useState<STATUS>(STATUS.idle);

  const fetchUser = async (params: string) => {
    setStatus(STATUS.loading);
    try {
      const response = await axiosApp.get(`/users/${params}`);

      if (response.status === 200) {
        setStatus(STATUS.success);
        setData(response.data);
      } else {
        setStatus(STATUS.error);
      }
    } catch (err) {
      setStatus(STATUS.error);
    }
  };

  useEffect(() => {
    fetchUser(params);
  }, [params]);

  return { data, status };
};

const userUserMutation = () => {
  const [status, setStatus] = useState<STATUS>(STATUS.idle);

  const saveUser = async (payload: IUser) => {
    setStatus(STATUS.loading);
    try {
      const response = await axiosApp.post("/users/add", payload);
      if (response.status === 200) {
        setStatus(STATUS.success);
      } else {
        setStatus(STATUS.error);
      }
    } catch (err) {
      setStatus(STATUS.error);
    }
  };
  const updateUser = async (payload: IUser, id: number) => {
    setStatus(STATUS.loading);
    try {
      const response = await axiosApp.put(`/users/${id}`, payload);
      if (response.status === 200) {
        setStatus(STATUS.success);
      } else {
        setStatus(STATUS.error);
      }
    } catch (err) {
      setStatus(STATUS.error);
    }
  };

  const deleteUser = async (id?: number) => {
    setStatus(STATUS.loading);
    try {
      const response = await axiosApp.delete(`/users/${id}`);
      if (response.status === 200) {
        setStatus(STATUS.success);
      } else {
        setStatus(STATUS.error);
      }
    } catch (err) {
      setStatus(STATUS.error);
    }
  };

  return { saveUser, deleteUser, updateUser, status, setStatus };
};

const usersLogin = () => {
  const [status, setStatus] = useState<STATUS>(STATUS.idle);

  const login = async (payload: IAuth, cb: () => void) => {
    setStatus(STATUS.loading);
    try {
      const response = await axiosApp.post(`/auth/login`, payload);
      if (response.status === 200) {
        Cookies.set("userLogin", JSON.stringify(response.data));
        setStatus(STATUS.success);
        cb();
      } else {
        setStatus(STATUS.error);
      }
    } catch (err) {
      setStatus(STATUS.error);
    }
  };

  const logout = (cb: () => void) => {
    Cookies.remove("userLogin");
    cb();
  };

  return { login, status, logout };
};

export { useFetchUser, userUserMutation, usersLogin };
