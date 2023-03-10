import React from "react";
import blogger from "../assets/portfolio/blogger.PNG";
import cryptoTracker from "../assets/portfolio/crypto.PNG";
import ecommerce from "../assets/portfolio/ecommerce-temp.PNG";
import zipper from "../assets/portfolio/zipper.PNG";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: zipper,
      demo: "https://zipper-mern.herokuapp.com/",
      github: "https://github.com/JayPatel2728/Zipper---Notes-App"
    },
    {
      id: 2,
      src: cryptoTracker,
      demo:"https://crypto-coinmarket.netlify.app",
      github: "https://github.com/JayPatel2728/Crypto-App"
    },
    {
      id: 3,
      src: blogger,
      demo: "https://github.com/JayPatel2728/Blogger.io",
      github: "https://github.com/JayPatel2728/Blogger.io",
    },
    {
      id: 4,
      src: ecommerce,
      demo:"https://github.com/JayPatel2728/OOP-Java-Eccomerce-Store",
      github: "https://github.com/JayPatel2728/OOP-Java-Eccomerce-Store",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, github}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                    </button>
                </a>
                <a href={github}>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Github
                    </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;