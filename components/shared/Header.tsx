import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b h-20'>
      <div className='wrapper flex items-center justify-between'>
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/eduzenera.png" width={250} height={100}
            alt="EduZenEra logo"
          />
        </Link>
        <SignedIn>
          <nav className='w-full md:flex-between hidden max-w-xs'>
            <NavItems />
          </nav>
        </SignedIn>
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full bg-blue-800" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header