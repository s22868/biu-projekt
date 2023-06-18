'use client'
import Logo from '@/components/icons/Logo'
import { useCart } from '@/context/CartContext'
import React, { FC } from 'react'
import NextImage from 'next/image'
import { useRouter } from 'next-intl/client'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import classNames from 'classnames'

const Welcome: FC = () => {
  const { cartDispatch } = useCart()!
  const t = useTranslations('Welcome')
  const locale = useLocale()
  const router = useRouter()

  console.log(locale)

  const handleOnClick = (type: 'eat-in' | 'take-away') => {
    cartDispatch({ type: 'SET_DELIVERY_OPTION', payload: type })
    router.push('/menu/home')
  }

  return (
    <div className="container flex flex-col items-center justify-between h-screen mx-auto my-auto p-14">
      <div className="flex items-center justify-center">
        <Logo size="sm" />
      </div>
      <h1 className="w-full max-w-md mx-auto my-8 text-6xl text-center">
        {t('header')}
      </h1>
      <div className="flex gap-6">
        <DeliveryOption type="eat-in" onClick={() => handleOnClick('eat-in')} />

        <DeliveryOption
          type="take-away"
          onClick={() => handleOnClick('take-away')}
        />
      </div>
      <div>
        <h2 className="text-center">{t('language')}</h2>
        <div className="flex gap-4 p-4">
          <Link href="/" locale="pl" className={classNames("p-2 border border-gray-400", {
            'border-primary': locale === 'pl',
          })}>
            {t('polish')}
          </Link>
          <Link
            href="/"
            locale="en"
            className={classNames("p-2 border border-gray-400", {
              'border-primary': locale === 'en',
            })}
          >
            {t('english')}
          </Link>
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
  const t = useTranslations('Welcome')
  return (
    <button
      className="flex flex-col items-center gap-2 py-4 transition-colors border border-gray-500 hover:border-primary active:bg-gray-200 w-[260px]"
      onClick={onClick}
    >
      <h4 className="text-2xl font-light tracking-wider">
        {type === 'eat-in' ? t('eat-in') : t('take-away')}
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
