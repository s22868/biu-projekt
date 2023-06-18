'use client'
import React, { FC } from 'react'
import { useCart } from '@/context/CartContext'
import NextImage from 'next/image'
import normalizePrice from '@/utils/normalizePrice'
import { useLocale } from 'next-intl'

const Summary: FC = () => {
  const { cartState } = useCart()!
  const locale = useLocale()

  return (
    <div className="p-4">
      <div className="flex items-center">
        <NextImage width={90} height={50} src="/images/cart.png" alt="Cart" />
        <div className="text-5xl font-bold text-gray-800">Your order</div>
      </div>
      {cartState.cartItems.map((item, index) => (
        <div key={index}>
          {item.name} x {item.quantity}--{' '}
          {normalizePrice(item.price / item.quantity, locale)} x {item.quantity}{' '}
          = {normalizePrice(item.price, locale)}
        </div>
      ))}
    </div>
  )
}

export default Summary
