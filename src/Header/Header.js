
import './Header.scss'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to='/'>
            <img className='logo' data-test='logo' src={logo} alt='Logo states Daily Insights'></img>
        </Link>
    </div>
  )
}

export default Header
