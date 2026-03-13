import PostCardSkeleton from '@/components/PostCardSkeleton';

export default function BlogLoading() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
			<div className="h-8 w-16 rounded bg-(--border) mb-8 animate-pulse" />

			{/* Category filter pills */}
			<div className="mb-8 flex flex-wrap gap-2 animate-pulse">
				{Array.from({ length: 4 }).map((_, i) => (
					<div key={i} className="h-6 w-16 rounded-full bg-(--border)" />
				))}
			</div>

			{Array.from({ length: 6 }).map((_, i) => (
				<PostCardSkeleton key={i} />
			))}
		</div>
	);
}
