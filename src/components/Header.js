import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='baner'>
            <Navbar />
            <div className="baner_content">
                <div className='container'>
                    <div className="baner_text">
                        <h3>Food Delivery</h3>
                        <h1>NATURAL MARKET</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, molestias magni eum neque harum odio enim porro? Debitis suscipit omnis, eos incidunt est repudiandae!
                        </p>
                        <div className="baner_btn">
                            <a href='' className='btn btn-smart'>DELIVERY NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
