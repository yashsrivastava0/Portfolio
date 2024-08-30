import React from "react";

import html from "/html.png";
import css from "/css.jpg";
import javascript from "/javascript.png";
import reactjs from "/reactjs.png";
import node from "/node sf.png";
import mongo from "/mongodb.jpg";
import py from "/python.webp";
import Linux from "/linux.jpg";
import tail from "/tail.png";
import goo from "/goo.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 3, logo: reactjs, name: "React" },
    { id: 10, logo: tail, name: "Tailwind" },
    { id: 5, logo: node, name: "NodeJs" },
    { id: 6, logo: mongo, name: "MongoDB" },
    { id: 7, logo: py, name: "Python" },
    { id: 8, logo: Linux, name: "Linux" },
    { id: 9, logo: goo, name: "GoLang" },
  ];

  return (
    <div
      id="experience" // Added id for scrolling
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-5">Experience</h1>
        <p className="text-lg text-gray-700 mb-8">
          I have experience in the following technologies:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-lg shadow-lg p-5 hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] object-cover rounded-full mb-4"
                alt={`${name} logo`}
              />
              <div className="text-center">
                <div className="text-xl font-semibold">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
