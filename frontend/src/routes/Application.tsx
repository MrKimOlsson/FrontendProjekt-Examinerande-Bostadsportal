// import { useParams } from 'react-router-dom';
import ApplyText from "../components/application/ApplyText";
import ApplyInfo from "../components/application/ApplyInfo";
import '../utils/styles/apply.scss'
import { useLocation } from 'react-router-dom';


const Application = () => {

  const location = useLocation();
  const unit = location.state.unit;


  return (

      <div className="container">

            <ApplyText unit={unit}/>
            <ApplyInfo unit={unit}/>

        </div>
  );
};

export default Application;