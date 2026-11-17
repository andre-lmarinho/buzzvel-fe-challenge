"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { cx } from "../utils/cx";

const NAV = [
	{ label: "Courses", href: "#categories" },
	{ label: "For Teams", href: "#featured-course" },
	{ label: "Community", href: "#people" },
	{ label: "About", href: "#how-it-works" },
];

export function Header() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return;
		const onKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("keydown", onKey);
		// keyboard focus stays inside the open menu: the page behind goes inert,
		// including the skip link (its target, #main-content, would be unfocusable)
		const page = document.querySelectorAll('main, footer, a[href="#main-content"]');
		page.forEach((el) => {
			el.setAttribute("inert", "");
		});
		return () => {
			window.removeEventListener("keydown", onKey);
			page.forEach((el) => {
				el.removeAttribute("inert");
			});
		};
	}, [open]);

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
							className="flex h-11 items-center rounded px-2 text-sm text-muted transition-colors hover:text-blue"
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
					className="flex size-11 items-center justify-center rounded-lg border border-line bg-white transition-colors hover:border-blue lg:hidden"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
				>
					<span aria-hidden="true" className="menu-icon ornament" />
				</button>
			</div>

			<nav
				id="mobile-menu"
				aria-label="Main"
				data-open={open}
				className={cx(
					"fixed inset-x-0 bottom-0 top-17 z-20 flex flex-col overflow-y-auto bg-cream transition-[opacity,transform,visibility] duration-300 ease-out lg:hidden",
					open
						? "visible translate-y-0 opacity-100"
						: "invisible -translate-y-3 opacity-0",
				)}
			>
				<div
					aria-hidden="true"
					className="ornament absolute inset-0 -z-10 overflow-hidden"
				>
					<div className="absolute -right-20 -bottom-16 size-56 rounded-full bg-blue-soft" />
				</div>
				<ul className="page-gutters my-auto flex flex-col">
					{NAV.map((item, index) => (
						<li key={item.label} className="border-b border-line">
							<Link
								href={item.href}
								className="flex items-center gap-4 py-5 text-ink transition-colors hover:text-blue"
								onClick={() => setOpen(false)}
							>
								<span className="translate-y-0.5 text-sm font-bold tabular-nums text-blue">
									{String(index + 1).padStart(2, "0")}
								</span>
								<span className="font-display text-3xl font-extrabold tracking-tight">
									{item.label}
								</span>
							</Link>
						</li>
					))}
				</ul>
				<div className="page-gutters flex flex-col gap-3 pt-6 pb-10">
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
		</header>
	);
}
