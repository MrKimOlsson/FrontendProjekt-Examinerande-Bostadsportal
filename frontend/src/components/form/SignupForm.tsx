import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { User } from '../../models/user';
import { SignUpCredentials } from '../../api/handleUsers';
import * as Api from '../../api/handleUsers';
import { ConflictError } from '../../errors/http_errors';
import '../../utils/styles/formModal.scss';

interface SignUpFormProps {
  onSignUpSuccessful: (user: TUser) => void;
}

const SignUpForm = ({ onSignUpSuccessful }: SignUpFormProps) => {
  const [errorText, setErrorText] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignUpCredentials>();

  async function onSubmit(credentials: SignUpCredentials) {
    try {
      const newUser = await Api.signUp(credentials);
      onSignUpSuccessful(newUser);
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
    <div className='signupForm'>
      {errorText && (
        <div className="alert alert-danger">{errorText}</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputSection">

        <div>
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              placeholder="FÖRNAMN"
              {...register('firstName', { required: 'Required' })}
            />
            {errors.firstName && (
              <div className="error-text">{errors.firstName.message}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              id="lastName"
              placeholder="EFTERNAMN"
              {...register('lastName', { required: 'Required' })}
            />
            {errors.lastName && (
              <div className="error-text">{errors.lastName.message}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="E-MAIL"
              {...register('email', { required: 'Required' })}
            />
            {errors.email && (
              <div className="error-text">{errors.email.message}</div>
            )}
          </div>
        </div>

        <div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="LÖSENORD"
            {...register('password', { required: 'Required' })}
          />
          {errors.password && (
            <div className="error-text">{errors.password.message}</div>
          )}
        </div>

        <div className="form-group">
          <input
            type="password"
            id="confirmpass"
            placeholder="BEKRÄFTA LÖSENORD"
            {...register('confirmpass', { required: 'Required' })}
          />
          {errors.password && (
            <div className="error-text">{errors.password.message}</div>
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
            REGISTRERA
          </button>

        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
