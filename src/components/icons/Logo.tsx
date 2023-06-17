import classNames from 'classnames'
import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

function Logo({ size = 'md' }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 272.7 238.5"
      className={classNames({
        'w-16 h-16': size === 'sm',
        'w-24 h-24': size === 'md',
        'w-32 h-32': size === 'lg',
      })}
    >
      <path
        fill="#fc0"
        d="M195.8 17.933c23.3 0 42.2 98.3 42.2 219.7h34c0-130.7-34.3-236.5-76.3-236.5-24 0-45.2 31.7-59.2 81.5-14-49.8-35.2-81.5-59-81.5-42 0-76.2 105.7-76.2 236.4h34c0-121.4 18.7-219.6 42-219.6s42.2 90.8 42.2 202.8h33.8c0-112 19-202.8 42.3-202.8"
      ></path>
    </svg>
  )
}

export default Logo
