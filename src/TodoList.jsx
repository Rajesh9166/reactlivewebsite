import React from "react";
import { useState } from "react/cjs/react.development";
import TodoItemLists from "./TodoItemLists";

const List = () => {
  const [inputList, setInputList] = useState("");
  const [Lists, setLists] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
    console.log(event.target.value);
  };
  const listOfItems = () => {
    if (inputList != "") {
      setLists((oldval) => {
        return [...oldval, inputList];
      });
      setInputList("");
    }
  };
  const deleteItems = (id) => {
    console.log("deleted");
    console.log(id);
    setLists((oldval) => {
      return oldval.filter((Element, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {Lists.map((itemval, index) => {
              return (
                <TodoItemLists
                  id={index}
                  key={index}
                  name={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default List;
