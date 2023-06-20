import { NextResponse } from 'next/server'
import { menu } from '@/db'

export async function GET() {
  return NextResponse.json(menu)
}

export const revalidate = 5