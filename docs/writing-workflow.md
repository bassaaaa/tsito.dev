# 記事執筆ワークフロー

## 1. アイデアを Issue に登録する

新しい記事アイデアが浮かんだら Issue を作成する。

```bash
gh issue create --repo bassaaaa/tsito.me \
  --title "記事タイトル" \
  --label "アイデア" \
  --body "## 概要\n\n## 書くこと\n- "
```

または [GitHub Issues](https://github.com/bassaaaa/tsito.me/issues) から直接作成する。

## 2. 執筆を開始する

Issue に「執筆中」ラベルを付けてブランチを切る。

```bash
gh issue edit <issue番号> --repo bassaaaa/tsito.me --add-label "執筆中"
git checkout -b post/<スラッグ>
```

例：
```bash
gh issue edit 1 --repo bassaaaa/tsito.me --add-label "執筆中"
git checkout -b post/42tokyo-kickoff
```

## 3. 記事ファイルを作成する

カテゴリに応じてディレクトリを選択する。

```
content/
  42tokyo/   # 42 Tokyo 関連
  others/    # その他
```

ファイル名は `YYYY-MM-DD.md` とする。

```markdown
---
title: "記事タイトル"
date: "YYYY-MM-DD"
category: "42Tokyo"
tags: ["タグ1", "タグ2"]
description: "記事の概要"
---

本文...
```

## 4. PR を作成してマージする

`Closes #<issue番号>` を本文に含めると、マージ時に Issue が自動クローズされる。

```bash
git add content/
git commit -m "post: 記事タイトル"
git push origin post/<スラッグ>
gh pr create \
  --title "記事: 記事タイトル" \
  --body "Closes #<issue番号>"
```

マージ → Vercel が自動デプロイ → Issue クローズ の順で完結する。

## ラベル一覧

| ラベル | 用途 |
|--------|------|
| `アイデア` | 記事アイデア（未着手） |
| `執筆中` | 執筆中 |
| `42tokyo` | 42 Tokyo 関連 |
| `技術` | 技術・開発系 |
| `ガジェット` | ガジェット・デバイス |
| `振り返り` | 振り返り・日記 |
