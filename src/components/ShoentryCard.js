import React from 'react';

const ShoentryCard = ({ image, name, subtitle, takenAt }) => (
  <div className="card" style={{ cursor: 'pointer' }}>
    <img src={image} alt={name} />
    <div>
    <p><strong>{name}</strong>    {subtitle}</p>
    </div>
    <p>{takenAt !== "0001-01-01T00:00:00Z" ? new Date(takenAt).toLocaleDateString() : "Date not available"}</p>
  </div>
);

export default ShoentryCard;
