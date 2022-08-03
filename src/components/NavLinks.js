const NavLinks = (props) => {
    return (
        <div className="navbar_text">
            <div className="logo">
                {/* <img src="../" alt="logo" /> */}
            </div>
            <ul className='navbar_ul'>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href='/'>Home</a></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href='/#about'>About Us</a></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href='/#shop'>Shop</a></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href='/#menu'>Menu</a></li>
                <li onClick={() => props.isMobile && props.closeMobileMenu()}><a href='/#contacts'>Contact</a></li>
            </ul>
        </div>)
}

export default NavLinks;