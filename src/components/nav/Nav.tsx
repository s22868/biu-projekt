'use client'
import Logo from '@/components/icons/Logo'
import Category from '@/components/nav/Category'
import { Category as CategoryEnum } from '@/db'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import React, { FC } from 'react'

const icons = [
  {
    name: 'hamburger',
    icon: '/images/big-mac.png',
  },
  {
    name: 'fries',
    icon: '/images/fries.png',
  },
  {
    name: 'drinks',
    icon: '/images/lemonade.png',
  },
  {
    name: 'desserts',
    icon: '/images/mcflurry-oreo.png',
  },
  {
    name: 'mcwraps',
    icon: '/images/mcwrap-classic.png',
  },
  {
    name: 'chicken',
    icon: '/images/mcnuggets.png',
  },
  {
    name: 'mccafe',
    icon: '/images/black-coffe.png',
  },
  {
    name: 'salads',
    icon: '/images/salad.png',
  },
  {
    name: 'breakfast',
    icon: '/images/breakfast.png',
  },
]

const Nav: FC = () => {
  const t = useTranslations('Nav')
  const { category } = useParams()

  return (
    <nav className="h-screen max-h-screen gap-4 p-4 pr-6 bg-gray-100 min-w-fit oveflow-y-scroll no-scrollbar">
      <div className="flex flex-col items-center ">
        <Logo size="md" />
        <ul className="flex flex-col gap-4 list-none">
          {Object.values(CategoryEnum).map((cat) => (
            <Category
              active={cat === category}
              key={cat}
              href={cat}
              icon={icons.find((i) => i.name === cat)!.icon}
            >
              {t(cat)}
            </Category>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
