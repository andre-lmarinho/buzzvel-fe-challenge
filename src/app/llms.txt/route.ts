import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export function GET(): Response {
	const body = `# Luma

> Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.

## Pages

- [Home](${siteUrl}/): the full page — featured course, categories, how it works, people, testimonial and contact.
`;
	return new Response(body, {
		headers: { "Content-Type": "text/plain; charset=utf-8" },
	});
}
