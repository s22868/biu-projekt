'use client'
import { ProductIngredient } from '@/db'
import { ingredients as ingredientsPhotos } from '@/db'
import { useTranslations } from 'next-intl'
import NextImage from 'next/image'
import React, { FC, useRef } from 'react'

const Ingredient: FC<
  ProductIngredient & {
    changeIngredientQuantity: (name: string, quantity: number) => void
  }
> = ({ name, quantity: initQuantity, changeIngredientQuantity }) => {
  const quantity = useRef(initQuantity)

  const increaseQuantity = () => {
    quantity.current += 1
    changeIngredientQuantity(name, quantity.current)
  }
  const decreaseQuantity = () => {
    quantity.current -= 1
    changeIngredientQuantity(name, quantity.current)
  }

  const t = useTranslations('Ingredients')
  return (
    <div className="flex items-center justify-center">
      <button
        disabled={quantity.current === 0}
        onClick={decreaseQuantity}
        className="flex items-center justify-center w-8 h-8 mx-2 font-medium tracking-wider border border-gray-400 disabled:cursor-not-allowed hover:bg-gray-50 disabled:bg-gray-300"
      >
        -
      </button>
      <p>{t(name)}</p>
      <div className="relative w-1/6 aspect-[10/8]">
        <NextImage
          fill
          sizes="100vw"
          src={ingredientsPhotos[name]?.photo}
          alt={name}
        />
      </div>

      <p>{quantity?.current}x</p>
      <button
        disabled={quantity.current === 10}
        onClick={increaseQuantity}
        className="flex items-center justify-center w-8 h-8 mx-2 font-medium tracking-wider border border-gray-400 disabled:cursor-not-allowed hover:bg-gray-50 disabled:bg-gray-300"
      >
        +
      </button>
    </div>
  )
}

export default Ingredient
