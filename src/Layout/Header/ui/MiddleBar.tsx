import logo from "./../../../assets/logo.png"
import search from "./../../../assets/search.png"
import favorite from "./../../../assets/favorite.png"
import cart from "./../../../assets/cart.png"
import React, { type JSX } from "react";
import './header.scss'

const MiddleBar = ():JSX.Element => {
    return(
        <div className="middleBar">
            <div className="wrapper wrapper--flex">
                <a className="logo" href="#">
                    <img src={logo} alt="logo" />
                </a>
                <div className="middleBar__search"
                >
                    <input type="text" placeholder="Поиск"
                    
                    />
                </div>
                <div className="middleBar__info">
                    <a href="#" className="middleBar__location">Москва</a>
                    <a href="#" className="middleBar__phone">
                        <p>8-800-777-49-67</p>  
                        <p className="middleBar__phoneText">Заказать звонок</p>
                    </a>
                    <a href="#" className="middleBar__favorite">
                        <img src={favorite} alt="" />
                    </a>
                    <div className="middleBar__cart">
                        <div className="middleBar__cartIcon">
                            <img src={cart} alt="" />
                            <p className="middleBar__cartNumber">0</p>
                        </div>
                        <div className="middleBar__cartRight">
                            <p className="middleBar__cartPrice">0 р.</p>
                            <a href="#" className="middleBar__cartConfirm">Оформить заказ</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default MiddleBar;

