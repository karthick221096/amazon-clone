import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product(props) {

   const [{basket}, dispatch] = useStateValue(); 
   const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
         type : 'ADD_TO_BASKET',
         item : {
            id : props.id,
            title : props.title,
            img : props.img,
            price : props.price,
            rating : props.rating
         }
      }
      )
   }
  return (
    <div className='product'>
       <div className='product__info'>
        <p>{props.title}</p>
        <p className='product__price'>
            <small>₹</small>
            <strong>{props.price}</strong>
        </p>
        <div className='product__rating'>
           {Array(props.rating)
              .fill()
              .map((_, i) => (
               <p key={i}>⭐</p>
            ))}
           
        </div>
       </div>
       <img
          className='product__image' 
          src={props.img}
          alt=''
       />
       <button className='product_addToBasket' onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product