import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products = useSelector(state=>state.cart)
  const dispatch = useDispatch()           //if we need to change the store then we have to dispatch the action
  const handleDelete=(itemId)=>{
    dispatch(remove(itemId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map((item)=>(
            <div className='cartCard'>
              <img key={item.id} src={item.image} alt="" />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button onClick={()=>handleDelete(item.id)} className='btn'>Remove</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart