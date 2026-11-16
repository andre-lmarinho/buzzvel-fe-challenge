import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import type { ComponentProps } from "react";
import { cx } from "../utils/cx";

// Caption figure, same number the marketing copy uses.
const LEARNERS = "24,000+";

const avatarVariants = cva("relative shrink-0 rounded-full ring-2", {
	variants: {
		ring: {
			cream: "ring-cream",
			yellow: "ring-yellow",
		},
		size: {
			sm: "size-7 not-first:-ml-1.25",
			md: "size-9.5 not-first:-ml-1.5",
		},
	},
	defaultVariants: { size: "sm", ring: "cream" },
});

type Props = ComponentProps<"div"> &
	VariantProps<typeof avatarVariants> & {
		count: number;
		// Toggles the hardcoded social-proof line ("Trusted by … learners").
		caption?: boolean;
	};

export function AvatarStack({
	count,
	size,
	ring,
	caption,
	className,
	...props
}: Props) {
	const srcs = Array.from(
		{ length: count },
		(_, i) => `/assets/photo-avatar-${i + 1}.jpg`,
	);
	return (
		<div
			className={cx(
				"flex",
				caption ? "items-center gap-4.5" : undefined,
				className,
			)}
			{...props}
		>
			<div className="flex">
				{srcs.map((src) => (
					<span key={src} className={avatarVariants({ size, ring })}>
						<Image
							src={src}
							alt=""
							width={80}
							height={80}
							sizes="40px"
							className="size-full rounded-full object-cover"
						/>
					</span>
				))}
			</div>
			{caption ? (
				<p className="text-sm text-muted">
					<strong className="font-bold text-ink">Trusted by {LEARNERS}</strong>{" "}
					learners
				</p>
			) : null}
		</div>
	);
}
