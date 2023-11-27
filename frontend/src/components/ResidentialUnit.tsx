import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  unit: TResidentialUnit;
}

const ResidentialUnit: React.FC<Props> = ({ unit }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleDotClick = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    setSelectedImageIndex(index);
  };

  return (
    <>
      <Link className='residentialCard' to={`/residential/${unit.unitType}/${unit._id}`}>
        {unit.imageURL.length > 0 ? (
          <img className='residentialGridImage' src={unit.imageURL[selectedImageIndex]} alt="residentialImage" />
        ) : (
          <p>No image available</p>
        )}

        <div className='imageIdentifierDots'>
          {unit.imageURL.map((_url: string, index: number) => (
            <div
              key={index}
              className={`dot ${index === selectedImageIndex ? 'selected' : ''}`}
              onClick={(event) => handleDotClick(event, index)}
            ></div>
          ))}
        </div>

        <div className='residential-preview-row'>
          <h4 className='residentialTitle'>{unit.street}</h4>
          <p className='bold'>{unit.area}</p>
        </div>
        <div className='residential-preview-row'>
          <p>{unit.rent}kr/mån</p>
          {unit.landlord && unit.landlord.name ? (
            <p>{unit.landlord.name}</p>
          ) : (
            <p>Landlord not specified</p>
          )}
        </div>
        <div className='residential-preview-row'>
          <p>{unit.rooms} RoK</p>
          <p>{unit.size}</p>
        </div>
      </Link>
    </>
  );
};

export default ResidentialUnit;


