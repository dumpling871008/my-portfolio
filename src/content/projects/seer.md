---
title: Seer 智慧影像標註平台 
summary: SEER 是一套整合 AI 自動分割、人工審核、資料集匯出與模型訓練的影像標註平台，支援 Web 與 LINE，完成從原始圖片到可訓練資料集與模型訓練的完整流程。
role: Backend / Cloud Development
date: 2026-08-01
tags: [Python, Flask, MySQL, Docker, GCP]
url: https://example.com
repo: https://github.com/kyle6040607/smart-label.git
featured: true
draft: false
---

## Overview

SEER 是一套整合 AI 影像標記與資料集產生流程的平台。

## My Role

我主要負責後端 API、LINE LIFF 串接、Cloud Run 部署、
Task 管理以及 Cloud Storage 整合。

## Architecture

LINE LIFF → Flask API → MySQL → Cloud Run Job → AI Pipeline → GCS

## Challenges

### Long-running AI Task

AI Pipeline 執行時間較長，如果直接放在 HTTP Request 中，
可能造成 timeout。

因此將短時間 HTTP Request 與長時間 AI 任務拆分：

- Cloud Run Service：API
- Cloud Run Job：AI Pipeline
