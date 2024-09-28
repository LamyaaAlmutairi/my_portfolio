import React, { useState } from "react";
import "./projects.css";

const myProjects = [
  {
    projectTitle: "Health website",
    projectNum: "1",
    category: "html&css",
    imgPath: "../public/images/project1.png",
    decription: " health and wellness website designed to provide users with valuable information and tools to maintain a healthy lifestyle",
  },
  {
    projectTitle: "Recipes book",
    projectNum: "2",
    category: "react",
    imgPath: "../public/images/recipeBook.png",
    decription: " React Native Expo application designed for users to explore a collection of recipes categorized by meal types such as breakfast, lunch, dinner, and dessert.",
  },
];

const Main = () => {
  const [isActive, setisActive] = useState("all");

  const [arr, setarr] = useState(myProjects);
//??
  const handleClick = (btnCatgory) => {
    setisActive(btnCatgory);
    const htmlArry = myProjects.filter((item) => {
      return item.category === btnCatgory;
    });
    setarr(htmlArry);
  };

  return (
    <div className="projects-container flex ">
      <div className="filter flex ">
        <button
          className={isActive === "all" ? "active" : null}
          onClick={() => {
            setisActive("all");
            setarr(myProjects);
          }}
        >
          All Projects
        </button>
        <button
          className={isActive === "html&css" ? "active" : null}
          onClick={() => {
            handleClick("html&css");
          }}
        >
          HTML & CSS
        </button>
        {/* <button>JavaScript</button> */}
        <button
          className={isActive === "react" ? "active" : null}
          onClick={() => {
            {
              handleClick("react");
            }
          }}
        >
          {" "}
          React Native
        </button>
      </div>
      <div className="projects flex ">
        {arr.map((item) => {
          return (
            <article key={item.projectNum} className="card ">
              <img width={226} src={item.imgPath} alt=""></img>
              <div style={{ width: "226px" }} className="card-box ">
                <h1 className="card-title">{item.projectTitle}</h1>
                <p className="card-subtitle">
                {item.decription}
                </p>
                <div className="more-icons flex">
                  <div style={{ gap: "11px" }} className="flex">
                    <a>
                      <div className="more-icon icon-github"></div>
                    </a>
                    <a>
                      <div className="more-icon icon-link"></div>
                    </a>
                  </div>
                  <div style={{ gap: "6px" }} className="flex">
                    <a href="">more </a>
                    <div className="more-icon icon-arrow-right-circle"></div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
