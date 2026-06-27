import React, {useState } from "react";

const AddsToDoForm = (props) => {
  const activityArr = props.activityArr;
  const setActivityArr = props.setActivityArr;
  const [input, setInput] = useState("");

  function handchange(e) {
    setInput(e.target.value);
  }

  function clickAdd() {
    if (input === "") {
      alert("INPUT CAN'T BE EMPTY");
      return;
    }
    setActivityArr([
      ...activityArr,
      { id: activityArr.length + 1, activity: input },
    ]);
    setInput("");
  }
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-medium text-2xl">Manage Activities</h1>
      <div>
        <input
          value={input}
          onChange={handchange}
          type="text"
          className="border border-black rounded bg-transparent p-1"
          placeholder="Next Activity ?"
        />
        <button
          onClick={clickAdd}
          className="bg-black text-white p-1 rounded border-black"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddsToDoForm;
