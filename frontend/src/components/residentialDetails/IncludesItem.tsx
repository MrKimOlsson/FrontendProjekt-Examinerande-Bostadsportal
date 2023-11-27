import { AiOutlineWifi } from 'react-icons/ai';
import { MdBalcony, MdOutlineYard } from 'react-icons/md';
import { TbGrill, TbToolsKitchen2 } from 'react-icons/tb';
import { PiElevator, PiTelevision } from 'react-icons/pi';
import { GiDesk } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import { CgGym } from 'react-icons/cg';

import { BiSolidWasher } from 'react-icons/bi';
import { FaCar } from 'react-icons/fa';


type IncludeItemProps = {
  include: string | null,
}

const IncludeItem = ({ include }: IncludeItemProps) => {
  let icon = null; // Initialize icon as null

//   Show different icon depending on the includes string.
  switch (include) {
    case "Washingmachine":
      icon = <BiSolidWasher />;
      include = "Tvättmaskin"
      break;
    case "Parking":
      icon = <FaCar />;
      include = "Parkering"
      break;
    case "Wifi":
      icon = <AiOutlineWifi />;
      break;
    case "Balcony":
      icon = <MdBalcony />;
      include = "Balkong"
      break;
    case "Yard":
      icon = <MdOutlineYard />;
      include = "Uteplats"
      break;
    case "Grill":
      icon = <TbGrill />;
      break;
    case "Elevator":
      icon = <PiElevator />;
      include = "Hiss"
      break;
    case "Kitchen":
      icon = <TbToolsKitchen2 />;
      include = "Kök"
      break;
    case "Tv":
      icon = <PiTelevision />;
      break;
    case "Desk":
      icon = <GiDesk />;
      include = "Dedikerad arbetsyta"
      break;
    case "Ac":
      icon = <TbAirConditioning />;
      include = "Luftkonditionering"
      break;
    case "Gym":
      icon = <CgGym />;
      break;
    default:
      break;
  }

  return (
  
      <div className='includes-item'>
        <p className='icon'>{icon}</p> {/* Render the selected icon */}
        <p>{include}</p>
  

    </div>
  );
}

export default IncludeItem;
