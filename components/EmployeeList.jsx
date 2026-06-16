function EmployeeList({
  employees,
  deleteEmployee,
  editEmployee,
}) {
  return (
    <div>

      {employees.map((emp) => (
        <div
          key={emp.id}
          className="card p-3 mb-3 shadow"
        >
          <h5>{emp.name}</h5>

          <p>{emp.email}</p>

          <div>

            <button
              className="btn btn-warning me-2"
              onClick={() => editEmployee(emp.id)}
            >
              Edit
            </button>

            <button
              className="btn btn-danger"
              onClick={() => deleteEmployee(emp.id)}
            >
              Delete
            </button>

          </div>
        </div>
      ))}

    </div>
  );
}

export default EmployeeList;