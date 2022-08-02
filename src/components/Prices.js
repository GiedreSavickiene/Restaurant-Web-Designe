import React from 'react'
import img1 from '../assets/pexels-photo-566566.jpeg'
import img2 from '../assets/pexels-photo-793759.webp'
import img3 from '../assets/pexels-photo-793785.webp'
import img4 from '../assets/pexels-photo-1351238.jpeg'
import img5 from '../assets/pexels-photo-1640771.jpeg'
import img6 from '../assets/pexels-photo-1640777.jpeg'

const Prices = () => {
    return (
        <div className='prices'>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={img1} alt="" />
                            </div>
                            <h1 className="price_heading">
                                Ghatti Lamb
                            </h1>
                            <p className='price_text' >Sahyadri Ghat’s dish, Lamb, fresh roasted herbs, spices.</p>
                            <p className='price_rs'>7.00 Eur</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={img2} alt="" />
                            </div>
                            <h1 className="price_heading">
                                Shahi Chicken Korma
                            </h1>
                            <p className='price_text' >Chicken breast, very delicate onion, cashew nut, saffron gravy.</p>
                            <p className='price_rs'>9.59 Eur</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={img3} alt="" />
                            </div>
                            <h1 className="price_heading">
                                Lamb Roganjosh
                            </h1>
                            <p className='price_text' >Lamb Awadh way ‘Rogan’ (tinged, flavoured and spiced oil) and ‘Josh’ (Lamb Jus)</p>
                            <p className='price_rs'>5.60 Eur</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={img4} alt="" />
                            </div>
                            <h1 className="price_heading">
                                Ghatti Lamb
                            </h1>
                            <p className='price_text' >Sahyadri Ghat’s dish, Lamb, fresh roasted herbs, spices.</p>
                            <p className='price_rs'>5.60 Eur</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={img5} alt="" />
                            </div>
                            <h1 className="price_heading">
                                Vegetable Bhanola
                            </h1>
                            <p className='price_text' >Shortcrust pastry, Green peas, Potatoes, Greek yogurt, Chickpeas, Tamarind relish, Mustard cress.</p>
                            <p className='price_rs'>8.49 Eur</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="price">
                            <div className="price_img">
                                <img src={img6} alt="" />
                            </div>
                            <h1 className="price_heading">
                                Mussels Caldine
                            </h1>
                            <p className='price_text' >Mussels, subtle green herbs, coconut broth. All time Goan favourite.</p>
                            <p className='price_rs'>6.60 Eur</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
