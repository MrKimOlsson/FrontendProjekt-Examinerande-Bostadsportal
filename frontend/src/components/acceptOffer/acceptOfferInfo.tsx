// import { Link } from 'react-router-dom';
import '../../utils/styles/acceptOffer.scss';
import DeleteApplicatinButton from '../buttons/DeleteApplicationButton';
import { useNavigate } from "react-router-dom";


interface Props {
    unit: TResidentialUnit | undefined
}

const AcceptOfferInfo = ({ unit }: Props) => {
    console.log(unit)

    const navigate = useNavigate();

    const handleApplyClick = () => {
        // Use the history object to navigate to the application page and pass the unit data as a parameter
        navigate('/payment', { state: { unit } });
      };

  return (

    <div className='acceptOfferInfo-wrapper'>

        <div className='responsive-wrapper'>

        <div className='acceptOfferInfo-imageWrapper'>
            <img className='acceptOfferInfo-image' src={unit?.imageURL[0]} alt="residentialImage" />
            <h5>{unit?.title}</h5>
            <div className='row'>
                <p>{unit?.street},</p>
                <p>{unit?.zipcode}</p>
            </div>
            <p>Hyresvärd: {unit?.landlord.name}</p>

        </div>
        <div className='acceptOfferInfo-text'>
            <h4>Viktiga krav och villkor från hyresföreningen:</h4>
            <ol type='1'>
                <li><strong>Deposition:</strong> En deposition om 5 000 kr måste betalas inom 7 dagar från acceptdatumet. Denna summa återbetalas när du flyttar ut, förutsatt att bostaden lämnas i ursprungligt skick.</li>
                <li><strong>Husdjur:</strong> Husdjur är tillåtna, men en särskild avgift om 200 kr/månad tillkommer.</li>
                <li><strong>Rökning:</strong> Rökning är strikt förbjuden inom bostadens område, inklusive balkonger och gemensamma utrymmen.</li>
                <li><strong>Inflyttningsdatum:</strong> Inflyttningsdatum är den 1:a varje månad. Var god se till att koordinera med fastighetsskötaren för att undvika kollisioner.</li>
                <li><strong>Uppsägningstid:</strong> Uppsägningstiden är tre månader från och med den första i nästa månad efter att uppsägning har gjorts.</li>
            </ol>
            
            {/* <p>Vänligen läs igenom alla villkor noga. Om du har några frågor eller funderingar, kontakta hyresföreningen innan du tackar ja.</p> */}

            {/* <p>Jag godkänner hyresvärdens villkor</p> */}

            </div>

        </div>
        <div className='responsive-wrapper'>
            <div className='box'></div>
            <div className='buttons'>
                <DeleteApplicatinButton unit={unit} text="TACKA NEJ" className='secondaryButton'/>
            {unit ? (
                
                <button className='mainButton' onClick={handleApplyClick}>TILL BETALNING</button>
                
                ) : (
                    
                    <button className='mainButton'>TILL BETALNING</button>
                    )}
            </div>
    </div>
    </div>

  );
}

export default AcceptOfferInfo;