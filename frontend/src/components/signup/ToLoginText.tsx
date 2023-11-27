import { Link } from 'react-router-dom'
import '../../utils/styles/signup.scss'

const ToLoginText = () => {
  return (
    <div className='toLoginText'>
        <h4>Har du redan ett konto?</h4>
        <p><Link to={"/login"}>Klicka här</Link> för att logga in på ditt konto</p>
    </div>
  )
}

export default ToLoginText