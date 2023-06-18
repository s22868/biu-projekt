import ProductsPage from '@/components/products/ProductsPage'
import { Category, MenuItem } from '@/db'
import React from 'react'

const GetCategoryItems = async (category: Category) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL!}/api/menu/${category}`
  )
  const data = await res.json()
  return data
}

export default async function Page({
  params,
}: {
  params: { category: Category }
}) {
  const products: MenuItem[] = await GetCategoryItems(params.category)
  return <ProductsPage products={products} category={params.category} />
}
