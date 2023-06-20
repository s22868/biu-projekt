'use client'
import Logo from '@/components/icons/Logo'
import { useLocale, useTranslations } from 'next-intl'
import React, { FC, useState } from 'react'
import NextImage from 'next/image'
import normalizePrice from '@/utils/normalizePrice'
import { useRouter } from 'next-intl/client'
import { useCart } from '@/context/CartContext'
import Modal from '@/components/modal/Modal'
import NumPad from '@/components/numpad/NumPad'

const Checkout: FC<{ totalPrice: number }> = ({ totalPrice }) => {
  const [showModal, setShowModal] = useState(false)
  const [tableNumber, setTableNumber] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<
    'pay-here' | 'at-counter' | null
  >()
  const t = useTranslations('Checkout')
  const { cartState } = useCart()!
  const locale = useLocale()
  const router = useRouter()

  return (
    <div className="container flex flex-col items-center justify-between h-screen mx-auto my-auto p-14">
      <div className="flex items-center justify-center">
        <Logo size="lg" />
      </div>
      <h1 className="w-full max-w-lg mx-auto my-8 text-6xl text-center">
        {t('select payment method')}
      </h1>
      <div className="flex gap-6">
        <PaymentMethod
          type="pay-here"
          onClick={() => {
            if (cartState.deliveryOption === 'eat-in') {
              setShowModal(true)
              setPaymentMethod('pay-here')
            } else {
              router.push('/checkout/payment')
            }
          }}
        />
        <PaymentMethod
          type="at-counter"
          onClick={() => {
            if (cartState.deliveryOption === 'eat-in') {
              setShowModal(true)
              setPaymentMethod('at-counter')
            } else {
              router.push('/thank-you')
            }
          }}
        />
      </div>
      <div>
        <h2 className="font-bold text-center">
          {t('total')} : {normalizePrice(totalPrice, locale)}
        </h2>
      </div>
      {showModal && (
        <Modal close={() => setShowModal(false)}>
          <div className="p-8">
            <div className="py-4 text-2xl">Podaj numer stolika</div>
            <div className="">
              <NumPad value={tableNumber} setValue={setTableNumber} />
            </div>
            <div className="flex flex-col float-left w-full gap-2 py-4">
              <button
                onClick={() =>
                  router.push(
                    paymentMethod === 'pay-here'
                      ? '/checkout/payment'
                      : '/thank-you'
                  )
                }
                className="h-12 border border-gray-400 bg-primary hover:bg-primary-light"
              >
                OK
              </button>
            </div>
            <button
              onClick={() =>
                router.push(
                  paymentMethod === 'pay-here'
                    ? '/checkout/payment'
                    : '/thank-you'
                )
              }
              className="w-full h-12 border border-gray-400 hover:bg-gray-50"
            >
              {t('pickup-at-checkout')}
            </button>
          </div>
        </Modal>
      )}
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
