import { getAllPosts, getAllCategories } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_NAME } from '@/constant';

type Props = {
	params: Promise<{ cat: string }>;
};

export async function generateStaticParams() {
	const categories = getAllCategories();
	return categories.map((cat) => ({ cat: encodeURIComponent(cat) }));
}

export async function generateMetadata({ params }: Props) {
	const { cat } = await params;
	const category = decodeURIComponent(cat);
	return { title: `${category} | ${SITE_NAME}` };
}

export default async function CategoryPage({ params }: Props) {
	const { cat } = await params;
	const category = decodeURIComponent(cat);
	const allPosts = getAllPosts();
	const posts = allPosts.filter((p) => p.category === category);

	if (posts.length === 0) notFound();

	return (
		<div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
			<div className="mb-6">
				<Link
					href="/blog"
					className="text-sm text-gray-500 dark:text-gray-400 hover:underline"
				>
					← 記事一覧
				</Link>
			</div>
			<h1 className="text-2xl font-bold mb-6">
				カテゴリ: <span className="text-blue-600 dark:text-blue-400">{category}</span>
			</h1>
			<div className="divide-y divide-gray-200 dark:divide-gray-800">
				{posts.map((post) => (
					<PostCard key={post.slug} post={post} />
				))}
			</div>
		</div>
	);
}
