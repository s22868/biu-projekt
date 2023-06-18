'use client'
import { MenuItem } from '@/db'
import React, { FC } from 'react'
import NextImage from 'next/image'
const Product: FC<MenuItem> = ({
  description,
  image,
  ingredients,
  name,
  price,
}) => {
  return (
    <li>
      <button className="w-full p-4 border border-gray-400">
        <div className="relative w-full aspect-[10/8]">
          <NextImage src={image} fill alt={name} />
        </div>

        <h2 className="font-bold">{name}</h2>
        <p>{price}</p>
      </button>
    </li>
  )
}

export default Product
