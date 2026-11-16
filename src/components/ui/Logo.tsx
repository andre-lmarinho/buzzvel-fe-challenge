export function Logo({ className }: { className?: string }) {
	return (
		<span
			aria-hidden="true"
			className={`ornament block h-4.25 w-13.5 bg-current mask-[url('/assets/logo-luma.svg')] mask-contain mask-no-repeat forced-color-adjust-none forced-colors:bg-[CanvasText] ${className ?? ""}`}
		/>
	);
}
