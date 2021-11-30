import React, { useState } from "react";
import Sresult from "./Sresult";
const Search = () => {
  document.title = `Search`;
  const [img, setImg] = useState("");
  const ImputEvent = (evt) => {
    evt != "" ? setImg(evt.target.value) : setImg("");
  };
  return (
    <>
      <h1>What is Search</h1>
      <input type="text" value={img} onChange={ImputEvent} />
      {img !== "" ? <Sresult imageName={img} /> : null}
    </>
  );
};
export default Search;
