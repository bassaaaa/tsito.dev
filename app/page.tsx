import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
export default function Home() {
	const posts = getAllPosts().slice(0, 5);

	return (
		<div className="max-w-3xl mx-auto px-4 py-10">
			<section className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700 flex flex-row items-center gap-6">
				<div className="shrink-0">
					<Image
						src="/my_icon_bg_white.png"
						alt="アイコン"
						width={160}
						height={160}
						className="rounded-full border border-gray-200 dark:border-gray-700"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<div>
						<p className="font-bold text-2xl tracking-wide">tsito</p>
					</div>
					<p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
						1996年生まれ、広島県出身。
						<br />
						都内でエンジニアとして働いています。
						<br />
						ゲーム・ガジェットが好きです。
						<br />
						42 Tokyoにて2026年2月に実施された入学試験「Piscine」に合格。同年4月入学。
					</p>
					<Link
						href="/about"
						className="text-sm text-blue-600 dark:text-blue-400 hover:underline self-start"
					>
						more about me →
					</Link>
				</div>
			</section>

			<section>
				<h2 className="text-xl font-semibold mb-5">最新記事</h2>
				<div className="flex flex-col gap-4">
					{posts.map((post) => (
						<PostCard key={post.slug} post={post} />
					))}
				</div>
				<div className="mt-6 text-right">
					<Link
						href="/blog"
						className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
					>
						記事一覧へ →
					</Link>
				</div>
			</section>
		</div>
	);
}
