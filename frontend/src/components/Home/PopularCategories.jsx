import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaLaptop, FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Software Developer",
      subTitle: "1000+ Open Positions",
      icon: <FaLaptop/>,
    },
    {
      id: 2,
      title: "Full Stack Web Developer",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 3,
      title: "Frontend Web Developer",
      subTitle: "500 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      subTitle: "750 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 5,
      title: "Mobile App Developer",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 6,
      title: "Game Development",
      subTitle: "280 Open Positions",
      icon: <IoGameController />,
    },
    {
      id: 7,
      title: "Graphics & Design",
      subTitle: "350 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 8,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 9,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
  ];
  return (
    <div className="categories">
      <h3>Popular Job Categories</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
