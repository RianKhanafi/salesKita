import { useEffect, useState } from "react";
import { ISeries } from "components/atoms/lineChart";
import { number } from "yup";

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

export interface ITarget {
  sold: number;
  productTotal: number;
  customer: number;
}
const useFetchDashboard = () => {
  const [data, setData] = useState<ISeries[]>([]);
  const [status, setStatus] = useState<STATUS>(STATUS.idle);

  const fetchDashboard = () => {
    return new Promise<{ status: number; data: ISeries[] }>((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: [
            {
              name: "series-1",
              data: [10, 20, 22, 50, 20, 30],
            },
            {
              name: "series-1",
              data: [20, 17, 10, 30, 18, 40],
            },
          ],
        });
      }, 3000); // Simulate a delay of 3 seconds
    });
  };

  const fetchSeries = async () => {
    setStatus(STATUS.loading);
    try {
      const response = await fetchDashboard();

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
    fetchSeries();
  }, []);

  return { data, status };
};

const useFetchTarget = () => {
  const [data, setData] = useState<ITarget>({
    sold: 0,
    productTotal: 0,
    customer: 0,
  });
  const [status, setStatus] = useState<STATUS>(STATUS.idle);

  const fetchDashboard = () => {
    return new Promise<{ status: number; data: ITarget }>((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: {
            sold: 130,
            productTotal: 20,
            customer: 30,
          },
        });
      }, 3000); // Simulate a delay of 3 seconds
    });
  };

  const fetchTarget = async () => {
    setStatus(STATUS.loading);
    try {
      const response = await fetchDashboard();

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
    fetchTarget();
  }, []);

  return { data, status };
};

export { useFetchDashboard, useFetchTarget };
