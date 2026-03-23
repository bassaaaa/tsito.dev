import type { Metadata } from 'next';
import Image from 'next/image';
import { SITE_NAME } from '../../constant';

export const metadata: Metadata = {
    title: `About | ${SITE_NAME}`,
    description: 'このブログについて',
};

const skills = ['C', 'TypeScript', 'React', 'Next.js', 'PHP', 'SQL'];

const setup = [
    { label: 'Machine', value: 'MacBook Air / Apple M5 / 16GB' },
    { label: 'Editor', value: 'Neovim' },
    { label: 'Shell', value: 'zsh' },
    { label: 'Keyboard', value: 'MX Keys Mini for Mac' },
    { label: 'Mouse', value: 'Ergo M575SPD' },
];

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
            <div className="flex flex-col items-center text-center mb-14">
                <Image
                    src="/my_icon.png"
                    alt="アイコン"
                    width={96}
                    height={96}
                    className="rounded-full ring-2 ring-(--accent) ring-offset-2 ring-offset-background mb-5"
                />
                <h1 className="text-2xl font-bold mb-1">tsito</h1>
            </div>

            <div className="space-y-10">
                <section>
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-(--accent) mb-4">
                        Profile
                    </h2>
                    <p className="text-foreground leading-relaxed">
                        1996年生まれ、広島県出身。元国家公務員。
                        <br />
                        都内でエンジニアとして働いています。
                        <br />
                        ゲーム・ガジェットが好き。
                        <br />
                        42 Tokyo 2026-02 Piscine → 2026-04 KickOff
                    </p>
                </section>

                <section className="border-t border-(--border) pt-10">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-(--accent) mb-4">
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 text-sm rounded-md border border-(--border) bg-(--surface) text-foreground"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="border-t border-(--border) pt-10">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-(--accent) mb-4">
                        Setup
                    </h2>
                    <dl className="space-y-3">
                        {setup.map(({ label, value }) => (
                            <div key={label} className="flex gap-4">
                                <dt className="w-24 shrink-0 text-sm text-(--muted)">{label}</dt>
                                <dd className="text-sm text-foreground">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                <section className="border-t border-(--border) pt-10">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-(--accent) mb-4">
                        This Blog
                    </h2>
                    <p className="text-foreground leading-relaxed">
                        未来の自分のため、42 Tokyoでの学習記録をひっそり蓄積するのが主な目的です。
                        プライベートの出来事も気が向いたら。
                    </p>
                </section>
            </div>
        </div>
    );
}
