import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);//if the ls was empty it sets dark as deafult
  const [mode, setMode] = useState((localStorage.getItem("currentMode")?? "dark"));

  useEffect(() => {
   if(mode==="light"){
    document.body.classList.remove("dark")
    document.body.classList.add("light")
  }else{
    document.body.classList.remove("light")
    document.body.classList.add("dark")
  }
  }, [mode]);

  return (
    <header className=" flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setshowMenu(true);
        }}
      ></button>
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode" onClick={() => { 
       // send value to ls
       localStorage.setItem("currentMode",mode==="dark"?"light":"dark")
       //get  value from ls
       setMode(localStorage.getItem("currentMode"))

       }}>
        {mode==="dark"?(<span className="icon-moon-o"></span>):(<span className="icon-sun"></span>)}
   
      </button>

      {showMenu && (
        <div className="fixed">
          <ul className="menu-box ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowMenu(false);
                }}
              />
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Projects">Projects</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
