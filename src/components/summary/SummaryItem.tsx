import { CartItem, useCart } from '@/context/CartContext'
import { useLocale, useTranslations } from 'next-intl'
import React, { FC } from 'react'
import NextImage from 'next/image'
import normalizePrice from '@/utils/normalizePrice'

const SummaryItem: FC<CartItem & { index: number }> = ({
  description,
  image,
  ingredients,
  name,
  price,
  quantity,
  index,
}) => {
  const { cartDispatch } = useCart()!
  const locale = useLocale()
  const t = useTranslations('Summary')
  const handleRemoveFromCart = () => {
    cartDispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        index,
      },
    })
  }
  return (
    <li className="flex items-center gap-3">
      <button
        className="p-2 border border-gray-400"
        onClick={handleRemoveFromCart}
      >
        {t('remove')}
      </button>
      <NextImage className='object-cover pb-4' src={image} alt={name} width={100} height={50} />
      <span className='text-4xl'>{quantity}</span>
      <span>x</span>
      <span className='text-xl font-bold'>{name}</span>
      <span className='underline text-md underline-offset-4'>{normalizePrice(price, locale)}</span>
    </li>
  )
}

export default SummaryItem
