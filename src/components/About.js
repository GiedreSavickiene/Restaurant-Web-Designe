import React from 'react'
import IMG1 from '../assets/koliazas3.jpg'
import IMG2 from '../assets/koliazas2.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className='row'>
                    <div className='col-6 p-25'>
                        <h3>About Us</h3>
                        <h1>WELCOME TO NATURAL MARKET</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab voluptas, minima quae autem similique? Blanditiis deleniti unde soluta quia modi nemo, dolores enim illum cupiditate. Error, asperiores corrupti. Dicta!
                        </p>
                        <div className="about_btn">
                            <a href="#" className='btn btn-smart'>READ MORE</a>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="about_img">
                            <img src={IMG1} alt="" />
                            {/* <img src={IMG2} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default About
