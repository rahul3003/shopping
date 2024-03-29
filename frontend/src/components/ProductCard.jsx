import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {

    return (
        <>
            <div className='col-3'>
                <div className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src="images/wish.svg" alt="add-cart" />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src="images/watch.jpg" alt="product-image" />
                        <img src="images/watch-1.webp" style={{width:"70%",margin:"auto"}} alt="product-image" />
                    </div>
                    <div>
                        <div className="product-details">
                            <h6 className="brand">Havels</h6>
                            <h5 className="product-title">
                                kids headphone bulk 10 pack multi colored for students.
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                value={3}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className="price">
                                $100.00
                            </p>
                        </div>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className='d-flex flex-column flex-column-reverse gap-2'>
                            <Link>
                                <img src="images/prodcompare.svg" alt="compare" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="add-cart" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="add-cart" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard