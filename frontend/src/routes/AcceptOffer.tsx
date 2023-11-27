import { useParams } from 'react-router-dom';
import AcceptOfferText from "../components/acceptOffer/AcceptOfferText";
import AcceptOfferInfo from "../components/acceptOffer/acceptOfferInfo";
import '../utils/styles/acceptOffer.scss'
import { useEffect, useState } from 'react';
import { getUnit } from '../api/getUnit';


const AcceptOffer = () => {

    const { unitType, unitId } = useParams()
    console.log("unit type:");
    console.log(unitType);
    console.log("unit id:");
    console.log(unitId);


  const [unit, setUnit] = useState<TResidentialUnit>();

  useEffect(() => {
    async function fetchUnit() {
      console.log('unit type: '+ unitType)
      const newUnit = await getUnit(unitId || '', unitType || '');
      setUnit(newUnit);
    }
    fetchUnit();
  }, [unitId]);

  console.log("unit:")
  console.log(unit)

  return (

      <div className="container">

            <AcceptOfferText/>
            <AcceptOfferInfo unit={unit}/>

        </div>
  );
};

export default AcceptOffer;