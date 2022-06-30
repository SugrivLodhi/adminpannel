import React from 'react'
import './Product.css'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
const Product = ({id,title,price,rating,specification,detail,image}) => {
  return (
    <div className='product'>
    <div className="info">
     <Link to ={`/products/${id}`} className ='title'>
     <p>{title}</p>
     </Link>
      
      <p>
       <strong>$</strong>
       <strong>{price}</strong>
      </p>
      <div className="rating">
        {Array(rating).fill().map((_,index)=> <p>*</p>)}
      </div>
    </div>
    <img src={image}/>
    <button>
    <i>
     <ShoppingCartIcon/>
    </i>
    add to cart
    </button>
</div>
  )
}

export default Product