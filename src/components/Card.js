import React from 'react';
import './Card.css';

const Cards = ({ src, title, description, price }) =>{
  return (
    <div className="card">
        <img src={src} alt={title} />
        <div className="card_info">
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price} per night</h3>
            <button>Book Now</button>
        </div>
    </div>
  );
};

export default Cards;