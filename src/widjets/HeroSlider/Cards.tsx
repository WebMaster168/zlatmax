import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'
import card4 from '../../assets/card4.png'

const Cards = () => {
    return(
        <div className="cards__inner">
            <div className="cards__item">
                <img src={card1} alt="" />
                <p>Гарантия 100% возврата денежных средств</p>
            </div>
            <div className="cards__item">
                <img src={card2} alt="" />
                <p>Доставка по России, Казахстану и Белоруссии</p>
            </div>
            <div className="cards__item">
                <img src={card3} alt="" />
                <p>Возможность оформление заказа без регистрации.</p>
            </div>
            <div className="cards__item">
                <img src={card4} alt="" />
                <p>Скидки постоянным покупателям. </p>
            </div>
        </div>
    )
}

export default Cards 