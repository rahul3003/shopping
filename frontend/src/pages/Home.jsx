import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'

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
                <div className='d-flex gap-10 align-items-center'>
                  <img src="images/service.png" alt="service" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <img src="images/service-02.png" alt="service" />
                  <div>
                    <h6>Daily surprise offers</h6>
                    <p className='mb-0'>save upto %5 off</p>
                  </div>
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <img src="images/service-03.png" alt="service" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with expert</p>
                  </div>
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <img src="images/service-04.png" alt="service" />
                  <div>
                    <h6>Affordable prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <img src="images/service-05.png" alt="service" />
                  <div>
                    <h6>Secure payment</h6>
                    <p className='mb-0'>100% Protected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className="row">
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="smart tv" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex gap-10 align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Camera</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="smart tv" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex gap-30'>
                  <div className='mx-5 w-25'>
                    <img src="images/brand-01.png" alt="brand"/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src="images/brand-02.png" alt="brand"/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src="images/brand-03.png" alt="brand"/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src="images/brand-04.png" alt="brand"/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src="images/brand-05.png" alt="brand"/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src="images/brand-06.png" alt="brand"/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src="images/brand-07.png" alt="brand"/>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home