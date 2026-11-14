import Image from "next/image";
import { SectionContainer } from "./ui/SectionContainer";
import { Eyebrow, H2, H3, P } from "./ui/Typograph";

const CATEGORIES = [
	{
		number: "01",
		title: "Product Design",
		text: "Turn complex problems into clear, useful experiences.",
	},
	{
		number: "02",
		title: "Technology",
		text: "Build a stronger understanding of the tools shaping digital products.",
	},
	{
		number: "03",
		title: "Business",
		text: "Develop practical skills for better decisions and stronger teams.",
	},
	{
		number: "04",
		title: "Creative",
		text: "Explore new ways to communicate, create and tell stories.",
	},
];

export function Categories() {
	return (
		<section id="categories" className="bg-white">
			<SectionContainer className="py-15 sm:py-20 md:py-section">
				<Eyebrow className="text-blue">Find your next skill</Eyebrow>
				<H2 className="mt-4 max-w-140">Learn something worth knowing.</H2>
				<P className="mt-4 max-w-140 text-muted">
					Short, practical courses designed around skills you can put to work
					immediately.
				</P>

				<ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 wide:grid-cols-4 wide:gap-5">
					{CATEGORIES.map((category) => (
						<li key={category.number}>
							<a
								href="#featured-course"
								className="group flex h-56.75 flex-col rounded-2xl border border-line bg-white p-6 hover:border-blue sm:h-full sm:min-h-56.75 wide:min-h-66 wide:p-7 xl:h-66"
							>
								<span className="mt-1 inline-flex h-6 self-start items-center rounded-md bg-blue-soft px-2 font-display text-xs font-bold text-blue">
									{category.number}
								</span>
								<H3 className="mt-5">{category.title}</H3>
								<p className="mt-3 text-sm leading-6 text-muted">
									{category.text}
								</p>
								<span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-ink">
									Explore
									<Image
										src="/assets/icon-arrow.svg"
										alt=""
										width={20}
										height={20}
										loading="eager"
										className="size-5 transition-transform group-hover:translate-x-1"
									/>
								</span>
							</a>
						</li>
					))}
				</ul>
			</SectionContainer>
		</section>
	);
}
