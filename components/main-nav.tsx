"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import LogoBlue from "@/public/logos/Logo-Blue.svg";
import Home from "@/public/icons/Home.svg";
import MusicNote from "@/public/icons/Music Note.svg";
import People from "@/public/icons/People.svg";
import Calendar from "@/public/icons/Calendar.svg";
import Record from "@/public/icons/Record.svg";

import styles from "@/public/styles/navbar.module.scss";

const MainNav = () => {
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
			<Link href='/'>
				<Image src={LogoBlue} alt='Synder Recordings Logo' />
			</Link>
			<div className={styles.nav_links}>
				{routes.map((route) => (
					<Link key={route.href} href={route.href}>
						<Image src={route.icon} alt={route.label} style={{ marginRight: "rem" }} />

						<span>{route.label}</span>
					</Link>
				))}

				<button className={styles.button}>Sign Up</button>
			</div>
		</nav>
	);
};

export default MainNav;
