import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdKeyboardCapslock } from "react-icons/md";

function HeaderSocials() {
	return (
		<div className='header__socials'>
			<a
				href='https://www.linkedin.com/in/micha%C5%82-kowalczyk-1229851b4/'
				target='_blank'>
				<FaLinkedin />
			</a>
			<a href='https://github.com/ThatMisiek' target='_blank'>
				<FaGithubSquare />
			</a>
			<a
				href='https://www.facebook.com/profile.php?id=100000667640964'
				target='_blank'>
				<FaFacebookMessenger />
			</a>
		</div>
	);
}

export default HeaderSocials;
