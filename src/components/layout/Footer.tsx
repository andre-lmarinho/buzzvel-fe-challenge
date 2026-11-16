import Link from "next/link";
import { Logo } from "../ui/Logo";

const COLUMNS = [
	{
		title: "Explore",
		links: ["Courses", "Categories", "Instructors", "For Teams"],
	},
	{
		title: "Company",
		links: ["About", "Careers", "Journal"],
	},
	{
		title: "Support",
		links: ["Help Center", "Contact", "Terms", "Privacy"],
	},
];

export function Footer() {
	return (
		<footer className="bg-ink text-white">
			<div className="mx-auto w-full max-w-300 px-5 pt-15 pb-4 md:min-h-98.75 md:px-10 md:pt-20 md:pb-8.5">
				<div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6 lg:-mr-4 lg:flex lg:gap-8">
					<div className="col-span-2 max-w-70 md:col-span-1 md:max-w-none lg:flex-2">
						<Link
							href="/"
							aria-label="Luma — home"
							className="flex w-fit items-center rounded py-1 px-2 -mx-2"
						>
							<Logo className="text-white" />
						</Link>
						<p className="text-sm leading-6 mt-1 text-white-3 md:max-w-50">
							Practical learning for curious people.
						</p>
					</div>
					{COLUMNS.map((column) => (
						<nav
							key={column.title}
							aria-label={column.title}
							className="lg:flex-1"
						>
							<h3 className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
								{column.title}
							</h3>
							<ul className="mt-3 flex flex-col gap-1">
								{column.links.map((link) => (
									<li key={link}>
										<Link
											href="#contact"
											className="flex h-8 w-fit items-center rounded px-2 -mx-2 text-sm leading-6 text-white-3 transition-colors hover:text-white"
										>
											{link}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					))}
				</div>
				<div className="mt-8 border-t border-white/30 pt-6 md:mt-15 md:border-white/10">
					<p className="text-center text-[13px] leading-5 text-white md:text-left">
						© 2026 Luma Learning
					</p>
				</div>
			</div>
		</footer>
	);
}
