import './header.scss'

const NavBar = () => {
    return (
        <div className='navigation'>
            <div className="wrapper">
                <ul className='navigation__list'>
                    <li><a href="#">Каталог ножей</a></li>
                    <li><a href="#">Разделочные ножи</a></li>
                    <li><a href="#">Ножи складные</a></li>
                    <li><a href="#">Среднеклинковое оружие</a></li>
                    <li><a href="#">Туристические ножи</a></li>
                </ul>
            </div>
        </div>
    )
        
    
}

export default NavBar;