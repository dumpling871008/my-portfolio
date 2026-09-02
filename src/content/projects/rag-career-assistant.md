---
title: RAG 個人履歷 AI 問答助手
summary: 結合個人知識庫、LlamaIndex 向量檢索與 Gemini，回答經歷、技能與專案問題，並提供參考來源與待本人確認的問題分流。
role: AI Application / Backend / Cloud Development
date: 2026-08-31
tags: [RAG, Python, Flask, LlamaIndex, Gemini, Firestore, Cloud Run, Astro]
url: https://shelly-portfolio.seer-ai.cloud/
featured: true
draft: false
---

## 專案介紹

這是整合在個人網站中的 AI 求職助理，讓訪客可以用對話了解我的經歷、技能與專案分工。

系統採用 RAG（Retrieval-Augmented Generation，檢索增強生成）：先從整理好的個人知識庫找出相關片段，再交給 Gemini 產生回答。設計重點不只是回答問題，也包含來源追蹤、資料不足時的處理，以及從前端到雲端 API 的整合。

## 實作範圍

- **知識庫整理**：以 Markdown 保存履歷與專案等資料，透過 manifest 指定要建立索引的文件，依標題切分知識片段，保留來源文件、段落與 `source_id`。
- **向量檢索**：使用 LlamaIndex 與 Google GenAI Embedding 建立向量索引，保存索引供後續載入，並依問題取回相關片段。
- **回答與分流**：結合回答政策與檢索內容，要求 Gemini 回傳結構化結果，再由後端驗證分流欄位及來源 ID。
- **API 與介面整合**：以 Flask 提供網站問答 API，Astro 前端送出問題、顯示回答與參考資料；LINE Bot 路由共用問答服務。
- **雲端部署**：Astro 網站以 Wrangler 部署至 Cloudflare Workers，Flask API 透過 Docker、Gunicorn 部署至 Cloud Run，需本人確認的問題記錄在 Firestore。

## 問答流程

1. 訪客在聊天視窗輸入問題，前端以 JSON 傳送至 Flask `/api/chat`。
2. 後端透過 LlamaIndex 檢索個人知識庫，取得相關段落與來源 ID。
3. Gemini 根據回答政策、使用者問題及檢索片段，產生結構化的回答與分流結果。
4. 後端過濾不屬於本次檢索結果的來源 ID；若回答沒有有效來源，改為需要本人確認的狀態。
5. 前端顯示回答與參考資料；需要本人確認的問題另存入 Firestore，供後續人工處理。

## 回答分流設計

### ANSWER：根據已有資料回答

針對經歷、技能與專案等問題，要求模型依據檢索到的公開資訊回答。回傳的 `source_ids` 會在聊天室下方列為參考資料。

### HANDOFF：保留給本人確認

資料不足、涉及未確認資訊或需要本人承諾的問題，使用固定提示，不讓模型自行填補答案。後端將問題、分流原因、來源資訊與管道記錄至 Firestore，標記為待處理。

### OUT_OF_SCOPE：限制回答範圍

對與個人經歷及求職無關的問題，或要求捏造經歷、揭露提示的輸入，透過回答政策引導模型回到助理的用途。

## 工程挑戰與處理

### 檢索相關，不代表一定能回答

向量分數反映文字相關程度，不能直接代表資料可以公開，或足以支持答案。因此除了檢索，還加入回答政策、結構化分流及來源 ID 檢查。這些措施協助限制回答範圍，但不代表 AI 回答完全不會出錯。

### 本機 API 成功，不代表瀏覽器可以使用

網站與 API 分別部署在 Cloudflare Workers 和 Cloud Run，需要處理瀏覽器的跨來源請求。後端使用明確的 origin 清單，支援 JSON POST 與 OPTIONS preflight；前端透過 `PUBLIC_CHAT_API_URL` 在建置時設定 API 網址。

### 等待與失敗狀態也是功能的一部分

聊天介面提供 loading 提示、等待期間停用送出、空白與 500 字輸入限制，以及透過 AbortController 實作的 30 秒逾時處理。API 失敗或網路無法連線時，顯示友善訊息，讓訪客知道目前狀態。

## 驗證與目前限制

後端已有涵蓋知識片段載入、無效來源轉交、HANDOFF 寫入與 API/CORS 行為的測試，並提供批次檢索評估工具，用來觀察不同問題類型的檢索結果。

目前網站內容與 RAG 知識庫仍分開管理，更新網站介紹不會自動同步問答索引；知識庫變更後仍需重新建立索引。後續可加入內容管理、索引更新流程與更完整的回答品質評估。

## 線上體驗

點擊本頁下方的「Visit live」，回到首頁後開啟右下角「詢問 AI」，即可體驗目前的問答服務。例如：

- 君璇目前的專業方向是什麼？
- 君璇在 SEER 專案中負責哪些工作？
- 君璇具備哪些 Python 後端與雲端開發經驗？
