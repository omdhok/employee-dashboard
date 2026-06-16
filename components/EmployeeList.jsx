import { useEffect, useState } from "react";
import axios from "axios";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setEmployees(res.data));
  }, []);

  return (
    <>
      <h2>Employee List</h2>

      {employees.map((emp) => (
        <div key={emp.id}>
          <h4>{emp.name}</h4>
          <p>{emp.email}</p>
        </div>
      ))}
    </>
  );
}

export default EmployeeList;