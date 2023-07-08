import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

export const Footer = () => {
    return (
      <footer className='foot'>
        <h3>Adress : Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3> 
        <h3>E-mail: loremipsum@gmail.com</h3>
        <h3>phone: +0123456789 </h3>
         <i><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></i>
         <i><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></i>
         <i><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a></i>


        {/* <ul>
          <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><FaInstagram /><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">twitter</a></li>
          <li><a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">instagram</a></li>
        </ul> */}
      </footer>
    );
  }
  
