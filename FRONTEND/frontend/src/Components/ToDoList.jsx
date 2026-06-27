import React, { act, useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const activityArr = props.activityArr;
  const setActivityArr = props.setActivityArr;
  //   const [activityArr, setActivityArr] = useState([
  //     {
  //       id: 1,
  //       activity: "Walking",
  //     },

  //     {
  //         id:2,
  //         activity:"Have a Breakfast"
  //     }
  //   ]);
  return (
    <div className="bg-[#DBD4EA] flex-grow p-3 rounded">
      <h1 className="font-medium text-2x1">Today's Activity</h1>
      {activityArr.length == 0 ? <p>You haven't added any activity yet</p> : ""}

      {activityArr.map(function (item, index) {
        return (
          <ToDoItem
            item={item}
            index={index}
            id={item.id}
            activityArr={activityArr}
            setActivityArr={setActivityArr}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
