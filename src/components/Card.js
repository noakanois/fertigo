import React from 'react';

const Card = ({ gif, name, subtitle, onClick }) => (
  <div className="card" onClick={onClick}>
    <img src={`http://localhost:8080/${gif}`} alt={name} />
    <h3>{name}</h3>
    <p>{subtitle}</p>
  </div>
);

export default Card;
