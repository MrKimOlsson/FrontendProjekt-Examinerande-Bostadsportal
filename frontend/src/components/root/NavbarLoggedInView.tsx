// import { Button, Navbar } from "react-bootstrap";
import { useState } from "react";
import * as handleUsers from "../../api/handleUsers";
import "../../utils/styles/navbar.scss"
import { Link } from "react-router-dom";

// const NavBarLoggedInView = ({ user, onLogout }: NavbarLoggedInViewProps) => {
    const NavBarLoggedInView = () => {

    // async function logout() {
    //     try {
    //         await handleUsers.logout();
    //     } catch (error) {
    //         console.error(error);
    //         alert(error);
    //     }
    // }

    // // Slide in menu
    // const [isSlideinVisible, setSlideinVisible] = useState(false);
  
    // const toggleSlidein = () => {
    //   setSlideinVisible(!isSlideinVisible);
    // }

    return (
        <>
            {/* <Link to="/" onClick={toggleSlidein}> 
                <li>Home</li>          
            </Link>
            <Link to="/"> 
                <li>Min Profil</li>          
            </Link>
            <Link to="/applications">
                <li>
                    Ansökningar
                </li>
            </Link>
            <div className="dropdown-bottom">
                <button className="dropdown-menu-button" onClick={logout}>LOGGA UT</button>
            </div> */}
            
        </>
    );
}

export default NavBarLoggedInView;