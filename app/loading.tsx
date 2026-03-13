import PostCardSkeleton from '@/components/PostCardSkeleton';

export default function HomeLoading() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
			{/* Profile */}
			<section className="mb-12 pb-12 border-b border-(--border) flex flex-row items-center gap-6 animate-pulse">
				<div className="shrink-0 w-20 h-20 rounded-full bg-(--border)" />
				<div className="flex flex-col gap-2 flex-1">
					<div className="h-6 w-24 rounded bg-(--border)" />
					<div className="h-4 w-56 rounded bg-(--border)" />
					<div className="h-4 w-16 rounded bg-(--border)" />
				</div>
			</section>

			{/* Latest posts */}
			<section>
				<div className="h-3 w-24 rounded bg-(--border) mb-6 animate-pulse" />
				{Array.from({ length: 5 }).map((_, i) => (
					<PostCardSkeleton key={i} />
				))}
			</section>
		</div>
	);
}
