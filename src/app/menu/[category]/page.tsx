import { Category } from '@/db'
import React from 'react'

const GetCategoryItems = async (category: Category) => {
  const res = await fetch(`http://localhost:3000/api/menu/${category}`)
  const data = await res.json()
  return { ...data }
}

export default async function Page({
  params,
}: {
  params: { category: Category }
}) {
  const items = await GetCategoryItems(params.category)
  console.log(items)
  return <div> {params.category}</div>
}
