import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../../utils/styles/navbar.scss'

const SocialIcons = () => {
  const facebookUrl = 'https://www.facebook.com/';
  const instagramUrl = 'https://www.instagram.com/';
  const linkedinUrl = 'https://www.linkedin.com/';

  return (
    <div className='social-icons'>
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;