import '../utils/styles/login.scss'
import TextNotFound from "../components/notFound/TextNotFound";
import HeroNotFound from "../components/notFound/HeroNotFound";


const NotFound = () => {
  return (

      <div className="container">
            <HeroNotFound />
            <TextNotFound/>
        </div>
  );
};

export default NotFound;