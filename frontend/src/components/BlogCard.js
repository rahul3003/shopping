import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (
        <>
            <div className='col-3'>
                <div className='blog-card'>
                    <div className='blog-image'>
                        <img src="images/blog-1.jpg" className='img-fluid' alt="blogs" />
                    </div>
                    <div className='blog-content'>
                        <p className='date'>1 Dec 2023</p>
                        <h5 className='title'>A beautiful sunday morning resistance</h5>
                        <p className='desc'>dfgshdgvnbj djfjhdjshf xjvjhcxv xvjcxvjh sfjdsvbjxcbnvxc
                            dfds dfhjsdhfjhsd dfjshfjsdhfjh dfksdfkjdskf vxvjxh
                        </p>
                        <Link to={"/"} className='button'>Read more</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard