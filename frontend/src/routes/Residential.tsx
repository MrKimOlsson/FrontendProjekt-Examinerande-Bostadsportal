import { useEffect, useState } from "react";
import { getUnit } from "../api/getUnit";
import { useParams } from "react-router-dom";
import DetailsImages from "../components/residentialDetails/DetailsImages";
import DetailsInfo from "../components/residentialDetails/DetailsInfo";
import ImageRow from "../components/residentialDetails/ImageRow";
import DetailsText from "../components/residentialDetails/DetailsText";
import DetailsMobileImage from "../components/residentialDetails/DetailsMobileImage";


const Residential = () => {

  const { unitType, id } = useParams();

  const [unit, setUnit] = useState<TResidentialUnit>();

  useEffect(() => {
    async function fetchUnit() {
      console.log('unit type: '+ unitType)
      const newUnit = await getUnit(id || '', unitType || '');
      setUnit(newUnit);
    }
    fetchUnit();
  }, [id]);

  console.log(unit)
  return (
    <div className="container">

      {/* Images */}
      {unit ? (
      <DetailsImages unit={unit}/>
      ) : (
        <p>No residential unit available</p>
      )}

      {unit ? (
      <DetailsMobileImage unit={unit}/>
      ) : (
        <p>No residential unit available</p>
      )}

      {/* Short info row */}
      {unit ? (
      <DetailsInfo unit={unit}/>
      ) : (
        <p>No residential unit available</p>
      )}

      {/* Small image row */}
      {unit ? (
      <ImageRow unit={unit}/>
      ) : (
        <p>No residential unit available</p>
      )}

      {/* Info text */}
      {unit ? (
      <DetailsText unit={unit}/>
      ) : (
        <p>No residential unit available</p>
      )}
   
    </div>
  )
}

export default Residential