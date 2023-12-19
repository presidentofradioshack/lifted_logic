import Image from "next/image";
import React from "react";
import Link from "next/link";

import LogoWhite from "@/public/logos/Logo-White.svg";
import facebookIcon from "@/public/icons/facebook.svg";
import instagramIcon from "@/public/icons/instagram.svg";
import Instagram from "@/public/icons/instagram.svg";
import twitterIcon from "@/public/icons/twitter.svg";
import youtubeIcon from "@/public/icons/youtube.svg";

import styles from "@/public/styles/footer.module.scss";

const socialMediaLinks = [
	{
		title: "Instagram",
		icon: instagramIcon,
		href: "/",
	},
	{
		title: "YouTube",
		icon: youtubeIcon,
		href: "/",
	},
	{
		title: "Twitter",
		icon: twitterIcon,
		href: "/",
	},
	{
		title: "Facebook",
		icon: facebookIcon,
		href: "/",
	},
];

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_links_container}>
				<div className={styles.footer_details}>
					<div>
						<Image src={LogoWhite} alt='Synder Recordings' />
					</div>

					<div className={styles.footer_address} style={{ color: "white" }}>
						<p style={{ color: "white" }}>8521 W Fairfax Rd</p>
						<p style={{ color: "white" }}>Los Angeles, CA</p>
					</div>

					<div>
						<p style={{ color: "white" }}>990210</p>
						<p style={{ color: "white" }}>(909) 505 4302</p>
					</div>
				</div>
				<div className={styles.footer_links}>
					<ul>
						<span>EXPLORE</span>
						<li>About Us</li>
						<li>Our Story</li>
						<li>Team</li>
						<li>Careers</li>
						<li>FAQ</li>
					</ul>
					<ul>
						<span>MUSIC</span>
						<li>Missing Out</li>
						<li>Trapsoul</li>
						<li>Sonder Sons</li>
						<li>Paradise Today</li>
						<li>Needed</li>
					</ul>
					<ul>
						<span>ARTISTS</span>
						<li>Brent Faiyaz</li>
						<li>Drake</li>
						<li>Bryson Ford</li>
						<li>Young Ford</li>
						<li>Rory Fresco</li>
					</ul>
					<ul>
						<span>RECORDS</span>
						<li>What a Time</li>
						<li>Coming Home</li>
						<li>Always First</li>
						<li>So Far Gone</li>
						<li>Big Bluez</li>
					</ul>
				</div>
			</div>

			<div className={styles.footer_terms_container}>
				<div style={{ display: "flex", gap: "5rem" }}>
					<Link href='/'>Privacy Policy</Link>
					<Link href='/'>Terms & Conditions</Link>
				</div>

				<div className={styles.footer_social_links}>
					{socialMediaLinks.map((link) => (
						<Link key={link.title} href={link.href}>
							<Image src={link.icon} alt={link.title} />
							<span style={{ display: "none" }}>{link.title}</span>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
