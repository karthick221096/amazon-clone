import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    //pull the item from the basket
    const [{basket, user},dispatch] = useStateValue();
    return (
    <div className='chcekout'>
        <div className='Checkout__left'>
            <img
                className='checkout__add' 
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                alt=''
            />
            <div className='checkout__product'>
                <h3>{user?.email}</h3>
                <h2 className='checkout__title'>
                    Your Shopping Basket
                </h2>
                {basket.map(item =>
                    <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        img = {item.img}
                        price = {item.price}
                        rating = {item.rating}
                    />
                )}
            </div>

        </div>
        <div className='Checkout__right'>
            <h2>
                Your subtotal goes here
            </h2>
        </div>
    </div>
  )
}

export default Checkout