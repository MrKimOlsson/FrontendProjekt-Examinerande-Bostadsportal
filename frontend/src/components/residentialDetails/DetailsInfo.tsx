import "../../utils/styles/details.scss"
import { GrMoney } from 'react-icons/gr';
import { IoBedOutline, IoTodayOutline } from 'react-icons/io5';
import { LuBox } from 'react-icons/lu';
import { BiMap } from 'react-icons/bi';
import { BsBuildings } from 'react-icons/bs';


const DetailsInfo = ({ unit }: { unit: TResidentialUnit }) => {

  return (
    <div className="DetailsInfoWrapper">
      <li className='item' id="mapIconItem"><BiMap id="mapIcon" className="filterIcons"/>{unit.street}</li>
      <div className='verticalDivider'></div>
      <li className='item'><GrMoney id="moneyIcon" className="filterIcons"/>{unit.rent}kr/månad</li>
      <div className='verticalDivider'></div>
      <li className='item'><IoBedOutline className="filterIcons"/>{unit.rooms} rum</li>
      <div className='verticalDivider'></div>
      <li className='item'><LuBox className="filterIcons"/>{unit.size}</li>
      <div className='verticalDivider'></div>
      <li className='item'><IoTodayOutline className="filterIcons"/>{unit.avalible}</li>
      <div className='verticalDivider'></div>
      <li className='item'><BsBuildings className="filterIcons"/>{unit.unitType}</li> 
    </div>
  )
}

export default DetailsInfo