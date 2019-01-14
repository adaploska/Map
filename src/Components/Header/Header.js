import React, { Component } from "react";


const Header = (props) => {
  const style = {
    backgroundColor: "#bfb7b7",
    width: "100%",
    height: "40px",
    float: "rigth"
  }

  return (
    <div style={style}> Travel Steps
      <button onClick={props.click}>zaloguj się</button>
    </div>
  )
}
export default Header;


