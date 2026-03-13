export default function BlogPostLoading() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-pulse">
			{/* Breadcrumb */}
			<div className="flex gap-2 mb-8">
				<div className="h-4 w-10 rounded bg-(--border)" />
				<div className="h-4 w-2 rounded bg-(--border)" />
				<div className="h-4 w-10 rounded bg-(--border)" />
				<div className="h-4 w-2 rounded bg-(--border)" />
				<div className="h-4 w-32 rounded bg-(--border)" />
			</div>

			{/* Meta */}
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-4">
					<div className="h-5 w-20 rounded-full bg-(--border)" />
					<div className="h-4 w-24 rounded bg-(--border)" />
				</div>
				<div className="h-9 w-3/4 rounded bg-(--border) mb-3" />
				<div className="h-9 w-1/2 rounded bg-(--border) mb-5" />
				<div className="flex gap-2">
					<div className="h-5 w-14 rounded bg-(--border)" />
					<div className="h-5 w-16 rounded bg-(--border)" />
				</div>
			</div>

			{/* TOC */}
			<div className="h-10 w-full rounded-lg bg-(--border) mb-8" />

			{/* Article body */}
			<div className="space-y-3">
				{[...Array(3)].map((_, i) => (
					<div key={i} className="space-y-2">
						<div className="h-6 w-40 rounded bg-(--border)" />
						<div className="h-4 w-full rounded bg-(--border)" />
						<div className="h-4 w-full rounded bg-(--border)" />
						<div className="h-4 w-5/6 rounded bg-(--border)" />
						<div className="h-4 w-full rounded bg-(--border)" />
						<div className="h-4 w-3/4 rounded bg-(--border)" />
					</div>
				))}
			</div>
		</div>
	);
}
