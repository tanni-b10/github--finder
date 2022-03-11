import spinner from './assests/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-200'>
      <img width ={180}
       className='text-centre mx-auto'
       src={spinner}
       alt="loading..." />
    </div>
  );
}

export default Spinner;
