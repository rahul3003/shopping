import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src="/images/newsletter.png" alt="Newsletter" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div class="input-group">
                <input type="text" class="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2" />
                <span class="input-group-text px-3" id="basic-addon2">Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>

              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Shipping Policy</Link>
                <Link className='text-white mb-1 py-2'>Refund Policy</Link>
                <Link className='text-white mb-1 py-2'>Privacy Policy</Link>
                <Link className='text-white mb-1 py-2'>Terms & Conditions</Link>
                <Link className='text-white mb-1 py-2'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Accounts</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>About</Link>
                <Link className='text-white mb-1 py-2'>Faq</Link>
                <Link className='text-white mb-1 py-2'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white mb-1 py-2'>Laptops</Link>
                <Link className='text-white mb-1 py-2'>Mobiles</Link>
                <Link className='text-white mb-1 py-2'>Tabs</Link>
                <Link className='text-white mb-1 py-2'>Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()} Powered by Shoppy.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer