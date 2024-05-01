import React from "react";
import CV from "../../assets/MichalKowalczyk.pdf";

function CTA() {
	return (
		<div className='cta'>
			<a href={CV} download className='btn'>
				Downlowad CV
			</a>
			<a href='#contact' className='btn btn-primary'>
				Contact Me
			</a>
		</div>
	);
}

export default CTA;
