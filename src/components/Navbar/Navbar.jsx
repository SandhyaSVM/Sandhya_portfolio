import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/sandhya_logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
const Navbar = () => {

  const [menu, setMenu] = useState("Home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='Navbar'>
      <img className='logo' src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
      <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' offset={50} href='#Home'><p onclick={() => setMenu("Home")}>Home</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onclick={() => setMenu("About me")}>About me</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Services'><p onclick={() => setMenu("Services")}>Services</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onclick={() => setMenu("Portfolio")}>Portfolio</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' /> : <></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#Contact'><p onclick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu === "Home" ? <img src={underline} alt='' /> : <></>}</li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#Contact'>Connect with me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar

