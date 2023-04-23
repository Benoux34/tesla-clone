import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header className="header">
        <div className="w-[20%]">
            <Image
                src="/tesla-logo.png"
                alt="Tesla Logo"
                height="150"
                width="150"
            />
        </div>
        <div className='hidden w-[60%] xl:flex items-center justify-center space-x-7'>
          <span className="textHeader">Model S</span>
          <span className="textHeader">Model 3</span>
          <span className="textHeader">Model X</span>
          <span className="textHeader">Model Y</span>
          <span className="textHeader">Powerwall</span>
          <span className="textHeader">Recharge</span>
        </div>
        <div className='w-[5%] xl:w-[20%] flex items-center justify-center space-x-10 pr-10'>
          <span className="hidden xl:flex textHeader">Assistance</span>
          <span className="hidden xl:flex textHeader">Shop</span>
          <span className="hidden xl:flex textHeader">Compte</span>
          <span className="textHeader">Menu</span>
        </div>
    </header>
  )
}

export default Header