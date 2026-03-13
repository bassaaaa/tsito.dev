export default function PostCardSkeleton() {
	return (
		<div className="py-6 border-b border-(--border) animate-pulse">
			<div className="flex items-center gap-2 mb-3">
				<div className="h-4 w-16 rounded-full bg-(--border)" />
				<div className="h-4 w-20 rounded bg-(--border)" />
			</div>
			<div className="h-6 w-3/4 rounded bg-(--border) mb-2" />
			<div className="h-4 w-full rounded bg-(--border) mb-1" />
			<div className="h-4 w-2/3 rounded bg-(--border) mb-4" />
			<div className="flex gap-2">
				<div className="h-5 w-12 rounded bg-(--border)" />
				<div className="h-5 w-14 rounded bg-(--border)" />
			</div>
		</div>
	);
}
