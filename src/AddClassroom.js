import React, { useState } from "react";

function AddClassroom({ addClassroom }) {
  const [roomId, setRoomId] = useState("");
  const [capacity, setCapacity] = useState("");
  const [floorNo, setFloorNo] = useState("");
  const [nearWashroom, setNearWashroom] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRoom = {
      roomId,
      capacity: Number(capacity),
      floorNo: Number(floorNo),
      nearWashroom,
    };

    addClassroom(newRoom);

    setRoomId("");
    setCapacity("");
    setFloorNo("");
    setNearWashroom(false);
  };

  return (
    <div>
      <h3>Add Classroom</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Floor No"
          value={floorNo}
          onChange={(e) => setFloorNo(e.target.value)}
          required
        />
        <label>
          Near Washroom
          <input
            type="checkbox"
            checked={nearWashroom}
            onChange={(e) => setNearWashroom(e.target.checked)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddClassroom;