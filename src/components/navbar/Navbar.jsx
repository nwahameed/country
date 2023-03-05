import { useState } from "react";
import React from "react";
import "../../App.css";
import Button from "../button/Button";
import { navbar } from "../../navbar";
import logo from "../../img/logo.png";

const ListItem = ({ title }) => {
  return (
    <li>
      <a href="/Home">{title}</a>
    </li>
  );
};

function Navbar() {
  // let isLoggedIn = true;
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleClick = () => {
    // alert("Hi");
    setisLoggedIn(!isLoggedIn);
  };
  return (
    <div className="App">
      <div className="containerNav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="navbar">
          <ul>
            {/* <ListItem title={navbar[0].title} />
            <ListItem title={navbar[1].title} />
            <ListItem title={navbar[2].title} />
            <ListItem title={navbar[3].title} /> */}
            {navbar.map((nav) => (
              <ListItem {...nav} />
            ))}
            <li>
              <Button
                text={isLoggedIn ? "Logout" : "Login"}
                color={isLoggedIn ? "blue" : "green"}
                handleClick={handleClick}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
