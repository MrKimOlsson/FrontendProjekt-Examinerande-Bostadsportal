import "../../utils/styles/details.scss"

const DetailsImages = ({ unit }: { unit: TResidentialUnit }) => {
    return (
      <>
      <div className="detailImagewrapper">
        <div className="largeImageContainer">
            <img className='detailImageLarge' src={unit?.imageURL[0]} alt="residentialImage" />
            <img className='detailImageLarge' src={unit?.imageURL[1]} alt="residentialImage" />
        </div>
        <div className="smallImageContainer">
            <img className='detailImageSmall' src={unit?.imageURL[2]} alt="residentialImage" />
            <img className='detailImageSmall' src={unit?.imageURL[3]} alt="residentialImage" />
        </div> 
      </div>
        {/* Rest of your component */}
      </>
    )
  }

export default DetailsImages