import './header.scss'

const NavBar = () => {
    return (
        <div className='navigation'>
            <div className="wrapper">
                <ul className='navigation__list'>
                    <li><a href="#">Каталог ножей</a></li>
                    <li><a href="#">Разделочные ножи</a></li>
                    <li><a href="#">Ножи складные</a></li>
                    <li><a href="#">Кухонные ножи</a></li>
                    <li><a href="#">Тактического назначения</a></li>
                    <li><a href="#">Мачете и кукри</a></li>
                </ul>
            </div>
        </div>
    )
        
    
}

export default NavBar;