
import HeroTerms from "../components/terms/HeroTerms";


import '../utils/styles/login.scss'
// import SmallLogo from "../components/SmallLogo";
import TextTerms from "../components/terms/TextTerms";


const Terms = () => {
  return (

      <div className="container">
            <HeroTerms />
            <TextTerms/>
            {/* <SmallLogo />   */}
        </div>
  );
};

export default Terms;