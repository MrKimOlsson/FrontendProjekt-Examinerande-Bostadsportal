import { NavLink } from 'react-router-dom'
import '../../utils/styles/footer.scss'
// import SocialIcons from './SocialIcons';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';


const Footer = () => {

  return (
    <>
    {/* <footer>

      <div className='footer-wrapper'>
        <div className='footer-content'>
          <ul className="footer-menu">
              <p className='footer-menu-title'>Stöd</p>
              <li><NavLink className='nav-link' to='*'>Hjälpcenter</NavLink></li>
              <li><NavLink className='nav-link' to='*'>StudyStayCover</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Antidiskriminering</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Stöd för funktionsnedsättning</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Avbokningsalternativ</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Rapportera grannskapsproblem</NavLink></li>
          </ul>
        </div>
        <div className='footer-content'>
          <ul className="footer-menu">
              <p className='footer-menu-title'>Värdskap</p>
              <li><NavLink className='nav-link' to='*'>Hyr ut ditt boende på StudyStay</NavLink></li>
              <li><NavLink className='nav-link' to='*'>StudyStayCover för värdar</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Värdresurser</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Community-forum</NavLink></li>
          </ul>
        </div>
        <div className='footer-content'>
          <ul className="footer-menu">
              <p className='footer-menu-title'>StudyStay</p>
              <li><NavLink className='nav-link' to='*'>pressrum</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Nya funktioner</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Lediga tjänster</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Investerare</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Nödboenden med StudyStay</NavLink></li>
          </ul>
        </div>

      </div>
      <div className='footer-bottom'>
        <div className='text'> 
          <li><NavLink className='nav-link' to='*'>&#169; 2023 StudyStay AB</NavLink></li>
          <li><NavLink className='nav-link' to='*'>Integritet</NavLink></li>
          <li><NavLink className='nav-link' to='*'>Villkor</NavLink></li>                
          <li><NavLink className='nav-link' to='*'>Sajtkarta</NavLink></li>                
          <li><NavLink className='nav-link' to='*'>Företagsuppgifter</NavLink></li>                
        </div>
        <div className='social-icons'>
        <SocialIcons />
        </div>
      </div>
    
    </footer> */}



<footer>
      <div className="footer-wrapper">
        <div className="footer-section-wrapper">
          <div className="section">
            <h3>Stöd</h3>
            <ul>
              <li><NavLink className='nav-link' to='*'>Hjälpcenter</NavLink></li>
              <li><NavLink className='nav-link' to='*'>StudyStayCover</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Antidiskriminering</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Stöd för funktionsnedsättning</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Avbokningsalternativ</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Rapportera grannskapsproblem</NavLink></li>
            </ul>
          </div>
          <div className="section">
            <h3>Värdskap</h3>
            <ul>
              <li><NavLink className='nav-link' to='*'>Hyr ut ditt boende på StudyStay</NavLink></li>
              <li><NavLink className='nav-link' to='*'>StudyStayCover för värdar</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Värdresurser</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Community-forum</NavLink></li>
            </ul>
          </div>
          <div className="section">
            <h3>StudyStay</h3>
            <ul>
              <li><NavLink className='nav-link' to='*'>pressrum</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Nya funktioner</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Lediga tjänster</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Investerare</NavLink></li>
              <li><NavLink className='nav-link' to='*'>Nödboenden med StudyStay</NavLink></li>
            </ul>
          </div>
        </div>
        <div className='border'></div>
        <div className="footer-bottom">
          <div className="footer-bottom-wrapper">
            <p className="company">© 2023 StudyStay AB.</p>
            <div className="dot"></div>
            <p>Integritet</p>
            <div className="dot"></div>
            <p>Villkor</p>
            <div className="dot"></div>
            <p>Sajtkarta</p>
            <div className="dot"></div>
            <p>Företagsuppgifter</p>
          </div>
          <div className="social-icons">
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer