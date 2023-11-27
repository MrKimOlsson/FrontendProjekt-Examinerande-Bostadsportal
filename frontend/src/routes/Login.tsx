
import HeroLogin from "../components/login/HeroLogin";
import LoginForm from "../components/form/LoginForm";
import LoginText from "../components/login/LoginText";

import '../utils/styles/login.scss'
import SmallLogo from "../components/SmallLogo";


interface LoginProps {
  onLoginSuccessful: (user: TUser) => void;
}

const Login = ({ onLoginSuccessful }: LoginProps) => {
  return (

      <div className="container">
            <HeroLogin />
            <LoginText/>
            <SmallLogo />
            <LoginForm onLoginSuccessful={onLoginSuccessful} />
        </div>
  );
};

export default Login;