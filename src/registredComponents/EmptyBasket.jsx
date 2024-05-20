import EmptyBasketImg from '../assets/Image/RegistredImages/BasketImg.png'

export const EmptyBasket = () => {

    return <div className="emptyBasket">
        <h3>Tvoja korpa je prazna</h3>
        <img src={EmptyBasketImg} alt="" />
    </div>
}