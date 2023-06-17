import Logo from '@/components/icons/Logo'
import Category from '@/components/nav/Category'
import React, { FC } from 'react'

const Nav: FC = () => {
  return (
    <nav className="flex flex-col gap-4">
      <Logo size="lg" />
      <ul className="list-none">
        <Category />
      </ul>
    </nav>
  )
}

export default Nav
