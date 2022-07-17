import React from "react";
import cardData from "../card-data.json";
import "../styles/cardFeature.scss";

const CardFeature = () => {
  return cardData && cardData.length ? (
    <div className="container mx-auto cardFeature">
      <div className="row g-5">
        {cardData.map((card, index) => {
          const cardImage = card.image
            ? card.image
            : "assets/ludlowUniLogo.png";
          const alt = card.altText ? card.altText : "Ludlow Uni logo";

          return (
            <div className="col card-col" key={index}>
              <a href={card.url} className="card h-100">
                <img
                  src={cardImage}
                  alt={alt}
                  className="card-img-top"
                  loading="lazy"
                />
                <div className="card-body">
                  <p className="card-title">{card.title}</p>
                  <div className="summary">
                    <p>{card.content}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default CardFeature;
