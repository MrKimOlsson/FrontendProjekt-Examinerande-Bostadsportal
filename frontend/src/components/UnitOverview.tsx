// import Logo from '../assets/logo.png'
import { useLocation } from 'react-router-dom';
import Reviews from './residentialDetails/Reviews';
import '../utils/styles/unitOverview.scss'



const UnitOverview = () => {

    const location = useLocation();
    const unit = location.state.unit;

  return (
    // <div>
    <div className="unitInfoCardContainer">
                {/* <img src={Logo} alt="StudyStay" className="logo"/> */}
                <div className='unitInfoCard'>
                    <h4 className='title'>Översikt</h4>
                    <div className='text'>
                        <div>
                            <p>Område:</p>
                            <p>Våning:</p>
                            <p>Inflytt:</p>
                            <p>Ansök senast:</p>
                            <p>Hyresvärd:</p>
                            <p>Betyg:</p>
                        </div>
                        <div>
                            <p>{unit.area}</p>
                            <p>{unit.floor}</p>
                            <p>{unit.avalible}</p>
                            <p>{unit.apply}</p>
                            <p>{unit.landlord.name}</p>
                            {unit ? (
                            <Reviews unit={unit}/>
                            ) : (
                                <p>No residential unit available</p>
                            )}
                            
                            {/* Reviews */}

                        </div>
                    </div>
                    </div>



    </div>
  )
}

export default UnitOverview