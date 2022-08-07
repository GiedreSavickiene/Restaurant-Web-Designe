import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaRegWindowClose } from 'react-icons/fa'
import { useState } from "react";



const MobileNavigation = () => {

    const [open, setOpen] = useState(false)

    const hamburgerIcon = <GiHamburgerMenu className="hamburger"
        size='40px'
        color="gainsboro"
        onClick={() => setOpen(!open)}
    />
    const closeIcon = <FaRegWindowClose className="hamburger"
        size='40px'
        color="gainsboro"
        onClick={() => setOpen(!open)}
    />

    const closeMobilMenu = () => setOpen(false);

    return (
        <nav className="mobile_navigation">
            {open ? closeIcon : hamburgerIcon}
            {open && < NavLinks isMobal={true} closeMobilMenu={closeMobilMenu} />}
        </nav>
    );
}
export default MobileNavigation;