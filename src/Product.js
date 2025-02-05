import React from 'react'
import './Product.css'
//import GradeIcon from '@mui/icons-material/Grade';
import { useStateValue } from './StateProvider';
function Product({id,title,image,price,rating}) {
   const [{basket},dispatch] = useStateValue();
   console.log(basket);
  const addtocart =()=>{
    //dispatch item into the data layer
    dispatch
    ({
        type:"ADD_TO_CART",
        item:{
          id:id,
          title:title,
          image:image,
          price:price,
          rating:rating,
        }, 
    })
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p className='info'>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
          <div className='product__rating'>
            {Array (rating).fill().map (()=>(
              <p>⭐</p>
              ))}
          </div>
        </div>
        <img className='product__image' src ={image}/>
        <button className='product__button' onClick={addtocart}>Add to Cart</button>
    </div>
  )
}

export default Product