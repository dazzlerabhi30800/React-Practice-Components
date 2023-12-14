import { useState } from "react";
import "./App.css";
import data from "./Links";

function App() {
  const [linkData, setLinkData] = useState(data);

  const handleMouseEnter = (e, link) => {
    e.preventDefault();
    console.log(this);
    console.log(e.currentTarget);
    const links = document.querySelector(`#${link}`);
    const dropdown = links.querySelector(".dropdown");
    const nav = document.querySelector("nav");
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const dropdownBackground = document.querySelector(".dropBackground");

    const { width, height, left, top } = {
      width: dropdownCoords.width,
      height: dropdownCoords.height,
      left: dropdownCoords.left - navCoords.left,
      top: dropdownCoords.top - navCoords.top,
    };

    dropdownBackground.classList.add("open");
    dropdownBackground.style.setProperty("width", `${width}px`);
    dropdownBackground.style.setProperty("height", `${height}px`);
    dropdownBackground.style.setProperty(
      "transform",
      `translate(${left}px, ${top}px)`
    );

    setLinkData(
      linkData.map((item) => {
        if (item.link === link) {
          return { ...item, active: true };
        }
        return item;
      })
    );
  };

  const handleMouseLeave = (e, link) => {
    const dropdownBackground = document.querySelector(".dropBackground");
    dropdownBackground.classList.remove("open");
    setLinkData(
      linkData.map((item) => {
        if (item.link === link) {
          return { ...item, active: false };
        }
        return item;
      })
    );
  };

  return (
    <>
      <div className="dropBackground"></div>
      <nav>
        <ul>
          {linkData.map(({ link, dropdown, active }, index) => (
            <li
              id={link}
              onMouseEnter={(e) => handleMouseEnter(e, link)}
              onMouseLeave={(e) => handleMouseLeave(e, link)}
              key={index}
            >
              <a
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
                href="#"
              >
                {link}
                <i
                  className={`fas fa-chevron-down ${active ? "rotate" : ""}`}
                ></i>
              </a>
              <div className={`dropdown ${active ? "active" : ""}`}>
                {dropdown.map((link, index) => (
                  <span key={index}>{link}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default App;
