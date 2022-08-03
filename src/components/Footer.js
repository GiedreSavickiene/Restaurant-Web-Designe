import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer' id='contacts'>
            <div className="footer_container">
                <div className="socials">
                    <a href="#" ><FaFacebookSquare /></a>
                    <a href="#"><BsInstagram /></a>
                    <a href="#"><BsTwitter /></a>
                </div>
                <div className="text">
                    <h3>Contact Us</h3>
                    <p>Phone: +480 00 258 88888</p>
                    <p>Adress: Malportu 15, Narmal</p>
                    <p>Email: naturalmarket@gmail.com</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
