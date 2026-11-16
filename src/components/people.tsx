import Image from "next/image";
import { Button } from "./ui/Button";
import { PageSection } from "./ui/PageSection";
import { Eyebrow, H2 } from "./ui/Typograph";

const PHOTO_COLUMNS = [
	{
		className: "h-[91%] w-[26%] self-center items-end justify-end md:h-[84%]",
		photos: [
			{
				src: "/assets/photo-collage-1.png",
				className: "aspect-3/4 w-[77%] md:aspect-2/3 md:w-3/4",
			},
			{
				src: "/assets/photo-collage-2.png",
				className: "aspect-94/129 w-full md:aspect-2/3",
			},
		],
	},
	{
		className: "h-full w-1/5 justify-end md:w-[19.38%]",
		photos: [
			{
				src: "/assets/photo-collage-3.png",
				className: "aspect-72/106 w-full md:aspect-103/170",
			},
			{
				src: "/assets/photo-collage-4.png",
				className: "aspect-72/107.5 w-full md:aspect-103/173",
			},
			{
				src: "/assets/photo-collage-5.png",
				className: "aspect-9/10 w-full md:aspect-4/5",
			},
		],
	},
	{
		className: "w-1/5 self-center md:w-[19.38%]",
		photos: [
			{
				src: "/assets/photo-collage-6.png",
				className: "aspect-48/57 w-full md:aspect-103/137",
			},
			{
				src: "/assets/photo-collage-7.png",
				className: "aspect-36/43 w-full md:aspect-103/138",
			},
			{
				src: "/assets/photo-collage-8.png",
				className: "aspect-3/4 w-full md:aspect-2/3",
			},
		],
	},
	{
		className: "w-[24.3%] self-center items-start",
		photos: [
			{
				src: "/assets/photo-collage-9.png",
				className: "aspect-176/255 w-full md:aspect-128/205",
			},
			{
				src: "/assets/photo-collage-10.png",
				className: "aspect-48/55 w-[82%] md:aspect-103/132 md:w-4/5",
			},
		],
	},
];

export function People() {
	return (
		<PageSection
			id="people"
			className="bg-cream grid items-center gap-5.5 md:py-30 md:grid-cols-2 md:gap-layout"
		>
			<div>
				<Eyebrow className="text-blue">The people</Eyebrow>
				<H2 className="mt-2">Meet international students &amp; teachers</H2>
				<p className="text-base leading-6.5 md:text-lg md:leading-7 my-6 max-w-132.5 text-ink md:my-8 md:text-muted">
					Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
					risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
					facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
					aenean lorem faucibus integer.
				</p>
				<Button href="#contact" variant="outline" size="xl">
					Explore teachers and students
				</Button>
			</div>

			<div className="relative mx-auto aspect-square w-[calc(100%-2rem)] max-w-125 before:absolute before:inset-0 before:rounded-full before:bg-blue-soft md:w-full">
				<div className="absolute top-[3%] left-[-4.85%] flex h-[93.8%] w-[109.7%] items-center gap-[3.3%] @container md:top-[-2.25%] md:left-[-3%] md:h-[104.5%] md:w-[106%] md:gap-[3%]">
					{PHOTO_COLUMNS.map((column, columnIndex) => (
						<div
							key={column.photos[0].src}
							className={`flex flex-col gap-2 md:gap-[2.4cqw] ${column.className}`}
						>
							{column.photos.map((photo, photoIndex) => (
								<div
									key={photo.src}
									className={`relative shrink-0 overflow-hidden rounded shadow-sm ${photo.className}`}
								>
									<Image
										src={photo.src}
										alt={
											columnIndex === 0 && photoIndex === 0
												? "International students and teachers"
												: ""
										}
										fill
										sizes="(min-width: 768px) 140px, 94px"
										className="object-cover"
									/>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</PageSection>
	);
}
