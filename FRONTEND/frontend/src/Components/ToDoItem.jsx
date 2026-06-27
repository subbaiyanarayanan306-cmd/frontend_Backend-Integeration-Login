import React from "react";

const ToDoItem = (props) => {
  const activityArr = props.activityArr;
  const setActivityArr = props.setActivityArr;

  function handledelete() {
    var referenarr = activityArr.filter(function (item) {
      if (item.id == props.id) {
        return false;
      } else {
        return true;
      }
    });
    setActivityArr(referenarr);
  }
  return (
    <div className="flex justify-between">
      <p>
        {props.index + 1} {props.item.activity}
      </p>
      <button
        onClick={() => {
          handledelete(props.id);
        }}
        className="text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default ToDoItem;
