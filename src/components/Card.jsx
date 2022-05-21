import React from "react";
import ShowCard from "./ShowCard";

const Card = () => {
  const data = [
    {
      date: "28/10/2020",
      heading: "Case Study",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      subheading: "Amazon Gift Pay",
      device: "Desktop-Mobile",
      color: "#ffa500",
    },
    {
      date: "28/10/2020",
      heading: "Case Study",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      subheading: "Amazon Gift Pay",
      device: "Desktop-Mobile",
      color: "#ffa500",
    },
    {
      date: "17 Sep 2020",
      heading: "Case Study",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      subheading: "Apple Gift Payment",
      device: "MacOS-Mobile",
      color: "#f5f5f5",
    },
  ];
  console.log(data.date);
  return (
    <div>
      {data.map((item) => {
        return (
          <ShowCard
            date1={item.date}
            heading={item.heading}
            logo={item.logo}
            subheading={item.subheading}
            device={item.device}
            color={item.color}
          />
        );
      })}
    </div>
  );
};

export default Card;
