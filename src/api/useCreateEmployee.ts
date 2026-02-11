import { useState } from "react";
import { axiosInstance } from "../lib/axios";

export const useCreateEmployee = () => {
  const [createEmployeeIsLoading, setCreateEmployeeIsLoading] = useState(false);
  const [createEmployeeError, setCreateEmployeeError] = useState("");

  const createEmployee = async (payload: string) => {
    setCreateEmployeeIsLoading(true);
    try {
      await axiosInstance.post("/employees", {
        name: payload,
      });
    } catch (error) {
      setCreateEmployeeError((error as TypeError).message);
    } finally {
      setCreateEmployeeIsLoading(false);
    }
  };
  return {
    createEmployeeError,
    createEmployeeIsLoading,
    createEmployee,
  };
};
