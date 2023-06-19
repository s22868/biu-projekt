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
  const tProduct = useTranslations('Product')
  const tIngredients = useTranslations('Ingredients')
  const handleRemoveFromCart = () => {
    cartDispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        index,
      },
    })
  }

  const extraIngredients =
    ingredients?.filter((ing) => ing.quantity !== 1) || []

  return (
    <li className="flex items-center gap-3">
      <button
        className="p-2 font-medium tracking-wider border border-gray-400"
        onClick={handleRemoveFromCart}
      >
        {t('remove')}
      </button>
      <div className="relative w-[100px] aspect-[10/6]">
        <NextImage
          src={image}
          className="object-cover object-[0%_75%] "
          sizes="100vw"
          fill
          alt={name}
        />
      </div>
      <span className="text-4xl">{quantity}</span>
      <span>x</span>
      <span className="text-xl font-bold">
        {tProduct(name)} {Boolean(extraIngredients.length) && '*'}
      </span>
      <span className="underline text-md underline-offset-4">
        {normalizePrice(price, locale)}
      </span>
      {Boolean(extraIngredients.length) && (
        <span className="flex gap-2 text-xs">
          (
          {extraIngredients.map((ing) => (
            <p className="font-bold" key={ing.name}>
              {tIngredients(ing.name)} x {ing.quantity}
            </p>
          ))}
          )
        </span>
      )}
    </li>
  )
}

export default SummaryItem
