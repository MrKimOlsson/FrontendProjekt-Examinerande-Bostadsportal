import React, { useState } from 'react';
import '../../utils/styles/details.scss'

const DetailsMobileImage = ({ unit }: { unit: TResidentialUnit }) => {

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleDotClick = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    setSelectedImageIndex(index);
  };

  return (
    <>
        {unit.imageURL.length > 0 ? (
          <img className='residentialMobileImage mobileView' src={unit.imageURL[selectedImageIndex]} alt="residentialImage" />
        ) : (
          <p>No image available</p>
        )}

        <div className='imageIdentifierDots mobileView'>
          {unit.imageURL.map((_url: string, index: number) => (
            <div
              key={index}
              className={`dot ${index === selectedImageIndex ? 'selected' : ''}`}
              onClick={(event) => handleDotClick(event, index)}
            ></div>
          ))}
        </div>
    </>
  );
};

export default DetailsMobileImage;
