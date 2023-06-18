'use client'
import Product from '@/components/products/Product'
import { useCart } from '@/context/CartContext'
import { Category, MenuItem } from '@/db'
import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import React, { FC } from 'react'

interface ProductsPageProps {
  products: MenuItem[]
  category: Category
}

const ProductsPage: FC<ProductsPageProps> = ({ category, products }) => {
  const { cartState } = useCart()!

  const cartPrice = cartState.cartItems
    .reduce((acc, { price }) => price + acc, 0)
    .toFixed(2)

  const t = useTranslations('ProductsPage')
  return (
    <div className="h-screen px-16 py-4 overflow-y-scroll no-scrollbar ">
      <h1 className="text-6xl font-bold text-gray-800">
        {t(category)} --- {cartPrice}
      </h1>
      <Link href="/your-order">Cart</Link>
      <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-stretch-center">
        {products.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
