import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginCredentials, getLoggedInUser } from "../../api/handleUsers";
import * as handleUsers from "../../api/handleUsers";
import { UnauthorizedError } from "../../errors/http_errors";
import "../../utils/styles/formModal.scss";
import "../../utils/styles/login.scss";
import { Link } from "react-router-dom";
// import { useAuth } from "../../context/authContext";


interface LoginFormProps {
  onLoginSuccessful: (user:TUser) => void;
}

// const LoginForm = ({ onLoginSuccessful }: LoginFormProps) => {
  const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccessful }) => {

  const [errorText, setErrorText] = useState<string | null>(null);
  // const { setUser } = useAuth();
  // const { setLoggedInUser } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>();
  
  async function onSubmit(credentials: LoginCredentials) {
    
    try {
      const token = await handleUsers.login(credentials);

      localStorage.setItem("token", token);

      console.log("token:");
      console.log(token);

      if (token) {
        getLoggedInUser(token)
          .then((loggedInUser) => {
            // Handle the logged-in user data here
            console.log("logged in user:");
            console.log(loggedInUser);
            onLoginSuccessful(loggedInUser); // Notify the parent component of successful login
            // setLoggedInUser(loggedInUser)
            // setUser(loggedInUser)

            
          })
          .catch((error) => {
            // Handle errors here
            console.error(error);
          });
        } else {
          // Handle the case where the token is not available
          console.error("JWT token not found in local storage");
        }
      } catch (error) {
        if (error instanceof UnauthorizedError) {
        setErrorText(error.message);
      } else {
        alert(error);
      }
      console.error(error);
    }
  }
  
  return (
    <div className="loginForm">
      <p>VÄNLIGEN FYLL I FÄLTET NEDAN</p>
      {errorText && <div className="alert alert-danger">{errorText}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputSection">
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              id="email"
              placeholder="E-MAIL"
              {...register("email", { required: "Required" })}
            />
            {errors.email && (
              <div className="error-text">{errors.email.message}</div>
            )}
          </div>
          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              id="password"
              placeholder="PASSWORD"
              {...register("password", { required: "Required" })}
            />
            {errors.password && (
              <div className="error-text">{errors.password.message}</div>
            )}
          </div>
        </div>
        <div className="buttonWrapper">
        <button type="submit" disabled={isSubmitting} className="mainButton">
          LOGGA IN
        </button>


        </div>
        <div className="registerText">
          <p className="bold toprow">Vill du registrera ett konto?</p>
          <p><Link to='/signup' className="bold">Klicka här</Link> för att registrera dig.</p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

