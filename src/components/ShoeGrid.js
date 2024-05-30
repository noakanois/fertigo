import React, { useEffect, useState } from 'react';
import Card from './Card';
import ShoentryCard from './ShoentryCard';
import { fetchShoes, fetchRecentShoentries } from '../services/api';
import { useNavigate } from 'react-router-dom';

const ShoeGrid = () => {
  const [shoes, setShoes] = useState([]);
  const [showAllShoes, setShowAllShoes] = useState(false); 
  const [recentShoentries, setRecentShoentries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadShoes = async () => {
      const shoesData = await fetchShoes();
      console.log("Fetched Shoes:", shoesData); 
      setShoes(shoesData);
    };

    loadShoes();
    fetchRecentShoentries().then(setRecentShoentries);
  }, []);

  const handleShoeClick = (productName) => {
    navigate(`/shoe/${productName}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>VERTIGO</h1>
      <div className="shoe-grid" style={{ position: 'relative' }}>
        {showAllShoes ? (
          shoes.map(shoe => (
            <Card
              key={shoe.ID}
              gif={`img_data/shoes/${shoe.ProductName}/gif/${shoe.ProductName}.gif`}
              name={shoe.Name}
              subtitle={shoe.Subtitle}
              onClick={() => handleShoeClick(shoe.ProductName)}
            />
          ))
        ) : (
          shoes.slice(0, 6).map(shoe => (
            <Card
              key={shoe.ID}
              gif={`img_data/shoes/${shoe.ProductName}/gif/${shoe.ProductName}.gif`}
              name={shoe.Name}
              subtitle={shoe.Subtitle}
              onClick={() => handleShoeClick(shoe.ProductName)}
            />
          ))
        )}
        <button 
          onClick={() => setShowAllShoes(!showAllShoes)} 
          style={{ 
            position: 'absolute', 
            bottom: '20px', 
            right: '20px',
            padding: '10px', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
          }}>
          {showAllShoes ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <h2>Recent Shoentries</h2>
      <div className="shoentries"> 
        {recentShoentries.map(entry => (
          <ShoentryCard
            key={entry.ID}
            image={`http://localhost:8080/${entry.picture_local_path}`}
            name={entry.shoe_name}
            subtitle={entry.shoe_subtitle}
            takenAt={entry.picture_taken_at}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoeGrid;
