import Link from 'next/link';
import { SITE_NAME } from '@/constant';

export const metadata = { title: `404 | ${SITE_NAME}` };

export default function NotFound() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-center gap-8">
            <p className="text-8xl font-black tracking-tighter text-(--accent) opacity-20">
                404
            </p>
            <div className="text-center flex flex-col items-center gap-2">
                <p className="text-(--muted) text-sm font-mono tracking-widest uppercase">
                    Page Not Found
                </p>
                <p className="text-(--muted) text-xs mt-1">
                    お探しのページは存在しないか、移動した可能性があります
                </p>
            </div>
            <Link
                href="/"
                className="text-sm text-(--accent) hover:text-(--accent-hover) transition-colors mt-2"
            >
                ← トップに戻る
            </Link>
        </div>
    );
}
