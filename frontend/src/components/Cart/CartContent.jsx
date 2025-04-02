import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";

const CartContent = () => {

    const cartProducts=[
        {
        productId:1,
        name:"T-shirt",
        size:"M",
        color:"red",
        quantity:11,
        price:399,
        image:"https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_640.png"
    },
    {
        productId:2,
        name:"Shirt",
        size:"M",
        color:"yellow",
        quantity:11,
        price:3999,
        image:"https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_640.png"
    }
];
  return (
    <div>{cartProducts.map((product,index)=>(
            <div key={index} className='flex items-start justify-between py-4 border-b'>
                <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded'/>
              <div><h3> {product.name}</h3><p className='text-sm text-gray-500'> size:{product.size} | color: {product.color}</p>
              <div className='flex items-center mt-2 '>
                <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                <span className='mx-4'>{product.quantity}</span>
                <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                
              </div>
              </div>
<div>
    <p>₹ :{product.price}</p>
    <button className='h-6 w-6 mt-2 text-red-600'>
    <RiDeleteBinLine />
    </button>
</div>
            </div>
    ))
        }</div>
  )
}

export default CartContent