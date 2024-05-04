import React from "react";
import "./contact.css";
import { BiLogoGmail } from "react-icons/bi";
import { PiMessengerLogoBold } from "react-icons/pi";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_6295l0v", "template_7j9ljst", form.current, {
				publicKey: "jUg8Kq9KP7KKZYw0G",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Let's Talk</h5>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<aritcle className='contact__option'>
						<BiLogoGmail className='contant__option-icon' />
						<h4>E-mail</h4>
						<h5>michal.kowalczyk.gap@gmail.com</h5>
						<a href='mailto:michal.kowalczyk.gap@gmail.com' target='_blank'>
							Send a message
						</a>
					</aritcle>
					<aritcle className='contact__option'>
						<PiMessengerLogoBold className='contant__option-icon' />
						<h4>Messenger</h4>
						<h5>Michal Kowalczyk On FB</h5>
						<a href='https://m.me/id=100000667640964' target='_blank'>
							Let's chat
						</a>
					</aritcle>
					<aritcle className='contact__option'>
						<SiWhatsapp className='contant__option-icon' />
						<h4>WhatsApp</h4>
						<h5>+48666599505</h5>
						<a
							href='https://api.whatsapp.com/send?phone=+48666599505'
							target='_blank'>
							Send idea with phone
						</a>
					</aritcle>
				</div>
				{}
				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='email' name='email' placeholder='Your Mail' required />
					<textarea name='message' id='' rows='7'></textarea>
					<button type='submit' className='btn btn-primary'>
						Send A Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
