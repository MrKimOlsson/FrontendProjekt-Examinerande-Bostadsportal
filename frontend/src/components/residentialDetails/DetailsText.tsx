import Logo from '../../assets/logo.png'
import "../../utils/styles/details.scss"
import IncludeItem from './IncludesItem'
// import ApplyButton from '../buttons/ApplyButton'
// import { Link } from 'react-router-dom'
import Reviews from './Reviews'
// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const DetailsText = ({ unit }: { unit: TResidentialUnit }) => {
    const navigate = useNavigate();

    const handleApplyClick = () => {
        // Use the history object to navigate to the application page and pass the unit data as a parameter
        navigate('/application', { state: { unit } });
      };
    
  return (
    <div className="detailsTextWrapper">
        <div className="detailsText">
            <h2>{unit.street}</h2>
            <div className='subTitle'>
                <h3>{unit.rent}kr/mån</h3>
                <div className='verticalDivider'></div>
                <h3>{unit.rooms}RoK</h3>
                <div className='verticalDivider'></div>
                <h3>{unit.size}</h3>
            </div>
            <p className='title'>{unit.title}</p>
            <p>{unit.description}</p>
        </div>

        <div className="infoCardContainer">
            <img src={Logo} alt="StudyStay" className="logo"/>
            <div className='infoCard'>
                <h4 className='title'>Översikt</h4>
                <div className='text'>
                    <div className='thick'>
                        <p>Område:</p>
                        <p>Våning:</p>
                        <p>Inflytt:</p>
                        <p>Ansök senast:</p>
                        <p className='landlord'>Hyresvärd:</p>
                        <p className='rating'>Betyg:</p>
                    </div>
                    <div>
                        <p>{unit.area}</p>
                        <p>{unit.floor}</p>
                        <p>{unit.avalible}</p>
                        <p>{unit.apply}</p>
                        <p className='landlord'>{unit.landlord.name}</p>
                        {unit ? (
                        <Reviews unit={unit} />
                        ) : (
                            <p>No residential unit available</p>
                        )}
                        
                        {/* Reviews */}

                    </div>
                </div>
                    <p className="overviewText">Ansökan är öppen och görs via vår bostadskö.</p>
                <div className='buttons'>
                
                    <button className='mainButton' onClick={handleApplyClick}>TILL ANSÖKAN</button>
                  
                </div>
            </div>

            <div className='includes'>
                {unit.includes.map((include: string | null, index: number) => (
                    <IncludeItem
                    key={index}
                    include={include}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}


export default DetailsText