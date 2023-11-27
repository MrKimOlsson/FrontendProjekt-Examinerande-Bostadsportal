import { Outlet } from 'react-router-dom';
import Navbar from '../components/root/Navbar';
import Footer from '../components/root/Footer';
import { useState } from 'react';
const token = localStorage.getItem('token');
import { getLoggedInUser } from "../api/handleUsers";

const RootLayout = () => {

  let loggedIn: boolean = false
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);
  
  if (token) {
    getLoggedInUser(token)
      .then((user) => {
        let firstName = ""
        if(user){
          loggedIn = true
          firstName = user.firstName
          setLoggedInUser(firstName)
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


    return (
        <>
            <Navbar loggedInUser={loggedInUser}/>
               
              <Outlet />

            <Footer />
        </>
    );
};

export default RootLayout;