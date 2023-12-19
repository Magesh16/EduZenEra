import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col sm:flex-row text-center'>
      <Link href="/">
          <Image
            src="/assets/images/eduzenera.png" width={150} height={80}
            alt="EduZenEra logo"
          />
        </Link>
        <p className='text-xs'>© 2023 EduZenEra. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer