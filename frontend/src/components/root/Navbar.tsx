import { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import * as handleUsers from "../../api/handleUsers";
import '../../utils/styles/navbar.scss'
import '../../utils/styles/dropdownMenu.scss'
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

interface NavbarProps {
  loggedInUser: string | null,
}

const Navbar = ({ loggedInUser }: NavbarProps) => {

// dropdown menu
const [isDropdownVisible, setDropdownVisible] = useState(false);
  
const toggleDropdown = () => {
  setDropdownVisible(!isDropdownVisible);
  
  console.log("dropdown visible")
  console.log(isDropdownVisible)
}

// Slide in menu
    const [isSlideinVisible, setSlideinVisible] = useState(false);
  
    const toggleSlidein = () => {
      setSlideinVisible(!isSlideinVisible);
    }

    // Logout
    async function logout() {
      try {
          await handleUsers.logout();
          toggleSlidein()

      } catch (error) {
          console.error(error);
          alert(error);
      }
  }

  return (
    <>
      <nav className='navbar'>
        <div className="nav-wrapper">
        <menu className="menu-desktop">
          <Link to='/' ><img src={Logo} alt="StudyStay" className="link logo-img"/></Link>
  
          {/* Slide in */}
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleSlidein}>
            <AiOutlineMenu className="profileIcons userBurger"/>
            <FaUserCircle className="profileIcons userIcon"/>
            </button>

            {/* Slide in menu */}
            <div className="dropdownContent">
              <ul className={`dropdown-list ${isSlideinVisible ? 'active' : 'hidden'}`}>
                {loggedInUser ? (

                  // If logged in
                  <nav>
                  
                  <Link to="/myPages" onClick={toggleSlidein}> 
                    <li>MIN PROFIL</li>          
                  </Link>

                  <Link to="/" onClick={toggleSlidein}> 
                    <li>BOSTÄDER</li>          
                  </Link>

                  <Link to="/applications" onClick={toggleSlidein}>
                    <li>
                      ANSÖKNINGAR
                    </li>
                  </Link>

                    <Link to="/contact" onClick={toggleSlidein}> 
                      <li>KONTAKT</li>          
                    </Link>

                    <Link to="/terms" onClick={toggleSlidein}> 
                      <li>VILLKOR</li>          
                    </Link>


                    <Link to="/rentOut" onClick={toggleSlidein}> 
                      <li>HYR UT</li>          
                    </Link>

                    <Link to="/about" onClick={toggleSlidein}> 
                      <li>OM OSS</li>          
                    </Link>
                    <div className="dropdown-bottom">
                      <button className="dropdown-menu-button  mainButton" onClick={logout}>LOGGA UT</button>
                    </div>
                    
                  </nav>

                  ) : (

                    // If not logged in
                          <nav>
                            <Link to="/login" onClick={toggleSlidein}> 
                              <li>MIN PROFIL</li>          
                            </Link>

                            <Link to="/" onClick={toggleSlidein}> 
                              <li>BOSTÄDER</li>          
                            </Link>

                            <Link to="/login" onClick={toggleSlidein}>
                              <li>
                                ANSÖKNINGAR
                              </li>
                            </Link>

                            <Link to="/contact" onClick={toggleSlidein}> 
                              <li>KONTAKT</li>          
                            </Link>

                            <Link to="/terms" onClick={toggleSlidein}> 
                              <li>VILLKOR</li>          
                            </Link>


                            <Link to="/rentOut" onClick={toggleSlidein}> 
                              <li>HYR UT</li>          
                            </Link>

                            <Link to="/about" onClick={toggleSlidein}> 
                              <li>OM OSS</li>          
                            </Link>
                            <div className="dropdown-bottom">
                              <Link to="/signup">
                                <button className="dropdown-menu-button mainButton" onClick={toggleSlidein}>REGISTRERA</button>
                              </Link>
                              <Link to="/login">
                                <button className="dropdown-menu-button mainButton" onClick={toggleSlidein}>LOGGA IN</button>
                              </Link>
                          
                        </div>
                      </nav>
                  )}
              </ul>
            </div>
          </div>
        </menu>
        </div>


        {/*-- Hidden menu --*/}
        <menu className={`menuMobile ${isDropdownVisible ? 'active' : 'hidden'}`}>
          {loggedInUser ? (

                // If logged in
              <nav>
                  <Link to="/myPages" onClick={toggleDropdown}> 
                    <li>MIN PROFIL</li>          
                  </Link>

                  <Link to="/" onClick={toggleDropdown}> 
                    <li>BOSTÄDER</li>          
                  </Link>

                  <Link to="/applications" onClick={toggleDropdown}>
                    <li>
                      ANSÖKNINGAR
                    </li>
                  </Link>

                  <Link to="/contact" onClick={toggleDropdown}> 
                    <li>KONTAKT</li>          
                  </Link>

                  <Link to="/terms" onClick={toggleDropdown}> 
                    <li>VILLKOR</li>          
                  </Link>

                  <Link to="/rentOut" onClick={toggleDropdown}> 
                    <li>HYR UT</li>          
                  </Link>

                  <Link to="/about" onClick={toggleDropdown}> 
                      <li>OM OSS</li>          
                  </Link>

                  <Link to="/" onClick={toggleDropdown}> 
                  <button className="mobile-dropdown-button  mainButton" onClick={logout}>LOGGA UT</button>
                  </Link>

              </nav>
              
                ) : (
                  // In not logged in
                      <nav>
                      <Link to="/login" onClick={toggleDropdown}> 
                        <li>MIN PROFIL</li>          
                      </Link>

                      <Link to="/" onClick={toggleDropdown}> 
                        <li>BOSTÄDER</li>          
                      </Link>

                      <Link to="/applications" onClick={toggleDropdown}>
                        <li>
                          ANSÖKNINGAR
                        </li>
                      </Link>

                      <Link to="/contact" onClick={toggleDropdown}> 
                        <li>KONTAKT</li>          
                      </Link>

                      <Link to="/terms" onClick={toggleDropdown}> 
                        <li>VILLKOR</li>          
                      </Link>

                      <Link to="/about" onClick={toggleDropdown}> 
                      <li>OM OSS</li>          
                      </Link>

                      <Link to="/rentOut" onClick={toggleDropdown}> 
                        <li>HYR UT</li>          
                      </Link>

                      <Link to="/signup" onClick={toggleDropdown}>
                        <li>REGISTRERA KONTO</li>
                      </Link>

                      {/* <Link to="/signup" onClick={toggleDropdown}>
                        <button className="mobile-dropdown-button mainButton">LOGGA UT</button>
                      </Link> */}

                      <Link to="/login" onClick={toggleDropdown}>
                        <button className="mobile-dropdown-button mainButton">LOGGA IN</button>
                      </Link>
                    </nav>
                )}
        </menu>

        {/*-- Hamburger --*/}
        <div className="mobile-nav-wrapper">
            <div className="navbarMobile">
                <div>
                  <Link to='/' ><img src={Logo} alt="StudyStay" className="link logo-img mobile-logo"/></Link>
                </div>
                    <div className={`hamburger ${isDropdownVisible ? 'active' : ''}`} onClick={toggleDropdown}>
                    <div className={`bar1 ${isDropdownVisible ? 'active' : ''}`}></div>
                    <div className={`bar2 ${isDropdownVisible ? 'active' : ''}`}></div>
                    <div className={`bar3 ${isDropdownVisible ? 'active' : ''}`}></div>
                </div>

            </div>
        </div>
        
      </nav>
    </>
  )
}

export default Navbar