'use client'
import Product from '@/components/products/Product'
import { useCart } from '@/context/CartContext'
import { Category, MenuItem } from '@/db'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import React, { FC } from 'react'
import NextImage from 'next/image'
import normalizePrice from '@/utils/normalizePrice'
interface ProductsPageProps {
  products: MenuItem[]
  category: Category
}

const ProductsPage: FC<ProductsPageProps> = ({ category, products }) => {
  const { cartState } = useCart()!
  const locale = useLocale()

  const cartPrice = cartState.cartItems.reduce(
    (acc, { price }) => price + acc,
    0
  )

  const t = useTranslations('ProductsPage')
  return (
    <div className="h-screen px-16 py-4 overflow-y-scroll no-scrollbar ">
      <div className="flex justify-between">
        <h1 className="text-6xl font-bold text-gray-800">{t(category)}</h1>
        <Link href="/summary" className="flex items-center">
          <NextImage
            width={100}
            height={50}
            src="/images/cart.png"
            alt="Cart"
          />
          <span className="font-bold underline underline-offset-4">
            {normalizePrice(cartPrice, locale)}
          </span>
          <div className="flex items-center justify-center w-[150px] hover:bg-primary-light h-12 ml-4 border border-gray-400 bg-primary font-medium tracking-wider">
            {t('next')}
          </div>
        </Link>
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
