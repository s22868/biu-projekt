import React, { FC, PropsWithChildren } from 'react'
import NextImage from 'next/image'
import Link from 'next-intl/link'
import { Category as CategoryEnum } from '@/db'
import classNames from 'classnames'

interface CategoryProps extends PropsWithChildren {
  icon: string
  href: CategoryEnum
  active: boolean
}

const Category: FC<CategoryProps> = ({ children, icon, href, active }) => {
  return (
    <li>
      <Link className={classNames('flex items-center gap-2')} href={'/menu/' + href}>
        <img src={icon} width={80} height={80} />
        <span>
          {children}
          {active && <div className='absolute w-10 h-3 rounded-md bg-primary'/>}
        </span>
      </Link>
    </li>
  )
}

export default Category
