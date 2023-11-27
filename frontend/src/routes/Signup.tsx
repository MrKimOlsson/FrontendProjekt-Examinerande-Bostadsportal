
import HeroSignup from '../components/signup/HeroSignup';
import SignUpForm from '../components/form/SignupForm';
import SignupText from '../components/signup/SignupText';
import Logotype from '../components/Logotype';
import ToLoginText from '../components/signup/ToLoginText';

interface SignUpProps {
  onSignUpSuccessful: (user: TUser) => void;
  // Add any other props you need for the SignUp component
}

const SignUp = ({ onSignUpSuccessful }: SignUpProps) => {
  return (

      <div className='container'>
        <HeroSignup />
        <SignupText />
        <Logotype />
        <SignUpForm onSignUpSuccessful={onSignUpSuccessful} />
        <ToLoginText />
      </div>

  );
};

export default SignUp;
