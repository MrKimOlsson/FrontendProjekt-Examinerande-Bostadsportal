import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import '../../utils/styles/payment.scss'
import { PaymentCredentials } from '../../api/handlePayment';
import { ConflictError } from '../../errors/http_errors';

interface Props {
  unit: TResidentialUnit | undefined;
}


const PaymentForm = ({ unit }: Props) => {
  const [errorText, setErrorText] = useState<string | null>(null);
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<PaymentCredentials>();

  
  function onSubmit(credentials: PaymentCredentials) {
    try {
      
      navigate('/confirmed', { state: { unit } });
      console.log(credentials)
    } catch (error) {
      if (error instanceof ConflictError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
    }
  }


  return (
    <div className='paymentForm'>
      <h3>Betalning</h3>
      {errorText && (
        <div className="alert alert-danger">{errorText}</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>


      <div className="inputSection">
        <div className='column'>
            <div className="form-group">
                <input
                type="text"
                id="fullName"
                placeholder="Namn på bankkortet"
                {...register('fullName', { required: 'Required' })}
                />
                {errors.fullName && (
                <div className="error-text">{errors.fullName.message}</div>
                )}
            </div>

            <div className="form-group">
                <input
                type="text"
                id="cardNumber"
                placeholder="Kortnummer"
                {...register('cardNumber', { required: 'Required' })}
                />
                {errors.cardNumber && (
                <div className="error-text">{errors.cardNumber.message}</div>
                )}
            </div>
        </div>
       
        <div className='row'>
          <div className="form-group">
            <input
              type="expDate"
              id="expDate"
              placeholder="Utgångsdatum"
              {...register('expDate', { required: 'Required' })}
            />
            {errors.expDate && (
              <div className="error-text">{errors.expDate.message}</div>
            )}
          </div>
       
            <div className="form-group">
            <input
                type="cvc"
                id="cvc"
                placeholder="Säkerhetskod"
                {...register('cvc', { required: 'Required' })}
            />
            {errors.cvc && (
                <div className="error-text">{errors.cvc.message}</div>
            )}
            </div>
        </div>

        </div>
        <div className="buttonWrapper">
          <button
            type="submit"
            disabled={isSubmitting}
            className="mainButton"
          >
            BETALA
          </button>

        </div>
      </form>
    </div>
  );
};

export default PaymentForm;