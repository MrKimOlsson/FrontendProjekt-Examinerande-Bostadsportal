import Logo from '../../assets/logo.png'
import { useLocation } from 'react-router-dom';
// import Reviews from './residentialDetails/Reviews';
import '../../utils/styles/paymentOverview.scss'


// interface Unit {
//     rent: number;
//   }
  

const PaymentOverview = () => {
    
    const location = useLocation();
    const unit = location.state.unit;
    
    const calculateTotal = (unit: TResidentialUnit): number => {
      return unit.rent + 1000;
    }

    const total = calculateTotal(unit);

  return (

    <div className="paymentCardContainer">
                <img src={Logo} alt="StudyStay" className="paymentOverviewLogo"/>
                <div className='paymentInfoCard'>
                    <h4 className='title'>Att betala</h4>
                    <div className='text'>
                        <div>
                            <p className='rent'>Hyra:</p>
                            <p className='deposition'>Deposition:</p>
                            <p className='total'>Totalt:</p>
         
                        </div>
                        <div>
                            <p className='sum'>{unit.rent}kr</p>
                            <p className='sumDeposition'>1000kr</p>
                            <p className='total'>{total}kr</p>
                            

                        </div>
                    </div>
                    </div>



    </div>
  )
}

export default PaymentOverview