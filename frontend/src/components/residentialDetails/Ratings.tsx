import { AiOutlineStar } from "react-icons/ai";

interface Props {
  ratings: TRatingsArray[];
}

interface TRatingsArray {
  user?: string;
  rating: number;
}

const Ratings = ({ ratings }: Props) => {
  function StarRating({ userRating }: { userRating: number }) {
    let stars = [];

    switch (userRating) {
      case 1:
        for (let i = 0; i < 1; i++) {
          stars.push(<AiOutlineStar key={i} />);
        }
        break;
      case 2:
        for (let i = 0; i < 2; i++) {
          stars.push(<AiOutlineStar key={i} />);
        }
        break;
      case 3:
        for (let i = 0; i < 3; i++) {
          stars.push(<AiOutlineStar key={i} />);
        }
        break;
      case 4:
        for (let i = 0; i < 4; i++) {
          stars.push(<AiOutlineStar key={i} />);
        }
        break;
      case 5:
        for (let i = 0; i < 5; i++) {
          stars.push(<AiOutlineStar key={i} />);
        }
        break;
      default:
        stars.push(<span key={0}>No rating available</span>);
        break;
    }

    return <div className="star-rating">{stars}</div>;
  }

  return (
    <div>
      {ratings.map((rating, index) => (
        <div className="ratingCard" key={index}>
          {rating.user ? <p>{rating.user}:</p> : null}
          {/* <p>Betyg: {rating.rating}</p> */}
          <div className="star-row">
            <StarRating userRating={rating.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
