import '../../utils/styles/payment.scss';
// import { getLoggedInUser } from "../../api/handleUsers";
// import { useEffect, useState } from "react";

// Define a type for the user data (adjust it based on your actual user data structure)
// type User = {
//   firstName: string;
  // Add other properties as needed
// };

const PaymentText = () => {
  // const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  // useEffect(() => {
  //   // Get the token from local storage
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     // Fetch the logged-in user using the retrieved token
  //     getLoggedInUser(token)
  //       .then((user: User) => { // Use type assertion to specify the user type
  //         // Store the user data in the state
  //         setLoggedInUser(user);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching logged-in user:", error);
  //       });
  //   }
  // }, []); // The empty dependency array ensures this effect runs only once after component mounts

  return (
    <div className='container'>
      <div className='acceptPaymentText'>
        <h2>Betalning</h2>
        <p>Registrera ditt kort för att slutföra godkännandet av bostaden.
            Depositionen kommer att dras omgående och återbetalas när du flyttar ut. 
            Hyran kommer att dras från ditt konto den sista dagen varje månad.</p>
      </div>
    </div>
  );
}

export default PaymentText;