import React from 'react'
import IMG1 from '../assets/moksha-curry.jpeg'

const Menu = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className='row'>

                    <div className='col-6'>
                        <div className="about_img">
                            <img src={IMG1} alt="" />
                            {/* <img src={IMG2} alt="" /> */}
                        </div>
                    </div>
                    <div className='col-6 p-25'>
                        <h3>Food menu</h3>
                        <h1>FAST HEALTHY FOOD AT HOME</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab voluptas, minima quae autem similique? Blanditiis deleniti unde soluta quia modi nemo, dolores enim illum cupiditate. Error, asperiores corrupti. Dicta!
                        </p>
                        <div className="about_btn">
                            <a href="#" className='btn btn-smart'>WIEW MORE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
