import { useState } from "react";
import { getLoggedInUser } from "../../api/handleUsers";
import { createApplication } from "../../api/createApplication";

// import { TResidentialUnit } from "../types"; // Import your type definition

const ApplyButton = ({ unit }: { unit: TResidentialUnit }) => {
  let loggedIn: boolean = false
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const token = localStorage.getItem('token');
  const [isApplying, setIsApplying] = useState(false); // Add state for applying status
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Add state for error message

  if (token) {
    getLoggedInUser(token)
      .then((user) => {
        // Handle the logged-in user data here
        let firstName = ""
        let id = ""
        if(user){
          loggedIn = true
          firstName = user.firstName
          id = user._id
          setLoggedInUser(firstName)
          setUserId(id)
        }
        
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  } else {
    // Handle the case where the token is not available
    if(loggedInUser) {
      console.error('JWT token not found in local storage');
    }
  }

  const handleApply = async () => {
    if (userId) {
      setIsApplying(true);
      try {
        // let userId = id;
        console.log("user id");
        console.log(userId);

        await createApplication(userId, unit);

        console.log("Application created successfully!");
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
    }
  };


  return (
<div>
      {errorMessage ? ( // Display error message if it exists
        <p>{errorMessage}</p>
      ) : isApplying ? (
        <p>Applying...</p>
      ) : (
        <button className="mainButton" onClick={handleApply}>ANSÖK</button>
      )}
    </div>
  );
};

export default ApplyButton;
