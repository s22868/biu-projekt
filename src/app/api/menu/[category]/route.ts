import { NextResponse } from 'next/server'
import { Category, menu } from '@/db'

export async function GET(
  request: Request,
  { params }: { params: { category: Category } }
) {
  const { category } = params

  return NextResponse.json(Object.values(menu[category]))
}

export const revalidate = 5
