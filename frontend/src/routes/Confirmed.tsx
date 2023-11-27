// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import '../utils/styles/confirmed.scss'
// import { useEffect, useState } from 'react';
// import { getUnit } from '../api/getUnit';
import ConfirmedInfo from '../components/confirmed/ConfirmedInfo';
// import ConfirmedText from '../components/confirmed/ConfirmedText';
import ConfirmedHero from '../components/confirmed/ConfirmedHero';



const Confirmed = () => {

  const location = useLocation();
    const unit = location.state.unit;

    console.log(unit)

    // const { unitType, unitId } = useParams()
    // console.log("unit type:");
    // console.log(unitType);
    // console.log("unit id:");
    // console.log(unitId);


  // const [unit, setUnit] = useState<TResidentialUnit>();

  // useEffect(() => {
  //   async function fetchUnit() {
  //     console.log('unit type: '+ unitType)
  //     const newUnit = await getUnit(unitId || '', unitType || '');
  //     setUnit(newUnit);
  //   }
  //   fetchUnit();
  // }, [unitId]);

  // console.log("unit:")
  // console.log(unit)

  return (

      <div className="container">
            <ConfirmedHero />
            {/* <ConfirmedText/> */}
            <ConfirmedInfo unit={unit}/>

        </div>
  );
};

export default Confirmed;