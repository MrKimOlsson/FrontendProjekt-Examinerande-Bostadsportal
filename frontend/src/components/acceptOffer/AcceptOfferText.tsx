import '../../utils/styles/acceptOffer.scss';
import { getLoggedInUser } from "../../api/handleUsers";
import { useEffect, useState } from "react";

type User = {
  firstName: string;
};

const AcceptOfferText = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    // Get the token from local storage
    const token = localStorage.getItem("token");

    if (token) {
      // Fetch the logged-in user using the retrieved token
      getLoggedInUser(token)
        .then((user: User) => { // Use type assertion to specify the user type
          // Store the user data in the state
          setLoggedInUser(user);
        })
        .catch((error) => {
          console.error("Error fetching logged-in user:", error);
        });
    }
  }, []); // The empty dependency array ensures this effect runs only once after component mounts

  return (
    <div className='container'>
      <div className='acceptOfferText'>
        <h2>Grattis {loggedInUser ? loggedInUser.firstName : ''}!</h2>
        <p>Din ansökan har blivit godkänd!</p>
      </div>
    </div>
  );
}

export default AcceptOfferText;

