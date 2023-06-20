'use client'
import Product from '@/components/products/Product'
import { useCart } from '@/context/CartContext'
import { Category, MenuItem } from '@/db'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import React, { FC, useCallback } from 'react'
import NextImage from 'next/image'
import normalizePrice from '@/utils/normalizePrice'
import classNames from 'classnames'
import { useRouter } from 'next-intl/client'
interface ProductsPageProps {
  products: MenuItem[]
  category: Category
}

const ProductsPage: FC<ProductsPageProps> = ({ category, products }) => {
  const { cartState, cartDispatch } = useCart()!
  const locale = useLocale()

  const router = useRouter()

  const cartPrice = cartState.cartItems.reduce(
    (acc, { price }) => price + acc,
    0
  )

  const t = useTranslations('ProductsPage')

  const cancelOrder = useCallback(() => {
    cartDispatch({ type: 'CLEAR_CART' })
    router.push('/')
  }, [cartDispatch, router])


  return (
    <div className="h-screen px-16 py-4 overflow-y-scroll no-scrollbar ">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-bold text-gray-800">{t(category)}</h1>
        <div className="flex items-center gap-4">
          <NextImage
            width={100}
            height={50}
            src="/images/cart.png"
            alt="Cart"
            className="relative left-6"
          />
          <span className="font-bold underline underline-offset-4">
            {normalizePrice(cartPrice, locale)}
          </span>
          <button
            onClick={cancelOrder}
            className="h-12 px-4 border border-gray-400 hover:bg-gray-100"
          >
            {t('clear')}
          </button>
          <Link
            href="/summary"
            className={classNames('flex items-center', {
              'pointer-events-none cursor-not-allowed': cartPrice === 0,
            })}
          >
            <div
              className={classNames(
                'flex items-center justify-center w-[150px] hover:bg-primary-light h-12 border border-gray-400 font-medium tracking-wider',
                {
                  'bg-gray-50': cartPrice === 0,
                  'bg-primary': cartPrice !== 0,
                }
              )}
            >
              {t('next')}
            </div>
          </Link>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-stretch-center">
        {products.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
