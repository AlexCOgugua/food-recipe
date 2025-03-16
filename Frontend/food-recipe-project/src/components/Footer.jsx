import React from 'react';
import { FaInstagram, FaSquareFacebook, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <p>Follow us on Social Media</p>
      <ul>
        <li><Link to='https://web.facebook.com/' target='blank'><FaSquareFacebook /></Link></li>
        <li><Link to='https://www.youtube.com/' target='blank'><FaYoutube /></Link></li>
        <li><Link to='https://www.instagram.com/' target='blank'><FaInstagram /></Link></li>
        <li><Link to='https://x.com/' target='blank'><FaSquareXTwitter /></Link></li>
      </ul>
      <p>&copy; FlavorFul Culinary (2020-2025)</p>
    </div>
  );
}
