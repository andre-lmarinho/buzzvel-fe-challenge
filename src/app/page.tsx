import { Categories } from "@/components/categories";
import { Contact } from "@/components/contact";
import { FeaturedCourse } from "@/components/featured-course";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { People } from "@/components/people";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
	return (
		<>
			<Hero />
			<Categories />
			<FeaturedCourse />
			<HowItWorks />
			<Testimonial />
			<People />
			<Contact />
			<FinalCta />
		</>
	);
}
