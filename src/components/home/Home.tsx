'use client'
import Welcome from '@/components/home/Welcome'
import { useCart } from '@/context/CartContext'
import { McDonaldsMenu } from '@/db'
import React, { FC, useState } from 'react'

const Home: FC<{ menu: McDonaldsMenu }> = ({ menu }) => {
  const [welcome, setWelcome] = useState(true)
  if (welcome) {
    return <Welcome hide={() => setWelcome(false)} />
  }
  return <div>{menu.hamburger[0].name}</div>
}

export default Home
