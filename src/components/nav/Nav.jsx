import React from "react";
import "./nav.css";
import { RiHome3Line } from "react-icons/ri";
import { PiUserFocus } from "react-icons/pi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa";
import { useState } from "react";

function Nav() {
	const [activeNav, setActiveNav] = useState("#");

	return (
		<nav>
			<a
				href='#'
				onClick={() => setActiveNav("#")}
				className={activeNav === "#" ? "active" : ""}>
				<RiHome3Line />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}>
				<PiUserFocus />
			</a>
			<a
				href='#expiriance'
				onClick={() => setActiveNav("#expiriance")}
				className={activeNav === "#expiriance" ? "active" : ""}>
				<MdOutlineWorkHistory />
			</a>
			<a
				href='#services'
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}>
				<FaRegHandshake />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}>
				<GrContact />
			</a>
		</nav>
	);
}

export default Nav;
