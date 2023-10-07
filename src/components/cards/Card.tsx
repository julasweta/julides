import React from "react";
import "./card.css";
import { ICard } from "../../interfaces/globalInterface";

const Card: React.FC<{ card: ICard; onActive360: (img: string) => void }> = ({
  card,
  onActive360,
}) => {
  return (
    <div className="card">
      <h2>{card.name}</h2>
      <div className="card-img">
        <img
          src={process.env.PUBLIC_URL + "/" + card.jpg}
          onClick={() => onActive360(card.jpg)}
          alt="img"
        ></img>
      </div>
      <div className="card-description">{card.description}</div>
    </div>
  );
};

export { Card };
