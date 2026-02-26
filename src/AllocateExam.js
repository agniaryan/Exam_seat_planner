import React, { useState } from "react";

function AllocateExam({ allocateRooms }) {
  const [students, setStudents] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    allocateRooms(Number(students));
    setStudents("");
  };

  return (
    <div>
      <h3>Allocate Exam Seats</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Total Students"
          value={students}
          onChange={(e) => setStudents(e.target.value)}
          required
        />
        <button type="submit">Allocate</button>
      </form>
    </div>
  );
}

export default AllocateExam;