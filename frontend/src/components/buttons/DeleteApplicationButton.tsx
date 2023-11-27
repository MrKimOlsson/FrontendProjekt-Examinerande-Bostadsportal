import { useState } from 'react';
import { deleteApplication } from '../../api/deleteApplication';
import { getLoggedInUser } from '../../api/handleUsers';

interface Props {
    unit: TResidentialUnit | undefined;
    text: string;
    className: string;
}


const DeleteApplicatinButton = ({ unit, text, className }: Props) => {
    
    let loggedIn: boolean = false
    const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const token = localStorage.getItem('token');
  
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
  let applicationId: string = ""
  if(unit) {

      applicationId = unit._id
  }
    

    const handleDeleteApplication = async (userId: string | null, applicationId: string) => {
        try {
          await deleteApplication(userId, applicationId);
          // Handle success (e.g., update UI or show a success message)
        } catch (error) {
          // Handle error (e.g., show an error message)
        }
      };


  return (

    <div>
        <button id="secondaryButton" className={className} onClick={() => handleDeleteApplication(userId, applicationId)}>{text}</button>
    </div>

  )
}

export default DeleteApplicatinButton