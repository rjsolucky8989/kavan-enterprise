import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Footer } from "./Footer";

const routes = [
	{ name: "Home", href: "#", isActive: true },
	{ name: "About us", href: "#", isActive: false },
	{ name: "Stores", href: "#", isActive: false },
	{ name: "Images", href: "#", isActive: false },
	{ name: "Contact", href: "#", isActive: false },
];

const NavMenu = () => (
	<ul className="flex">
		{routes.map((route, i) => (
			<li key={i}>
				<a
					className={`px-4 ${
						route.isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
					}`}
					href={route.href}
				>
					{route.name}
				</a>
			</li>
		))}
	</ul>
);

NavMenu.propTypes = {
	routes: PropTypes.array.isRequired,
};

export const Header = () => {
	return (
    <>
		<div className="ezy__nav4 light py-3 bg-[#F0F3F5] dark:bg-[#0b1727] text-zinc-900 dark:text-white relative">
			<nav>
				<div className="container px-4">
					<div className="flex items-center justify-between">
						<a className="font-black text-3xl min-w-[33%]" href="#!">
							{" "}
							<Image src={"/logo.png"} width={150} height={0} alt="Logo" />{" "}
						</a>
						<button
							className="block lg:hidden cursor-pointer h-10 z-20"
							type="button"
							id="hamburger"
						>
							<div className="h-0.5 w-7 bg-black dark:bg-white -translate-y-2"></div>
							<div className="h-0.5 w-7 bg-black dark:bg-white"></div>
							<div className="h-0.5 w-7 bg-black dark:bg-white"></div>
							<div className="h-0.5 w-7 bg-black dark:bg-white translate-y-2"></div>
						</button>
						<div
							className="flex flex-col lg:flex-row justify-center lg:justify-between items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white dark:bg-[#0b1727] lg:bg-transparent grow"
							id="navbar"
						>
							<NavMenu routes={routes} />

						</div>
					</div>
				</div>
			</nav>
		</div>
    <div className="Footer" style={{ marginTop: '380px' }}>
      <Footer />
    </div>
    </>
	);
};
