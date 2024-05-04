import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				Michal Kowalczyk Porfolio 
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#expiriance'>Home</a>
				</li>
				<li>
					<a href='#services'>Home</a>
				</li>
				<li>
					<a href='#portfolio'>Home</a>
				</li>
				<li>
					<a href='#testimopnials'>Home</a>
				</li>
			</ul>

			<div className='footer__socials'>
				<a
					href='https://www.facebook.com/profile.php?id=100000667640964'
					target='_blank'>
					<FaFacebook />
				</a>
				<a href='https://www.instagram.com/kowalczyk.misiek' target='_blank'>
					<FaInstagram />
				</a>
				<a href='https://github.com/ThatMisiek' target='_blank'>
					<FaGithub />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; Michal Kowalczyk Portfolio</small>
			</div>
		</footer>
	);
}

export default Footer;
