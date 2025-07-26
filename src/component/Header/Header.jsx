import './Header.css'
import logo from '/src/assets/test.webp'
import inviteImg from '/src/assets/invitation.webp'

const Header = () => {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />

          <div className="header__logo-text">
            <h2>Рамшед ва Саида</h2>
          </div>
        </div>
        <div className='inviteBaner'>
        <div className='btnTop'></div>
          <img src={inviteImg} alt="img" />
          <div className='btnBtm'></div>
        </div>
      </header>
    );
};

export default Header;