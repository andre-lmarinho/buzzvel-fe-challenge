import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const jakarta = localFont({
	src: "../fonts/Jakarta-Variable.woff2",
	weight: "600 800",
	variable: "--font-jakarta",
	display: "swap",
	preload: false,
});

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: "Luma — Practical learning for curious people",
	description:
		"Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.",
	alternates: {
		canonical: "./",
	},
	openGraph: {
		title: "Luma — Practical learning for curious people",
		description:
			"Short, practical courses designed around skills you can put to work immediately.",
		type: "website",
		url: "./",
	},
};

export const viewport: Viewport = {
	themeColor: "#3157f6",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={jakarta.variable}>
			<body>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-blue focus:px-4 focus:py-2 focus:text-white"
				>
					Skip to content
				</a>
				<Header />
				<main id="main-content">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
