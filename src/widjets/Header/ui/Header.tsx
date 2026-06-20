import MiddleBar from "./MiddleBar";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <TopBar />
                
            </div>
            <div className="header__middle">
                <MiddleBar />
            </div>
            <div className="header__bottom">
                <NavBar />
            </div>
        </header>
    )
        
    
}

export default Header;