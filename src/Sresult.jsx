import React from "react";
const Sresult = (props) => {
  document.title = `Sresult`;
  console.log(props.imageName);
  const imgLink = `https://source.unsplash.com/400x300/?${props.imageName}`;
  console.log(imgLink);
  return (
    <>
      <div>
        <img src={imgLink} alt="Demo" />
      </div>
    </>
  );
};
export default Sresult;
