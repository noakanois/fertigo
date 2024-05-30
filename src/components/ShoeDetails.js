import React, { useEffect, useState } from 'react';
import { fetchShoeDetails, fetchShoentries } from '../services/api';
import { useParams } from 'react-router-dom';
import ShoentryCard from './ShoentryCard';

const ShoeDetails = () => {
  const { productName } = useParams();
  const [shoe, setShoe] = useState(null);
  const [shoentries, setShoentries] = useState([]);

  useEffect(() => {
    const loadShoeDetails = async () => {
      const shoeData = await fetchShoeDetails(productName);
      console.log("Shoe Data:", shoeData); 
      setShoe(shoeData);
      if (shoeData && shoeData.id) {
        const shoentriesData = await fetchShoentries(shoeData.id);
        console.log("Shoentries Data:", shoentriesData); 
        setShoentries(shoentriesData);
      }
    };

    loadShoeDetails();
  }, [productName]);

  if (!shoe) return <div>Loading...</div>;

  const attributes = JSON.parse(shoe.attributes);

  return (
    <div className="shoe-details">
      <h1>{shoe.name}</h1>
      <h2>{shoe.subtitle}</h2>
      <div className="shoe-content">
        <div className="shoe-image-card">
          <div className="shoe-image">
            <img
              src={`http://localhost:8080/img_data/shoes/${shoe.product_name}/gif/${shoe.product_name}.gif`}
              alt={shoe.name}
            />
          </div>
        </div>
        <div className="card">
          <div className="shoe-attributes">
            <h3>Attributes</h3>
            <ul>
              {Object.entries(attributes).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
            <h3>Price</h3>
            <p>{shoe.last_sale}</p>
          </div>
        </div>
      </div>
      <div className="shoe-description card">
        <h3>Description</h3>
        <p>{shoe.description}</p>
      </div>
      <h3>Shoentries:</h3>
      <div className="shoentries">
        {shoentries.slice().reverse().map(entry => (
          <ShoentryCard
            key={entry.shoentry_id}
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

export default ShoeDetails;
