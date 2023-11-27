import '../../utils/styles/confirmed.scss';
import { useNavigate } from "react-router-dom";


interface Props {
    unit: TResidentialUnit | undefined
}

const ConfirmedInfo = ({ unit }: Props) => {
    console.log(unit)

    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Use the history object to navigate to the application page and pass the unit data as a parameter
        navigate('/', { state: { unit } });
      };

  return (
    <div className='confirmedInfo-wrapper'>
        <button className='mainButton mobileButton' onClick={(handleButtonClick)}>Hem</button>

        <div className='confirmedInfo-imageWrapper'>
            <img className='confirmedInfo-image' src={unit?.imageURL[0]} alt="residentialImage" />
            <div className='row'>
               <h3 className='street'>{unit?.street}</h3>
               <h3 className='zipcode'>{unit?.zipcode}</h3>
            </div>
            <h4 className='landlord'>{unit?.landlord.name}</h4>
            <div className='infoRow'>
                <p className='size'>{unit?.size}kvm</p>
                <p className='rooms'>{unit?.rooms}RoK</p>
                <p className='rent'>{unit?.rent}kr/mån</p>
                <p className='area'>{unit?.area}</p>
            </div>
        </div>
        <div className='confirmedInfo-text'>
            <h2>Grattis! Här är ditt nya boende.</h2>
            <p>Säkerställ noggrant att all information nedan är korrekt innan du bekräftar din bostad. Vi önskar dig all lycka med ditt nya boende och dina studier!</p>
        <button className='mainButton' onClick={(handleButtonClick)}>HEM</button>
        </div>

    </div>
  );
}

export default ConfirmedInfo;