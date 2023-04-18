import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <title>Shoppy-Home</title>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3 '>
                <img src="/images/main-banner-1.jpg" alt="banner-1" className='img-fluid rounded-3' />
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad s13+ Pro.</h5>
                  <p>From $90.0 or $24/mo.</p>
                  <Link className='button'>Buy Now</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <div className='small-banner position-relative p-3 '>
                  <img src="/images/catbanner-01.jpg" alt="banner-1" className='img-fluid rounded-3' />
                  <div className='small-banner-content position-absolute'>
                    <h4>Best sale</h4>
                    <h5>Laptop Max</h5>
                    <p>From $90.0 <br />or $24/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3 '>
                  <img src="/images/catbanner-03.jpg" alt="banner-1" className='img-fluid rounded-3' />
                  <div className='small-banner-content position-absolute'>
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $90.0 <br />or $24/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3 '>
                  <img src="/images/catbanner-02.jpg" alt="banner-1" className='img-fluid rounded-3' />
                  <div className='small-banner-content position-absolute'>
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $90.0 <br />or $24/mo.</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3 '>
                  <img src="/images/catbanner-04.jpg" alt="banner-1" className='img-fluid rounded-3' />
                  <div className='small-banner-content position-absolute'>
                    <h4>New Arrival</h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $90.0 <br />or $24/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='service d-flex align-items-center justify-content-between'>
                <div>
                  <img src="" alt="service"/>
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="" alt="service"/>
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="" alt="service"/>
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="" alt="service"/>
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div>
                  <img src="" alt="service"/>
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home