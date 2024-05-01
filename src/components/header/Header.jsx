import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
	return (
		<header>
			<div className='container header__container'>
				<h5>Hello</h5>
				<h1 className="zeyada-regular">I'm Michal</h1>
				<h5 className='text-light'>Frontend Deweloper | Web Designer</h5>
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='me' />
				</div>

				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
}

export default Header;
