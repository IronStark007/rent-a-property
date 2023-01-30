import './Header.css';
import data from '../../data.json';


const Header = ({setFilter, setProperty}) => {

  const logoHandler = e => {
    e.preventDefault();
    setFilter("any");
    setProperty(data);
  }
  return (
    <div className='header'>
        <div className='header-title pointer' onClick={logoHandler}>Estatery</div>
        <ul className='header-menu'>
            <li className='pointer'>Rent</li>
            <li className='pointer'>Buy</li>
            <li className='pointer'>Sell</li>
            <li className='pointer'><select defaultValue={'default'}>
              <option value={'default'}>Manage Property</option></select></li>
            <li className='pointer'><select defaultValue={'default'}>
              <option value={'default'}>Resources</option></select></li>
        </ul>
        <form className='header-auth'>
            <button type={'submit'} className='login pointer'>Login</button>
            <button type={'submit'} className='signup pointer'>SignUp</button>
        </form>
    </div>
  )
}

export default Header;