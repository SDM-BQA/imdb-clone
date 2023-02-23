import React from 'react'
import Menuitem from './Menuitem'
import {AiFillHome} from 'react-icons/ai'
import {AiFillExclamationCircle} from 'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'


export default function Header() {
  return (
    <div className='flex items-center mx-2 justify-between sm:mx-auto max-w-6xl py-4 lg:py-6'>
      <div className='flex'>
        <Menuitem title={"Home"} address="/" Icon={AiFillHome}/>
        <Menuitem title={"About"} address="/about" Icon={AiFillExclamationCircle}/>
      </div>
      <div className='mx-4 flex items-center space-x-5'>
        <DarkModeSwitch/>
        <Link href="/">
            <h2 className='text-2xl'><span className='font-bold bg-amber-500 py-1 px-1 rounded-lg mr-1'>IMDB</span><span className='text-xl hidden sm:inline'>Clone</span></h2>
        </Link>
      </div>
    </div>
  )
}
