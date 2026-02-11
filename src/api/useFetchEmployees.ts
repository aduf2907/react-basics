import { useState } from "react";
import { axiosInstance } from "../lib/axios";

type EmployeeResponse = {
  id: string;
  name: string;
};

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");

  const fetchEmployees = async () => {
    try {
      setEmployeesIsLoading(true); // toggle mode loading on

      const response =
        await axiosInstance.get<EmployeeResponse[]>("/employees");

      setEmployees(response.data);
    } catch (error) {
      setEmployeesError((error as TypeError).message);
      alert("Gagal mendapatkan data employee");
    } finally {
      setEmployeesIsLoading(false); // toggle mode loading off
    }
  };

  return {
    fetchEmployees,
    employeesIsLoading,
    employeesError,
    employees,
  };
};
