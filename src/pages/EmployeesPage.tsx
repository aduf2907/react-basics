import { useState } from "react";
import { useFetchEmployees } from "../api/useFetchEmployees";
import { useCreateEmployee } from "../api/useCreateEmployee";
import { useDeleteEmployee } from "../api/useDeleteEmployee";

const EmployeesPage = () => {
  const [inputText, setInputText] = useState("");

  const { employees, employeesError, employeesIsLoading, fetchEmployees } =
    useFetchEmployees();
  const { createEmployeeError, createEmployeeIsLoading, createEmployee } =
    useCreateEmployee();
  const { deleteEmployee, deleteEmployeeError, deleteEmployeeIsLoading } =
    useDeleteEmployee();

  const handleCreateEmployee = async () => {
    await createEmployee(inputText);
    await fetchEmployees();
    setInputText("");
  };

  const handleDeleteEmployee = async (employeeId: string) => {
    await deleteEmployee(employeeId);
    await fetchEmployees();
  };

  return (
    <div>
      <h1>Ini halaman employees</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>
                  <button onClick={() => handleDeleteEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <input
                onChange={(e) => setInputText(e.target.value)}
                type="text"
                value={inputText}
              />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button onClick={handleCreateEmployee}>Create Employee</button>
            </td>
          </tr>
          {createEmployeeError && (
            <tr>
              <td colSpan={2}>{createEmployeeError}</td>
            </tr>
          )}
        </tfoot>
      </table>

      <button disabled={employeesIsLoading} onClick={fetchEmployees}>
        Fetch Employees
      </button>
      {employeesIsLoading && <p>Loading...</p>}
      {employeesError && <p style={{ color: "red" }}>{employeesError}</p>}

      {/* employeesIsLoading ? <p>Loading...</p> : null */}
    </div>
  );
};

export default EmployeesPage;
