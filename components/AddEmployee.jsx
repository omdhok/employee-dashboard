import { useState } from "react";

function AddEmployee({ addEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Fill all fields");
      return;
    }

    addEmployee({
      id: Date.now(),
      name,
      email,
    });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">

      <input
        type="text"
        placeholder="Employee Name"
        className="form-control mb-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Employee Email"
        className="form-control mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="btn btn-primary">
        Add Employee
      </button>

    </form>
  );
}

export default AddEmployee;