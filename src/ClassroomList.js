import React from "react";

function ClassroomList({ classrooms }) {
  return (
    <div>
      <h3>All Classrooms</h3>
      {classrooms.length === 0 ? (
        <p>No classrooms added yet.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Room ID</th>
              <th>Capacity</th>
              <th>Floor</th>
              <th>Near Washroom</th>
            </tr>
          </thead>
          <tbody>
            {classrooms.map((room, index) => (
              <tr key={index}>
                <td>{room.roomId}</td>
                <td>{room.capacity}</td>
                <td>{room.floorNo}</td>
                <td>{room.nearWashroom ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ClassroomList;
