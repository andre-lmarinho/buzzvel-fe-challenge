"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";

const NAV = [
	{ label: "Courses", href: "#categories" },
	{ label: "For Teams", href: "#featured-course" },
	{ label: "Community", href: "#people" },
	{ label: "About", href: "#how-it-works" },
];

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="relative z-30 border-b border-line bg-cream">
			<div className="mx-auto flex h-17 w-full max-w-300 items-center justify-between px-5 md:px-10 lg:h-17.25">
				<Link
					href="/"
					aria-label="Luma — home"
					className="-mx-2 flex h-11 items-center rounded px-2"
				>
					<Logo className="text-ink" />
				</Link>

				<nav
					aria-label="Main"
					className="absolute top-0 left-1/2 hidden h-17 -translate-x-1/2 items-center gap-4 lg:flex"
				>
					{NAV.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="flex h-11 items-center rounded px-2 text-sm text-muted hover:text-blue"
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="hidden items-center gap-6 lg:flex">
					<Button href="#contact" variant="link" size="sm">
						Log in
					</Button>
					<Button href="#categories" variant="solid" size="sm">
						Start learning
					</Button>
				</div>

				<button
					type="button"
					className="flex size-9 items-center justify-center lg:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
				>
					<Image
						src="/assets/icon-menu.svg"
						alt=""
						width={24}
						height={24}
						loading="eager"
						className="size-6"
					/>
				</button>
			</div>

			{open && (
				<nav
					id="mobile-menu"
					aria-label="Main"
					className="border-t border-line bg-white px-5 py-6 lg:hidden"
				>
					<ul className="flex flex-col gap-5">
						{NAV.map((item) => (
							<li key={item.label}>
								<Link
									href={item.href}
									className="text-base font-semibold text-ink"
									onClick={() => setOpen(false)}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
					<div className="mt-6 flex flex-col gap-3">
						<Button
							href="#contact"
							variant="ghost"
							size="lg"
							onClick={() => setOpen(false)}
						>
							Log in
						</Button>
						<Button
							href="#categories"
							variant="solid"
							size="lg"
							onClick={() => setOpen(false)}
						>
							Start learning
						</Button>
					</div>
				</nav>
			)}
		</header>
	);
}
