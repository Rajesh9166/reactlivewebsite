import React, { useState } from "react";
const App = () => {
  //   const [name, setName] = useState();
  //   const [lname, setlName] = useState();
  //   const [fullName, setFullName] = useState();
  //   const inputEvent = (event) => {
  //     console.log(event.target.value);
  //     setName(event.target.value);
  //   };
  //   const inputEventTwo = (event) => {
  //     console.log(event.target.value);
  //     setlName(event.target.value);
  //   };
  //   const formSubmit = (event) => {
  //     event.preventDefault();
  //     setFullName(name + " " + lname);
  //   };

  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });
  const inputEvent = (event) => {
    //'const value = event.target.value;
    //const name = event.target.name;
    const { name, value } = event.target;
    setFullName((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
      //   if (name === "fName") {
      //     return {
      //       fname: value,
      //       lname: preVal.lname,
      //     };
      //   } else if (name === "lName") {
      //     return {
      //       fname: preVal.fname,
      //       lname: value,
      //     };
      //   }
    });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    // setFullName(name + " " + lname);
  };
  return (
    <>
      <div>
        <h1>
          Hello {fullName.fname} {fullName.lname}
        </h1>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />

          <input
            type="text"
            placeholder="Enter your last name"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <button type="submit">Click Me 👍</button>
        </form>
      </div>
    </>
  );

  // return <>
  //     <div style={{backgroundColor:"Red"}}>
  //         <button>Change BG color</button>
  //     </div>
  //     </>

  // let time = new Date().toLocaleTimeString();
  // const [ctime,setCtime] = useState(time);

  // const UpdateTime = () => {
  //     time = new Date().toLocaleTimeString();
  //     setCtime(time);
  // }
  // setTimeout(UpdateTime,1000);
  //  return  <h1>{ctime} 😄</h1>
  // }
};
export default App;
