import React, { useState } from "react";
import AddClassroom from "./AddClassroom";
import ClassroomList from "./ClassroomList";
import AllocateExam from "./AllocateExam";
import "./App.css";

function App() {
  const [classrooms, setClassrooms] = useState([]);
  const [allocated, setAllocated] = useState([]);
  const [message, setMessage] = useState("");

  const addClassroom = (room) => {
    setClassrooms([...classrooms, room]);
  };

  const allocateRooms = (totalStudents) => {
    let sorted = [...classrooms].sort((a, b) => {
      if (a.floorNo !== b.floorNo) {
        return a.floorNo - b.floorNo;
      }
      return b.capacity - a.capacity;
    });

    let selected = [];
    let total = 0;

    for (let room of sorted) {
      if (total >= totalStudents) break;
      selected.push(room);
      total += room.capacity;
    }

    if (total < totalStudents) {
      setMessage("Not enough seats available");
      setAllocated([]);
    } else {
      setAllocated(selected);
      setMessage("");
    }
  };

  return (
    <div className="container">
      <h1>College Exam Seat Planner</h1>

      <AddClassroom addClassroom={addClassroom} />
      <ClassroomList classrooms={classrooms} />
      <AllocateExam allocateRooms={allocateRooms} />

      {message && <p className="error">{message}</p>}

      {allocated.length > 0 && (
        <div className="result">
          <h3>Allocated Classrooms:</h3>
          {allocated.map((room, index) => (
            <p key={index}>
              {room.roomId} - Floor {room.floorNo} - Capacity {room.capacity}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;