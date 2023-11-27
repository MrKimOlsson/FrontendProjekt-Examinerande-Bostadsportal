import '../utils/styles/payment.scss'
import PaymentText from '../components/payment/PaymentText';
import PaymentForm from '../components/form/PaymentForm'
import { useLocation } from 'react-router-dom';
import PaymentOverview from '../components/payment/PaymentOverview';



const Payment = () => {
  const location = useLocation();
    const unit = location.state.unit;

    console.log(unit)

  return (

      <div className="container">

            <PaymentText/>
            <PaymentOverview />
            <PaymentForm unit={unit} />

        </div>
  );
};

export default Payment;