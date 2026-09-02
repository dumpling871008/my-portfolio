# 林君璇的個人網站

以 Astro 建立的個人作品集，整理我的 AI 應用、Python 後端、資料工程專案與技術筆記，並提供履歷下載、Career AI 問答及私人聯絡表單。

**正式網站：** [shelly-portfolio.seer-ai.cloud](https://shelly-portfolio.seer-ai.cloud/)

![網站預覽](./public/og-image.png)

## 網站功能

- 個人介紹、技能方向與目前學習重點
- SEER 智慧影像標註平台與 RAG 履歷問答助手專案頁
- Python、MySQL、OpenCV、Machine Learning 等技術筆記
- Career AI 問答視窗：顯示 loading、回答分流、參考來源及相關站內連結
- 私人聯絡表單：Cloudflare Turnstile、人機驗證、honeypot 與後端頻率限制
- PDF 履歷下載
- 響應式版面、深色模式、SEO metadata 與自動產生的 sitemap

## 系統架構

```text
訪客瀏覽器
├── Cloudflare Workers
│   └── Astro 靜態網站（dist）
├── Cloud Run /api/chat
│   └── Flask → LlamaIndex RAG → Gemini → Firestore
└── Cloud Run /api/messages
    └── Flask → Turnstile 驗證 → Firestore
```

此儲存庫只包含 Astro 前端。Flask、RAG、LINE Bot 與 Firestore 邏輯位於另一個後端專案，兩者透過公開環境變數設定的 API URL 連接。

## 使用技術

- [Astro 7](https://astro.build/) 與 TypeScript
- Tailwind CSS v4
- Astro Content Collections 與 Zod schema
- Cloudflare Workers Static Assets
- Cloudflare Turnstile
- Cloud Run Flask API
- Gemini、LlamaIndex RAG 與 Firestore

## 本機開發

### 環境需求

- Node.js 22 或更新版本
- npm
- 如需測試 AI 或留言功能，需另行啟動 Flask 後端

### 安裝與啟動

```powershell
git clone https://github.com/dumpling871008/my-portfolio.git
cd my-portfolio
npm install
Copy-Item .env.example .env
npm run dev
```

開啟 <http://localhost:4321>。

## 環境變數

請複製 `.env.example` 為 `.env`，再填入本機或正式環境的公開設定：

| 變數 | 用途 | 是否必要 |
| --- | --- | --- |
| `PUBLIC_CHAT_API_URL` | Career AI 的 `/api/chat` 網址 | AI 功能需要 |
| `PUBLIC_MESSAGE_API_URL` | 聯絡表單的 `/api/messages` 網址 | 選填；未設定時從 Chat API 推導 |
| `PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile 公開 site key | 聯絡表單需要 |

範例：

```dotenv
PUBLIC_CHAT_API_URL=http://localhost:8080/api/chat
PUBLIC_MESSAGE_API_URL=http://localhost:8080/api/messages
PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
```

> `PUBLIC_` 開頭的值會被打包進瀏覽器程式碼，只能存放可公開資訊。Turnstile secret、Gemini 憑證與 Google 服務帳戶金鑰只能設定在 Flask／Cloud Run 後端。

## npm 指令

| 指令 | 用途 |
| --- | --- |
| `npm run dev` | 啟動本機開發伺服器 |
| `npm run build` | 執行 Astro 檢查並產生 `dist` |
| `npm run preview` | 預覽正式 build |
| `npm run check` | 執行 `astro check` |
| `npm run format` | 使用 Prettier 格式化專案 |
| `npm run format:check` | 檢查程式碼格式 |

## 更新網站內容

### 個人資料

網站名稱、職稱、Email、簡介與社群連結集中在 `src/site.config.ts`，About 頁的詳細內容位於 `src/pages/about.astro`。

### 新增專案

在 `src/content/projects/` 建立 Markdown：

```md
---
title: 專案名稱
summary: 專案的一句話摘要
role: Backend / AI Development
date: 2026-09-01
tags: [Python, Flask, GCP]
cover: ../../assets/images/project-cover.png
coverAlt: 專案畫面說明
url: https://example.com
repo: https://github.com/username/repository
featured: true
draft: false
---

## 專案介紹

使用 Markdown 撰寫完整內容。
```

`cover`、`coverAlt`、`url` 與 `repo` 可省略。`summary` 最多 160 個字，檔名會成為網址，例如 `rag-career-assistant.md` 對應 `/projects/rag-career-assistant`。

### 新增筆記

在 `src/content/notes/` 建立 Markdown：

```md
---
title: 筆記標題
summary: 筆記摘要
date: 2026-09-01
tags: [Python, Notes]
notionUrl: https://www.notion.so/your-page
draft: false
---

## 內容

使用 Markdown 撰寫筆記。
```

`notionUrl` 可省略，`summary` 最多 180 個字。筆記圖片建議放在 `src/assets/notes/`，並使用相對路徑引用，讓 Astro 在 build 時處理圖片。

### 更新履歷

以新版 PDF 取代 `public/林君璇_CV.pdf` 並保持檔名一致；首頁及 About 頁的下載按鈕會自動提供這份檔案。

## 專案結構

```text
├── public/                         # favicon、OG 圖片與履歷 PDF
├── src/
│   ├── assets/                     # 專案與筆記圖片
│   ├── components/                 # AI Chat、聯絡表單及共用 UI
│   ├── content/
│   │   ├── notes/                  # 技術筆記 Markdown
│   │   └── projects/               # 專案 Markdown
│   ├── layouts/                    # 共用頁面版型
│   ├── pages/                      # Astro 路由
│   ├── styles/                     # 全域樣式與設計 tokens
│   ├── content.config.ts           # Content Collections schema
│   └── site.config.ts              # 個人資料與導覽設定
├── astro.config.mjs                # Astro、sitemap、圖片與字型設定
├── wrangler.jsonc                  # Cloudflare Workers 靜態資源設定
└── package.json
```

## 部署

`wrangler.jsonc` 已將 `./dist` 設為 Workers Static Assets 目錄，並設定 Custom Domain `shelly-portfolio.seer-ai.cloud`。

```powershell
npm install
npm run build
npx wrangler deploy
```

若使用 Cloudflare 的遠端建置流程，必須在專案設定中加入上述 `PUBLIC_` 環境變數，再重新 build。Cloud Run 的 CORS allowlist 也必須包含正式網站 origin：

```text
https://shelly-portfolio.seer-ai.cloud
```

部署後請實際檢查首頁、專案／筆記頁、履歷下載、AI 問答與聯絡表單。

## 隱私與安全

- AI 問題與回答可能由後端保存，用於改善服務；請勿輸入敏感資訊。
- 聯絡表單的內容不會公開顯示。
- `.env` 已被 Git 忽略，不要提交任何私密金鑰。
- 前端沒有提供讀取 Firestore 問答或留言紀錄的公開 API。

## 授權

程式授權請參考 [LICENSE](./LICENSE)。履歷與個人內容僅供瀏覽及求職聯繫使用。
