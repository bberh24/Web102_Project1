import React from "react";

const Card = ({ image, title, subtitle, link }) => {
  return (
    <div className="Card">
      <img className="show" src={image} alt={title} />
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <a href={link}>
        <button>Watch Now</button>
      </a>
    </div>
  );
};

export default Card;
