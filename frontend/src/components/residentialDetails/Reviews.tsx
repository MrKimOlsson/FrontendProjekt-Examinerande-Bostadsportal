import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { getLandlord } from "../../api/getLandlord";
import "../../utils/styles/details.scss";
import { useEffect, useState } from "react";

// Skapa typer för dina datastrukturer
type TResidentialUnit = {
  landlord: {
    id: string;
  };
};

type TLandlordRating = {
  name: string;
  ratings: Array<{
    rating: number;
  }>;
};

type StarRatingProps = {
  averageRating: number;
};

const Reviews = ({ unit }: { unit: TResidentialUnit }) => {
  const [landlord, setLandlord] = useState<TLandlordRating | undefined>();

  useEffect(() => {
    async function fetchLandlord() {
      const newLandlord = await getLandlord(unit.landlord.id);
      setLandlord(newLandlord);
    }
    fetchLandlord();
  }, []);

  console.log("landlord ID");
  console.log(landlord);

  let totalRating = 0;

  landlord?.ratings.forEach((item: { rating: number }) => {
    totalRating += item.rating;
  });

  const calculatedAverage = totalRating / (landlord?.ratings.length || 1);

  // Round the average to the nearest half
  const averageRating = Math.round(calculatedAverage * 2) / 2;

  function StarRating({ averageRating }: StarRatingProps) {
    let stars = null;
  
    console.log("Average rating");
    console.log(averageRating);
  
    switch (averageRating) {
      case 1:
        stars = (
          <div className="star">
            <BsStarFill />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
        );
        return stars;
      case 1.5:
        stars = (
          <div className="star">
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
        );
        return stars;
      case 2:
        stars = (
          <div className="star">
            <BsStarFill />
            <BsStarFill />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
        );
        return stars;
      case 2.5:
        stars = (
          <div className="star">
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />
            <BsStar />
          </div>
        );
        return stars;
        case 3:
          stars = (
            <div className="star">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
            </div>
          );
          return stars;
        case 3.5:
          stars = (
            <div className="star">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
              <BsStar />
            </div>
          );
          return stars;
        case 4:
          stars = (
            <div className="star">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStar />
            </div>
          );
          return stars;
        case 4.5:
          stars = (
            <div className="star">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </div>
          );
          return stars;
          case 5:
          stars = (
            <div className="star">
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
            </div>
          );
          return stars;
      default:
        stars = <span>No rating available</span>;
        return stars;
    }
  }
  
  return (
    <div className="reviewBox">
      <div className="landlordRating">
        <StarRating averageRating={averageRating} />
      </div>
    </div>
  );
};

export default Reviews;
