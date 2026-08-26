---
title: SEER 智慧影像標註平台
summary: 整合 AI 自動分割、人工審核與資料集匯出的影像標註平台，支援 Web 與 LINE 操作流程。
role: Backend / Cloud Development
date: 2026-08-01
tags: [Python, Flask, MySQL, Docker, GCP]
cover: ../../assets/images/seer-cover.png
repo: https://github.com/kyle6040607/smart-label.git
featured: true
draft: false
---

## Overview

SEER 是一套智慧影像標註平台，整合 AI 自動分割、人工審核、資料集匯出與模型訓練流程，讓使用者能透過 Web 或 LINE 將原始圖片整理為可訓練的影像資料集。

## My Role

我主要負責 Backend 與 Cloud 架構，包括：

- Flask API 設計與開發
- LINE LIFF 身分驗證與操作流程整合
- Task 建立、狀態管理與權限控制
- MySQL 任務資料持久化
- Google Cloud Storage 圖片與輸出檔案管理
- Cloud Run Service / Job 架構設計與部署
- 長時間 AI 任務的非同步執行流程

## Architecture

LINE LIFF → Flask API → MySQL → Cloud Run Job → AI Pipeline → GCS

## Challenges

### Long-running AI Tasks

AI Pipeline 包含圖片處理、模型推論與資料集匯出等工作，執行時間較長。

如果直接在 HTTP Request 中執行整個流程，使用者必須持續等待，也可能因執行時間過長導致 Request Timeout。

因此將系統拆分為：

- **Cloud Run Service**：處理登入驗證、建立任務、查詢狀態與下載授權等短時間 HTTP Request。
- **Cloud Run Job**：執行圖片處理、模型推論、資料集匯出等長時間 Background Task。