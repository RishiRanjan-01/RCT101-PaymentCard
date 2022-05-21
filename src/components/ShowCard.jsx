import React from "react";
import "./ShowCard.css";
import 'https://kit.fontawesome.com/24c494a6b6.js'


const ShowCard = (props) => {
  let { date1, heading, logo, subheading, device, color } = props;
  console.log(color)
  return (
    <div className="main" style={{backgroundColor:color}}>
      <div>
        <p className="date">{date1}</p>
        <h3>{heading}</h3>
        <h1>{subheading}</h1>
        <p>{device}</p>
      </div>
      <div>
        <img src={logo} alt="" />
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>
    </div>
  );
};

export default ShowCard;
