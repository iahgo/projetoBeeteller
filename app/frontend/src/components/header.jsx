import '../styles/header.css';
import activity from '../icons/activity.svg';
import logobeeteller from '../icons/logobeeteller.svg';

function Header() {

  return (
    <div className="nav-top">
      <div className='nav-infos'>
        <div className='logos'>
          <nav className='logo-beeteller'>
            <nav className='logo-beeteller'><img src={logobeeteller} alt='logo'></img></nav>
          </nav>
          <nav className='divider'></nav>
          <nav className='cotacoes'>
            <nav className='t-cotacoes'>cotações</nav>
            <nav className='activity'>
              <nav className='v-activity'><img src={activity} alt='activity'></img></nav>
            </nav>
          </nav>
        </div>
        <div className='idioma'>EN</div>
      </div>
    </div>
);
}

export default Header;