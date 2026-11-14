import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Buzzvel FE Test 2026",
	description:
		"Front-End Engineer coding challenge, November 2026 — responsive page built with Next.js, TypeScript and Tailwind CSS.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
