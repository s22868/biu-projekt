'use client'
import Product from '@/components/products/Product'
import { Category, MenuItem } from '@/db'
import { useTranslations } from 'next-intl'
import React, { FC } from 'react'

interface ProductsPageProps {
  products: MenuItem[]
  category: Category
}

const ProductsPage: FC<ProductsPageProps> = ({ category, products }) => {
  const t = useTranslations('ProductsPage')
  return (
    <div className="h-screen px-16 py-4 overflow-y-scroll no-scrollbar ">
      <h1 className="text-6xl font-bold text-gray-800">{t(category)}</h1>
      <ul className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-stretch-center">
        {products.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
