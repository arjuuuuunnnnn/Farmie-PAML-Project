import './NavBar.css';
import profile from '../profile.png';

function NavBar() {
  return (
    <div className="nav">
      <div className='links'>
        <button className='link' onClick={() => window.location.href='/'} > Home </button>
        <button className='link' onClick={() => window.location.href='/my-info'} > My Data </button>
        <button className='link' onClick={() => window.location.href='http://localhost:8501/'} > Crop-Yield Estimator </button>
        <button className='link' onClick={() => window.location.href='http://127.0.0.1:5000'} > Plant Disease Detection </button>
        {/* <img src={profile} height='40' width='40' className='prof' onClick={() => window.location.href='/my-info'}/> */}
      </div>
    </div>
  );
}

export default NavBar;