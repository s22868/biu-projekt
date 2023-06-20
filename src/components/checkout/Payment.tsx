'use client'
import Logo from '@/components/icons/Logo'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next-intl/client'
import React, { FC, useEffect } from 'react'

const Payment: FC = () => {
  const t = useTranslations('Checkout')
  const router = useRouter()
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/thank-you?paid=true')
    }, 5000)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center p-14 gap-14">
      <div>
        <Logo size="lg" />
      </div>
      <div>
        <h1 className="text-4xl">{t('pin-pad')}</h1>
      </div>
    </div>
  )
}

export default Payment
