import React from "react";
import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.jpg";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/webcx.png"; // Assuming this is the correct image

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "Gaming Library",
      description:
        "A portfolio of games like Snake, Tic Tac Toe, 2048, and Coin Toss with animations and high-score tracking.",
      videoLink: "https://www.youtube.com/watch?v=OG99xEnRPLA",
      sourceCodeLink: "https://github.com/yashsrivastava0/Gaming-library/tree/main/gamesss",
    },
    {
      id: 2,
      logo: express,
      name: "Telecom Bill",
      description:
        "Python script using BeautifulSoup to scrape e-commerce data and export it to Excel.",
      videoLink: "https://youtube.com/watch?v=zFBfLLGHZJs",
      sourceCodeLink: "https://github.com/yashsrivastava0/Web-Scraping-Project/tree/main/amazon",
    },
    {
      id: 3,
      logo: reactjs,
      name: "JS Portfolio",
      description:
        "A website showcasing your profile, built using HTML, CSS, and JavaScript.",
      videoLink: "https://www.youtube.com/watch?v=Yc1bngu8gy8",
      sourceCodeLink: "https://github.com/yashsrivastava0/Gaming-library/tree/main/gamesss/GAMING%20LIB",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      description: "A NodeJS project description placeholder.",
      videoLink: "https://youtube.com/watch?v=zFBfLLGHZJs",
      sourceCodeLink: "https://github.com/yashsrivastava0/Web-Scraping-Project/tree/main/amazon",
    },
  ];

  return (
    <div
      id="portfolio" // Added id for smooth scrolling
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, videoLink, sourceCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={`Logo of ${name}`}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                  aria-label={`Watch video for ${name}`}
                >
                  Video
                </a>
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  aria-label={`View source code for ${name}`}
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
