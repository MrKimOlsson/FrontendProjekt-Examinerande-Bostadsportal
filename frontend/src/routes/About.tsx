import '../utils/styles/login.scss'
import TextAbout from "../components/about/TextAbout";
import HeroAbout from "../components/rentOut/HeroRentOut";


const About = () => {
  return (

      <div className="container">
            <HeroAbout />
            <TextAbout/>
        </div>
  );
};

export default About;