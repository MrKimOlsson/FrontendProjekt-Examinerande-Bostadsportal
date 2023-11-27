
import HeroRentOut from "../components/rentOut/HeroRentOut";


import '../utils/styles/rentOut.scss'
// import SmallLogo from "../components/SmallLogo";
import TextRentOut from "../components/rentOut/TextRentOut";


const RentOut = () => {
  return (

      <div className="container">
            <HeroRentOut />
            <TextRentOut/>
            {/* <SmallLogo />   */}
        </div>
  );
};

export default RentOut;