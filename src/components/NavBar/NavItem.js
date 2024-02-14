import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const iconMap = {
    Facebook: <BsFacebook />,
    Instagram: <FaInstagram />,
    Twitter: <FaTwitter />,
    Linkedin: <FaLinkedin />,
  };


export default function NavItem({ itemName, activeItem, handleItemClick,icon }) {
  return (
    <li className={`nav-item ${icon == null ? 'mx-2' : 'mx-1'}`}>
    {
      icon == null ? 
        <a
            className={`nav-link ${activeItem === itemName ? 'active font-weight-bold' : ''}`}
            aria-current="page"
            href={`/${itemName.toLowerCase()}`}
            onClick={(event) => handleItemClick(event,itemName)}
         >
            {itemName}
          </a>
        : 
        <a
            className={`nav-link ${activeItem === icon ? 'active font-weight-bold' : ''}`}
            aria-current="page"
            href={`/${icon}`}
            onClick={(event) => handleItemClick(event, icon)}
         >
            {icon && iconMap[icon]} 
          </a>
    }
     </li>
  )
}
