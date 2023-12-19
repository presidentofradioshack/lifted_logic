"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu } from "lucide-react";

import LogoBlue from "@/public/logos/Logo-Blue.svg";
import Home from "@/public/icons/Home.svg";
import MusicNote from "@/public/icons/Music Note.svg";
import People from "@/public/icons/People.svg";
import Calendar from "@/public/icons/Calendar.svg";
import Record from "@/public/icons/Record.svg";

import styles from "@/public/styles/navbar.module.scss";

const MainNav = () => {
	const [showNav, setShowNav] = useState(false);

	const toggleNavbar = () => {
		setShowNav(!showNav);
	};

	const pathname = usePathname();

	const routes = [
		{
			href: `/`,
			label: "Home",
			icon: Home,
			active: pathname === `/`,
		},
		{
			href: `/records`,
			label: "Records",
			icon: Record,
			active: pathname === `/records`,
		},
		{
			href: `/music`,
			label: "Music",
			icon: MusicNote,
			active: pathname === `/music`,
		},
		{
			href: `/artists`,
			label: "Artists",
			icon: People,
			active: pathname === `/artists`,
		},
		{
			href: `/concerts`,
			label: "Concerts",
			icon: Calendar,
			active: pathname === `/concerts`,
		},
	];

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar_container}>
				<div>
					<Link href='/'>
						<Image src={LogoBlue} alt='Synder Recordings Logo' />
					</Link>
				</div>

				<div className={styles.mobile_menu_icon} onClick={toggleNavbar}>
					<Menu />
				</div>

				<div className={`${styles.nav_links} ${showNav ? "active" : ""}`}>
					<ul>
						{routes.map((route) => (
							<li key={route.href}>
								<Link key={route.href} href={route.href}>
									<Image src={route.icon} alt={route.label} style={{ marginRight: "12px", display: "inline" }} />

									<span>{route.label}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.signup_button}>
					<button className={styles.button}>Sign Up</button>
				</div>
			</div>
		</nav>
	);
};

export default MainNav;
