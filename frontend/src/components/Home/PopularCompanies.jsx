import React from "react";
import { FaMicrosoft, FaApple, FaFacebook, FaAmazon, FaGoogle } from "react-icons/fa";
import { SiNetflix, SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Google",
      company: "Hyderabad, India",
      openPositions: 1,
      icon: <FaGoogle />,
    },
    {
      id: 2,
      title: "Microsoft",
      company: "Bangalore, India",
      openPositions: 2,
      icon: <FaMicrosoft />,
    },
    {
      id: 3,
      title: "Facebook",
      company: "Hyderabad, India",
      openPositions: 5,
      icon: <FaFacebook />,
    },
    {
      id: 4,
      title: "Apple",
      company: "Bangalore, India",
      openPositions: 2,
      icon: <FaApple />,
    },
    {
      id: 5,
      title: "Amazon",
      company: "Noida, India",
      openPositions: 10,
      icon: <FaAmazon />,
    },
    {
      id: 6,
      title: "Netflix",
      company: "Mumbai, India",
      openPositions: 6,
      icon: <SiNetflix />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>Top Companies</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.company}</p>
                  </div>
                </div>
                <button>Open Positions: {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
