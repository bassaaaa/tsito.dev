export default function AboutLoading() {
	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-pulse">
			{/* Avatar + name */}
			<div className="flex flex-col items-center text-center mb-14">
				<div className="w-24 h-24 rounded-full bg-(--border) mb-5" />
				<div className="h-7 w-20 rounded bg-(--border)" />
			</div>

			<div className="space-y-10">
				{/* Profile */}
				<section>
					<div className="h-3 w-16 rounded bg-(--border) mb-4" />
					<div className="space-y-2">
						<div className="h-4 w-full rounded bg-(--border)" />
						<div className="h-4 w-4/5 rounded bg-(--border)" />
						<div className="h-4 w-3/5 rounded bg-(--border)" />
					</div>
				</section>

				{/* Skills */}
				<section className="border-t border-(--border) pt-10">
					<div className="h-3 w-12 rounded bg-(--border) mb-4" />
					<div className="flex flex-wrap gap-2">
						{Array.from({ length: 6 }).map((_, i) => (
							<div key={i} className="h-7 w-16 rounded-md bg-(--border)" />
						))}
					</div>
				</section>

				{/* This Blog */}
				<section className="border-t border-(--border) pt-10">
					<div className="h-3 w-20 rounded bg-(--border) mb-4" />
					<div className="space-y-2">
						<div className="h-4 w-full rounded bg-(--border)" />
						<div className="h-4 w-5/6 rounded bg-(--border)" />
					</div>
				</section>
			</div>
		</div>
	);
}
