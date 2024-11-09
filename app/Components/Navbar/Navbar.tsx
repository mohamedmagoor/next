'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


function Navbar() {
     const pathName = usePathname()
    const [isClick,setIsClick] = useState<boolean>(false)
    const toggleNav = ()=> {
        setIsClick(!isClick)
    }
    
  return <>
  <nav className='bg-black shadow-sm'>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                {/* <Link className='text-white' href='/'> <Image width={50} src={Logo} alt="" /></Link> */}
                <h1 className='text-white'>Next Js</h1>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="ml-4 flex items-center space-x-4">
           
            <Link href="/" className={pathName === '/'? 'bg-white p-2 rounded-md text-black':'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
            Home</Link>
            <Link href="/contacts" className={pathName === '/contacts'? 'bg-white p-2 rounded-md text-black':'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
            Contacts</Link>
            <Link href="/about" className={pathName === '/about'? 'bg-white p-2 rounded-md text-black':'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
            About</Link>
            <Link href="/products" className={pathName === '/products'? 'bg-white p-2 rounded-md text-black':'text-white hover:bg-white hover:text-black rounded-lg p-2'}>
            Products</Link>
            <Link href="/services" className={pathName === '/services'? 'bg-white p-2 rounded-md text-black':'text-white hover:bg-white hover:text-black rounded-lg p-2'} >
            Services</Link>
            
                </div>

                </div>  
                <div className="md:hidden flex items-center">
                    <button onClick={()=> toggleNav()} className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white
                    focus:outline-none focus:right-2 focus:ring-inset focus:ring-white'>

                        {isClick ? <><svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
</svg></> : <> <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
</svg></>}
                    </button>
                    </div>    
                
                
                </div>

    </div>
    {isClick && (
        <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm-px-3'>
            <Link href="/" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
            Home</Link>
            <Link href="/contacts" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
            Contacts</Link>
            <Link href="/about" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
            About</Link>
            <Link href="/products" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
            Products</Link>
            <Link href="/services" className='text-white block hover:bg-white hover:text-black rounded-lg p-2'>
            Services</Link>
            </div>
        </div>
    )}
  </nav>
  
  
  </>
}

export default Navbar