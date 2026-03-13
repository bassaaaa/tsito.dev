import PostCardSkeleton from '@/components/PostCardSkeleton';

export default function CategoryLoading() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-pulse">
			{/* Back link + title */}
			<div className="mb-8">
				<div className="h-4 w-14 rounded bg-(--border)" />
				<div className="mt-4">
					<div className="h-3 w-20 rounded bg-(--border) mb-2" />
					<div className="h-8 w-40 rounded bg-(--border)" />
				</div>
			</div>

			{Array.from({ length: 4 }).map((_, i) => (
				<PostCardSkeleton key={i} />
			))}
		</div>
	);
}
