import '../../utils/styles/apply.scss';

interface Props {
  unit: TResidentialUnit | undefined
}

const ApplyText = ({ unit }: Props) => {


  return (
    <div className='textContainer'>
      <div className='applyText'>
        <h2>Ansök till {unit ? unit.street : ''}</h2>
      </div>
    </div>
  );
}

export default ApplyText;

