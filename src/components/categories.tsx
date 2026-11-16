import Image from "next/image";
import { Badge } from "./ui/Badge";
import { PageSection } from "./ui/PageSection";
import { Eyebrow, H2, H3 } from "./ui/Typograph";

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
		<PageSection id="categories" className="bg-white">
			<Eyebrow className="text-blue">Find your next skill</Eyebrow>
			<H2 className="mt-4 max-w-140">Learn something worth knowing.</H2>
			<p className="text-base leading-6.5 md:text-lg md:leading-7 mt-4 max-w-140 text-muted">
				Short, practical courses designed around skills you can put to work
				immediately.
			</p>

			<ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 wide:grid-cols-4 wide:gap-5">
				{CATEGORIES.map((category) => (
					<li key={category.number}>
						<a
							href="#featured-course"
							className="group flex h-56.75 flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-blue sm:h-full sm:min-h-56.75 wide:min-h-66 wide:p-7 xl:h-66"
						>
							<Badge variant="soft" className="mt-1 self-start">
								{category.number}
							</Badge>
							<H3 className="mt-5">{category.title}</H3>
							<p className="text-sm leading-6 mt-3 text-muted">
								{category.text}
							</p>
							<span className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-ink">
								Explore
								<Image
									src="/assets/icon-arrow.svg"
									alt=""
									width={20}
									height={20}
									className="size-5 transition-transform group-hover:translate-x-1"
								/>
							</span>
						</a>
					</li>
				))}
			</ul>
		</PageSection>
	);
}
