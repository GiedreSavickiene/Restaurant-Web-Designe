import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar_text">
                <div className="logo">
                    {/* <img src="../" alt="logo" /> */}
                </div>
                <ul className='navbar_ul'>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Menu</a></li>
                    <li><a href=''>Shop</a></li>
                    <li><a href=''>News</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
