'use client'
import Logo from '@/components/icons/Logo'
import classNames from 'classnames'
import { useLocale, useTranslations } from 'next-intl'
import React, { FC } from 'react'
import NextImage from 'next/image'
import normalizePrice from '@/utils/normalizePrice'

const Checkout: FC<{ totalPrice: number }> = ({ totalPrice }) => {
  const t = useTranslations('Checkout')
  const locale = useLocale()
  return (
    <div className="container flex flex-col items-center justify-between h-screen mx-auto my-auto p-14">
      <div className="flex items-center justify-center">
        <Logo size="sm" />
      </div>
      <h1 className="w-full max-w-lg mx-auto my-8 text-6xl text-center">
        {t('select payment method')}
      </h1>
      <div className="flex gap-6">
        <PaymentMethod type="pay-here" onClick={() => {}} />
        <PaymentMethod type="at-counter" onClick={() => {}} />
      </div>
      <div>
        <h2 className="font-bold text-center">
          {t('total')} : {normalizePrice(totalPrice, locale)}
        </h2>
      </div>
    </div>
  )
}

export default Checkout

interface PaymentMethodProps {
  type: 'pay-here' | 'at-counter'
  onClick: () => void
}

const PaymentMethod: FC<PaymentMethodProps> = ({ onClick, type }) => {
  const t = useTranslations('Checkout')
  return (
    <button
      className="flex flex-col items-center gap-2 py-4 transition-colors border border-gray-500 hover:border-primary active:bg-gray-200 w-[260px] "
      onClick={onClick}
    >
      <h4 className="text-2xl font-light tracking-wider">
        {type === 'pay-here' ? t('pay-here') : t('at-counter')}
      </h4>
      <NextImage
        src={`/images/${type}.png`}
        className="max-w-xs px-4 max-h-56"
        alt={type}
        width={type === 'pay-here' ? 200 : 240}
        height={200}
      />
    </button>
  )
}
