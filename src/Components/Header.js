import "../Assets/CSS/MainLayout.css";
import Logo from '../Assets/Images/Bedating.png';

const Header = () => {
   return (
    <header>     
        <img src={Logo} className="logo" />
    </header>
    );
};

export default Header;