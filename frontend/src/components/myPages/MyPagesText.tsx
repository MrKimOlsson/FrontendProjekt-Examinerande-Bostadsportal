import * as handleUsers from "../../api/handleUsers";
import Logo from '../../assets/logo.png'
import '../../utils/styles/myPages.scss'
import { useAuth } from "../../context/authContext";


const MyPagesText = () => {

  const { state } = useAuth();
  const { user } = state;


  async function logout() {
    try {
        await handleUsers.logout();
        window.location.href = '/';
    } catch (error) {
        console.error(error);
        alert(error);
    }
}

  return (

<div className='container'>

    <div className="infoCardContainer">
      <img src={Logo} alt="StudyStay" className="logoMyPages"/>
      <div className='infoCard'>
          <h4 className='title'>Användaruppgifter</h4>
          <div className='text'>
              <div>
              <p>Förnamn:</p>
              <p>Efternamn:</p>
              <p>Email:</p>
              </div>
              <div>
                <p>{user?.firstName}</p>
                <p>{user?.lastName}</p>
                <p>{user?.email}</p>
              </div>
          </div>
          <div className='buttons'>
            <button className="mainButton" onClick={logout}>LOGGA UT</button>  
          </div>
      </div>
    </div>
</div>
          
    
  )
}

export default MyPagesText