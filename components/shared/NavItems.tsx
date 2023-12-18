'use client';
import { headerLinks } from '@/constants/index'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavItems = () => {
  const path = usePathname();
  return (
    <ul className='md:flex-between flex gap-6 flex-col items-start md:flex-row'>
      {headerLinks.map((link: { label: string, route: string }) => {
        const isActive = path === link.route;
        return (
          <li key={link.route} className={`${isActive && 'text-cyan-800 underline'} flex-center p-medium-16 whitespace-nowrap`}>
            <Link className='bg:hover' href={link.route} >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems