import { useState } from 'react';
// import { Link } from 'react-router-dom';
import '../../utils/styles/apply.scss';
// import ApplyButton from '../buttons/ApplyButton';
import UnitOverview from '../UnitOverview';
import { createApplication } from "../../api/createApplication";
import { useAuth } from "../../context/authContext";


interface Props {
    unit: TResidentialUnit;
}

const ApplyInfo = ({ unit }: Props) => {
    const { state } = useAuth();
    const { user } = state;

    const [isApplying, setIsApplying] = useState(false); // Add state for applying status
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Add state for error message
    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const handleCheckboxChange = () => {
        setCheckboxChecked(!checkboxChecked);
    };

    const handleApplyButtonClick = () => {
        if (!checkboxChecked) {
            // Shake animation logic here
            const applyButton = document.querySelector('.applyButton');
            applyButton?.classList.add('shakeAnimation');

            // Remove the shake class after the animation duration (e.g., 1s)
            setTimeout(() => {
                applyButton?.classList.remove('shakeAnimation');
            }, 1000);

            return; // Exit the function if checkbox is not checked
        }

        try {
            // Your application submission logic here
            if (user) {
                setIsApplying(true);
                console.log("user id");
                console.log(user._id);
        
                createApplication(user._id, unit);
        
                console.log("Application created successfully!");
            }
        } catch (error) {
            console.error("Error creating application:", error);
    
            if (error instanceof Error && error.message === 'Du har redan skickat en ansökan') {
                // Set the error message state
                setErrorMessage('Du har redan skickat en ansökan');
            } else {
                // Handle other errors if needed
            }
        } finally {
            setIsApplying(false);
        }

        // Redirect to the applications page
        window.location.href = '/applications';
    };

    console.log(unit);

    return (
        <div className='applyInfo-wrapper'>
            <div className='center'>
                <img className='apply-image' src={unit?.imageURL[0]} alt="residentialImage" />
                <UnitOverview />
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
            
            <p>Vänligen läs igenom alla villkor noga. Om du har några frågor eller funderingar, kontakta hyresföreningen innan du tackar ja.</p>

                <div className='flexEnd'>
                    <label className="form-control">
                        <input
                            type="checkbox"
                            name="checkbox"
                            checked={checkboxChecked}
                            onChange={handleCheckboxChange}
                        />
                        Jag godkänner hyresvärdens villkor
                    </label>
                </div>
                <div className='applyButton'>
                    {unit ? (
                        <button onClick={handleApplyButtonClick} className='mainButton'>
                            TACKA JA
                        </button>
                    ) : (
                        <p>Någonting gick fel..</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApplyInfo;



// import { Link } from 'react-router-dom';
// import '../../utils/styles/apply.scss';
// import ApplyButton from '../buttons/ApplyButton';
// import UnitOverview from '../UnitOverview';

// interface Props {
//     unit: TResidentialUnit | undefined
// }

// const ApplyInfo = ({ unit }: Props) => {
//     console.log(unit)

//   return (
//     <div className='applyInfo-wrapper'>
//         <div className='center'>
//             <img className='apply-image' src={unit?.imageURL[0]} alt="residentialImage" />
//             <UnitOverview />
//         </div>
//         <div className='acceptOfferInfo-text'>
            // <h4>Viktiga krav och villkor från hyresföreningen:</h4>
            // <ol type='1'>
            //     <li><strong>Deposition:</strong> En deposition om 5 000 kr måste betalas inom 7 dagar från acceptdatumet. Denna summa återbetalas när du flyttar ut, förutsatt att bostaden lämnas i ursprungligt skick.</li>
            //     <li><strong>Husdjur:</strong> Husdjur är tillåtna, men en särskild avgift om 200 kr/månad tillkommer.</li>
            //     <li><strong>Rökning:</strong> Rökning är strikt förbjuden inom bostadens område, inklusive balkonger och gemensamma utrymmen.</li>
            //     <li><strong>Inflyttningsdatum:</strong> Inflyttningsdatum är den 1:a varje månad. Var god se till att koordinera med fastighetsskötaren för att undvika kollisioner.</li>
            //     <li><strong>Uppsägningstid:</strong> Uppsägningstiden är tre månader från och med den första i nästa månad efter att uppsägning har gjorts.</li>
            // </ol>
            
            // <p>Vänligen läs igenom alla villkor noga. Om du har några frågor eller funderingar, kontakta hyresföreningen innan du tackar ja.</p>

//             <div className='flexEnd'>
//             <label className="form-control">
//                 <input type="checkbox" name="checkbox" />
//                 Jag godkänner hyresvärdens villkor
//                 </label>
//                 {/* <p>Jag godkänner hyresvärdens villkor</p> */}
//             </div>
//             <div className='applyButton'>
//             {unit ? (
//                  <Link to="/applications">
//                     <ApplyButton unit={unit}/>
//                   </Link>
//            ) : (
//                 <p>Någonting gick fel..</p>
//                 // <button className='mainButton'>TACKA JA</button>
//             )}

//             </div>
//         </div>
//     </div>
//   );
// }

// export default ApplyInfo;