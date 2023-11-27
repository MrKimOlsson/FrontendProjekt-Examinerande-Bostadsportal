import Logo from '../assets/logo.png'
import '../utils/styles/logo.scss'

const SmallLogo = () => {
  return (
    <div className='smallLogo'>
        <img src={Logo} alt="StudyStay" className=""/>
    </div>
  )
}

export default SmallLogo