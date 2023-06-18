'use client'
import { useCart } from '@/context/CartContext'
import React, { FC } from 'react'

const Page: FC = () => {
  const { cartState } = useCart()!
  return (
    <div>
      <div>Your order</div>
      {cartState.cartItems.map((item, index) => (
        <div key={index}>
          {item.name} x {item.quantity}-- {item.price/item.quantity} x {item.quantity} = {item.price}
        </div>
      ))}
    </div>
  )
}

export default Page
