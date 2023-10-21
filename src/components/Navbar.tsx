'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { useEffect, useState } from 'react'

const NAV_LINKS: string[] = ['Home', 'How Hilink Work?', 'Services', 'Pricing', 'Contact Us']

const Navbar = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 1024) {
        open
          ? document.body.classList.add('no-scroll')
          : document.body.classList.remove('no-scroll')
      } else document.body.classList.remove('no-scroll')
    }

    window.addEventListener('resize', handleWindowResize)

    handleWindowResize()

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [open])

  const handleClick = () => setOpen(!open)

  return (
    <header className='fixed top-0 left-0 w-full z-30 bg-white'>
      <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='#' aria-label='Main page' title='Main page'>
          <Image
            src='/hilink-logo.svg'
            alt='Logo Hilink'
            width={72}
            height={20}
            priority
            className='w-20'
          />
        </Link>
        <ul
          className={`w-full h-[calc(100vh-72px)] absolute top-[72px] left-0 z-20 bg-white transition-transform duration-500 flexCenter flex-col pb-16 gap-10 ${
            open ? '' : 'translate-x-[-100%]'
          } lg:w-auto lg:h-full lg:relative lg:top-0 lg:translate-x-0 lg:flex lg:flex-row lg:pb-0 lg:gap-12 lg:transition-none`}
        >
          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className='regular-16 text-gray-90 flexCenter cursor-pointer h-10 transition-all lg:text-gray-50 lg:hover:font-bold lg:pb-1'
            >
              <Link href='#'>{link}</Link>
            </li>
          ))}
        </ul>
        <div className='lg:flexCenter hidden'>
          <Button type='button' title='Log in' icon='/user.svg' variant='btn_dark_green' />
        </div>
        {open ? (
          <button aria-label='Close menu'>
            <Image
              src='/close.svg'
              alt='Icon close'
              width={32}
              height={32}
              className='inline-block cursor-pointer lg:hidden invert'
              onClick={handleClick}
            />
          </button>
        ) : (
          <button aria-label='Open menu'>
            <Image
              src='/menu.svg'
              alt='Icon menu'
              width={32}
              height={32}
              className='inline-block cursor-pointer lg:hidden'
              onClick={handleClick}
            />
          </button>
        )}
      </nav>
    </header>
  )
}

export default Navbar
