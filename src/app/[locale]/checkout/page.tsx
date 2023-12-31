'use client'
import Checkout from '@/components/checkout/Checkout'
import { redirect, useSearchParams } from 'next/navigation'
import React, { FC, useLayoutEffect } from 'react'

const Page: FC = () => {
  const params = useSearchParams()
  const totalPrice = Number(params.get('totalPrice'))

  // useLayoutEffect(() => {
  // }, [totalPrice])
  if (!totalPrice || isNaN(totalPrice)) redirect('/')

  return <Checkout totalPrice={totalPrice} />
}

export default Page
