import { useFetchEmployees } from "../api/useFetchEmployees";

const EmployeesPage = () => {
  const { employees, employeesError, employeesIsLoading, fetchEmployees } =
    useFetchEmployees();

  return (
    <div>
      <h1>Ini halaman employees</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
              </tr>
            );
          })}
        </tbody>
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
