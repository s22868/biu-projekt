'use client'
import { MenuItem } from '@/db'
import React, { FC, useEffect, useState } from 'react'
import NextImage from 'next/image'
import Modal from '@/components/modal/Modal'
import { useCart } from '@/context/CartContext'
import { useLocale, useTranslations } from 'next-intl'
import normalizePrice from '@/utils/normalizePrice'

const Product: FC<MenuItem> = ({
  description,
  image,
  ingredients,
  name,
  price,
}) => {
  const t = useTranslations('Product')
  const [showModal, setShowModal] = useState(false)
  const { cartDispatch } = useCart()!
  const [quantity, setQuantity] = useState(1)

  const closeModal = () => {
    setShowModal(false)
    setQuantity(1)
  }
  const handleAddToCart = () => {
    cartDispatch({
      type: 'ADD_TO_CART',
      payload: {
        quantity,
        description,
        image,
        ingredients,
        name,
        price: price * quantity,
      },
    })
    closeModal()
  }

  const locale = useLocale()

  return (
    <li>
      <button
        onClick={() => setShowModal(true)}
        className="w-full p-4 font-medium tracking-wider border border-gray-400"
      >
        <div className="relative w-full aspect-[10/8]">
          <NextImage src={image} fill sizes="100vw" alt={name} />
        </div>

        <h2 className="font-bold">{name}</h2>
        <p>{normalizePrice(price, locale)}</p>
      </button>
      {showModal && (
        <Modal close={closeModal}>
          <div className="w-[450px] p-4 text-center">
            <div className="relative w-full aspect-[10/8]">
              <NextImage src={image} sizes="100vw" fill alt={name} />
            </div>
            <h2 className="font-bold">{name}</h2>
            <p>{normalizePrice(price * quantity, locale)}</p>
            <div className="flex items-center justify-center gap-1">
              <button
                disabled={quantity === 1}
                onClick={() => setQuantity((prev) => --prev)}
                className="font-medium tracking-wider border border-gray-400 h-14 w-14 disabled:cursor-not-allowed hover:bg-gray-50 disabled:bg-gray-300"
              >
                -
              </button>
              <input
                min={1}
                max={10}
                disabled
                className="text-xl text-center border border-gray-400 h-14"
                value={quantity}
              />
              <button
                disabled={quantity === 10}
                onClick={() => setQuantity((prev) => ++prev)}
                className="font-medium tracking-wider border border-gray-400 h-14 w-14 disabled:cursor-not-allowed hover:bg-gray-50 disabled:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-4 p-1 h-14">
            <button
              onClick={closeModal}
              className="flex-1 font-medium tracking-wider border border-gray-400 hover:bg-gray-100"
            >
              {t('cancel')}
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 font-medium tracking-wider border border-gray-400 bg-primary hover:bg-primary-light"
            >
              {t('add')}
            </button>
          </div>
        </Modal>
      )}
    </li>
  )
}

export default Product
