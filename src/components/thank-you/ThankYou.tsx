'use client'
import Logo from '@/components/icons/Logo'
import { useCart } from '@/context/CartContext'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next-intl/client'
import { useSearchParams } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'

const ThankYou: FC = () => {
  const t = useTranslations('ThankYou')
  const { cartDispatch, cartState } = useCart()!
  const [pickupTime, setPickupTime] = useState('')
  const params = useSearchParams()

  const router = useRouter()
  const locale = useLocale()

  useEffect(() => {
    setTimeout(() => {
      cartDispatch({ type: 'CLEAR_CART' })
      router.push('/')
    }, 7000)
  }, [cartDispatch, router])

  useEffect(() => {
    const currentTime = new Date()

    const pickupTime = new Date(
      currentTime.getTime() +
        (Math.floor(Math.random() * (23 - 12 + 1)) + 12) * 60000
    ).toLocaleTimeString(locale)

    setPickupTime(pickupTime)
  }, [locale])

  const getMessage = () => {
    const isPaid = params.get('paid')
    const { deliveryOption } = cartState

    return isPaid
      ? deliveryOption === 'eat-in'
        ? t('localizator-paid')
        : t('at-counter-paid')
      : deliveryOption === 'eat-in'
      ? t('localizator-counter-pay')
      : t('at-counter-pay')
  }

  return (
    <div className="flex flex-col items-center justify-between h-screen py-24 text-center">
      <div className="flex flex-col items-center gap-14">
        <Logo />
        <div>
          <h2 className="text-xl">{t('header')}</h2>
          <h2>
            {t('pickup-time') + ': '}{' '}
            <span className="font-semibold">{pickupTime || 'xx:xx:xx'}</span>
          </h2>
        </div>
      </div>
      <div className="space-y-10">
        <h1 className="font-bold text-9xl">{t('thank-you')}</h1>

        <h3 className="max-w-xl mx-auto text-3xl">{getMessage()}</h3>
      </div>
      <div />
    </div>
  )
}

export default ThankYou
