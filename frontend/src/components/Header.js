import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div class="row">
            <div class="col-6">
              <p className='text-white mb-0'>Free shipping Over $100 & Free Return</p>
            </div>
            <div class="col-6">
              <p className='text-end text-white mb-0'>
                Helpline: <a className='text-white' href="tel:1234567890">
                  1-234-567-890
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div class="row">
            <div className='col-2'>
              <h2><Link className='text-white'>Shoppy.</Link></h2>
            </div>
            <div className='col-5'>
              
            </div>
            <div className='col-5'>
              
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header