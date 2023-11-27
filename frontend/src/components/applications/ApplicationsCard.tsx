import { Link } from 'react-router-dom';
import '../../utils/styles/applications.scss'
import DeleteApplicatinButton from '../buttons/DeleteApplicationButton';

interface ApplicationsCardProps {
  unit: TResidentialUnit;
  user: TUser | undefined
}

const ApplicationsCard = ({ user, unit }: ApplicationsCardProps) => {

  // let applicationId: string = unit._id
  let userId: string = ""
  if(user){
    userId = user._id
  }
  let statusColor: String = "";
  let isGranted: Boolean = false;
  
  switch (unit.status) {
    case "Obehandlad":
      statusColor = "gray";
      break;
    case "Otillgänglig":
      statusColor = "red";
      break;
    case "Godkänd":
      statusColor = "green";
      isGranted = true;
      break;
    default:
      break;
  }
  

  return (
    <div className="applications-card">
      <img className="applications-card-img" src={unit.imageURL[0]} alt={unit.title} /> {/* Display the image */}

      <div className="application-card-row"><div>
        <div className='application-card-content'>

          <div className='application-card-column'>
            <h3>{unit.title}</h3>
            <p>{unit.street}</p>
            <p>{unit.zipcode}</p>
            <p>{unit.area}</p>
          </div>

          <div className='button-status-container'>
            <div className='status-wrapper'>
            <div className='status'>
              <div className={`${statusColor} circle`}></div>
              {unit.status}
            </div>
          </div>

          {isGranted ? (
            <Link to={`/accept/${unit.unitType}/${unit._id}`}>
              <button id='mainButton'>GÅ VIDARE</button>
              {/* <button text="TA BORT" className="mainButton"/> */}

            </Link>
            ) : (
              <DeleteApplicatinButton unit={unit} text="TA BORT" className="mainButton"/>
            )}

        </div>


        </div>
      </div>

        
      </div>
    </div>
  );
};

export default ApplicationsCard;