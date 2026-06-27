import React, { useState } from "react";
import AddsToDoForm from "./AddsToDoForm";
import ToDoList from "./ToDoList";

const ToDOContainer = () => {
  const [activityArr, setActivityArr] = useState([
    {
      id: 1,
      activity: "Walking",
    },

    {
      id: 2,
      activity: "Have a Breakfast",
    },
  ]);
  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <AddsToDoForm
          activityArr={activityArr}
          setActivityArr={setActivityArr}
        />
        {/* TO DO LISTE : */}
        <ToDoList activityArr={activityArr} setActivityArr={setActivityArr} />
      </div>
    </div>
  );
};

export default ToDOContainer;
