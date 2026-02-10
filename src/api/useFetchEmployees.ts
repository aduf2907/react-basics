import { useState } from "react";
import axios from "axios";

type EmployeeResponse = {
  id: number;
  name: string;
};

export const useFetchEmployees = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [employeesIsLoading, setEmployeesIsLoading] = useState(false);
  const [employeesError, setEmployeesError] = useState("");

  const fetchEmployees = async () => {
    try {
      setEmployeesIsLoading(true); // toggle mode loading on

      const response = await axios.get<EmployeeResponse[]>(
        "http://localhost:2000/employees",
      );

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
