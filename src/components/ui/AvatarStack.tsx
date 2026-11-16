import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import type { ComponentProps } from "react";
import { cx } from "../utils/cx";

// Caption figure, same number the marketing copy uses.
const LEARNERS = "24,000+";

// CVA as in Button: variants style each avatar span — cream uses ring +
// inner border, yellow only the inner border.
const avatarVariants = cva(
	"relative shrink-0 rounded-full after:absolute after:inset-0 after:rounded-full after:border-2",
	{
		variants: {
			ring: {
				cream: "ring-2 ring-cream after:border-cream",
				yellow: "after:border-yellow",
			},
			size: {
				sm: "size-8",
				md: "size-10",
			},
		},
		defaultVariants: { size: "sm", ring: "cream" },
	},
);

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
	// Four avatar files ship in /assets; `count` slices that set.
	const srcs = Array.from(
		{ length: count },
		(_, i) => `/assets/photo-avatar-${i + 1}.jpg`,
	);
	return (
		<div
			className={cx(
				"flex",
				caption ? "items-center gap-3" : undefined,
				className,
			)}
			{...props}
		>
			<div className="flex -space-x-2">
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
