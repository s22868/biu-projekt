'use client'
import Logo from '@/components/icons/Logo'
import { useCart } from '@/context/CartContext'
import React, { FC } from 'react'
import NextImage from 'next/image'

interface WelcomeProps {
  hide: () => void
}

const Welcome: FC<WelcomeProps> = ({ hide }) => {
  const { cartDispatch } = useCart()!

  return (
    <div className="container flex flex-col items-center justify-between h-screen mx-auto my-auto p-14">
      <div className="flex items-center justify-center">
        <Logo size="sm" />
      </div>
      <h1 className="w-full max-w-md mx-auto my-8 text-6xl text-center">
        Gdzie będziesz dzisiaj jadł?
      </h1>
      <div className="flex gap-6">
        <DeliveryOption
          type="eat-in"
          onClick={() => {
            cartDispatch({ type: 'SET_DELIVERY_OPTION', payload: 'eat-in' })
            hide()
          }}
        />

        <DeliveryOption
          type="take-away"
          onClick={() => {
            cartDispatch({ type: 'SET_DELIVERY_OPTION', payload: 'take-away' })
            hide()
          }}
        />
      </div>
      <div>
        <h2 className="text-center">Language</h2>
        <div className="flex gap-4 p-4">
          <button className="p-2 border border-primary">Polski</button>
          <button className="p-2 border border-gray-400 cursor-not-allowed">
            Angielski
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome

interface DeliveryOptionProps {
  type: 'eat-in' | 'take-away'
  onClick: () => void
}

const DeliveryOption: FC<DeliveryOptionProps> = ({ onClick, type }) => {
  return (
    <button
      className="flex flex-col items-center gap-2 py-4 transition-colors border border-gray-500 hover:border-primary active:bg-gray-200 w-[260px]"
      onClick={onClick}
    >
      <h4 className="text-2xl font-light tracking-wider">
        {type === 'eat-in' ? 'Na miejscu' : 'Na wynos'}
      </h4>
      <NextImage
        src={`/images/${type}.png`}
        className="max-w-xs px-4 max-h-56"
        alt={type}
        width={type === 'eat-in' ? 240 : 190}
        height={200}
      />
    </button>
  )
}
