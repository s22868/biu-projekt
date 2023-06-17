import { NextResponse } from 'next/server'
import { Category, menu } from '@/db'

export async function GET(
  request: Request,
  { params }: { params: { category: Category & 'home' } }
) {
  const { category } = params

  if (category === 'home') {
    return NextResponse.json(menu.hamburger)
  }

  return NextResponse.json(menu[category])
}
