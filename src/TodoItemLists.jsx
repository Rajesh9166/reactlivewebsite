import React from "react";

const TodoItemLists = (prose) => {
  return (
    <>
      <div className="todo_style">
        <i
          className="fa fa-times"
          onClick={() => {
            prose.onSelect(prose.id);
          }}
        ></i>
        <li>{prose.name}</li>
      </div>
    </>
  );
};
export default TodoItemLists;
