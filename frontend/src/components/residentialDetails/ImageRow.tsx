import "../../utils/styles/details.scss"

const ImageRow = ({ unit }: { unit: TResidentialUnit }) => {
    return (
      <>
      <div className="ImageRow">
            <img className='rowItem' src={unit?.imageURL[4]} alt="residentialImage" />
            <img className='rowItem' src={unit?.imageURL[5]} alt="residentialImage" />
            <img className='rowItem' src={unit?.imageURL[6]} alt="residentialImage" />
            <img className='rowItem' src={unit?.imageURL[7]} alt="residentialImage" />
            {/* <img className='rowItem' src={unit?.imageURL[8]} alt="residentialImage" />
            <img className='rowItem' src={unit?.imageURL[9]} alt="residentialImage" /> */}
      </div>
      </>
    )
  }

export default ImageRow