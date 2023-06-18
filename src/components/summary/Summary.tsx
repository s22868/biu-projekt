'use client'
import React, { FC } from 'react'
import { useCart } from '@/context/CartContext'
import NextImage from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import SummaryItem from '@/components/summary/SummaryItem'
import Link from 'next-intl/link'
import normalizePrice from '@/utils/normalizePrice'

const Summary: FC = () => {
  const { cartState } = useCart()!
  const t = useTranslations('Summary')
  const locale = useLocale()
  const totalPrice = cartState.cartItems.reduce(
    (acc, { price }) => price + acc,
    0
  )

  return (
    <div className="flex flex-col h-screen px-4 py-6">
      <div className="flex items-center">
        <NextImage width={90} height={50} src="/images/cart.png" alt="Cart" />
        <div className="text-5xl font-bold text-gray-800">
          {t('your order')}
        </div>
      </div>
      <ul className="flex flex-col gap-3 list-none">
        {cartState.cartItems.map((item, index) => (
          <SummaryItem key={index} index={index} {...item} />
        ))}
      </ul>
      <div className="self-end my-4 mt-auto">
        <p className="text-2xl font-medium">
          {t('sub total')} : {normalizePrice(totalPrice * 0.76, locale)}
        </p>
        <p className="text-2xl font-medium">
          {t('tax')} : {normalizePrice(totalPrice * 0.24, locale)}
        </p>
        <span className="text-4xl font-bold">
          {t('total')} : {normalizePrice(totalPrice, locale)}
        </span>
      </div>
      <div className="flex gap-4">
        <Link
          href="/menu/hamburger"
          className="flex-[1] border border-gray-400 h-14 hover:bg-gray-100 flex items-center justify-center font-medium tracking-wider"
        >
          {t('order more')}
        </Link>
        <Link
          href="/"
          className="border border-gray-400 flex-[2] h-14 bg-primary hover:bg-primary-light flex items-center justify-center font-medium tracking-wider"
        >
          {t('confirm')}
        </Link>
      </div>
    </div>
  )
}

export default Summary
