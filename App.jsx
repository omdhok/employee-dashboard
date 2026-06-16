import { useEffect, useState } from "react";
import axios from "axios";

import AddEmployee from "./components/AddEmployee";
import SearchBar from "./components/SearchBar";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setEmployees(res.data));
  }, []);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const editEmployee = (id) => {
    const newName = prompt("Enter New Employee Name");

    if (!newName) return;

    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, name: newName } : emp
      )
    );
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">

      <h1 className="text-center mb-4">
        Employee Management Dashboard
      </h1>

      <h4>Total Employees : {filteredEmployees.length}</h4>

      <SearchBar setSearch={setSearch} />

      <AddEmployee addEmployee={addEmployee} />

      <EmployeeList
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
        editEmployee={editEmployee}
      />

    </div>
  );
}

export default App;