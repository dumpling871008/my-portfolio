---
title: "GIT"
summary: "GIT 的學習筆記，整理核心概念、實作範例與常用指令。"
date: 2026-07-01
tags: ["Git", "版本控制"]
notionUrl: https://app.notion.com/p/38f83f385f3a802193cfcb9cc79dfd97?pvs=204
draft: false
---
## 步驟 1：檢查是否已有 SSH Key
開啟 PowerShell：
```plain text
ls ~/.ssh
```
如果看到像下面的檔案：
```plain text
id_ed25519
id_ed25519.pub
```
或
```plain text
id_rsa
id_rsa.pub
```
代表你已經有 SSH Key，可以直接跳到**步驟 4**。
---
## 步驟 2：建立 SSH Key（推薦 Ed25519）
將 `your_email@example.com` 改成你 GitHub 註冊的 Email：
```plain text
ssh-keygen-t ed25519-C"your_email@example.com"
```
例如：
```plain text
ssh-keygen-t ed25519-C"abc@gmail.com"
```
接著會看到：
```plain text
Enter file in which to save the key:
```
直接按 **Enter**。
接著：
```plain text
Enter passphrase:
```
- 不想每次輸入密碼 → 直接按 Enter
- 想增加安全性 → 設定一組密碼
最後會看到：
```plain text
Your identification has been saved in ...
Your public key has been saved in ...
```
表示建立成功。
---
## 步驟 3：啟動 SSH Agent
PowerShell：
```plain text
Get-Service ssh-agent
```
如果沒有啟動：
```plain text
Start-Service ssh-agent
```
然後加入金鑰：
```plain text
ssh-add ~/.ssh/id_ed25519
```
成功會顯示：
```plain text
Identity added:
```
---
## 步驟 4：複製公開金鑰
Windows 可以直接：
```plain text
Get-Content ~/.ssh/id_ed25519.pub
```
或
```plain text
cat ~/.ssh/id_ed25519.pub
```
會看到一長串：
```plain text
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... your_email@example.com
```
全部複製。
---
## 步驟 5：加入 GitHub
登入 GitHub：
1. 點右上角頭像。
2. **Settings**。
3. **SSH and GPG keys**。
4. 點 **New SSH key**。
5. 輸入：
- **Title**：例如 `My Laptop`
- **Key type**：Authentication Key
- **Key**：貼上剛剛複製的內容。
6. 按 **Add SSH key**。
---
## 步驟 6：測試是否成功
執行：
```plain text
ssh-Tgit@github.com
```
第一次會詢問：
```plain text
Are you sure you want to continue connecting?
```
輸入：
```plain text
yes
```
如果成功，會看到：
```plain text
Hi <你的 GitHub 帳號>! You've successfully authenticated, but GitHub does not provide shell access.
```
---
## 步驟 7：把 Repository 改成 SSH 網址
查看目前網址：
```plain text
git remote-v
```
如果看到：
```plain text
https://github.com/你的帳號/專案.git
```
改成 SSH：
```plain text
git remote set-url origingit@github.com:你的帳號/專案.git
```
再確認一次：
```plain text
git remote-v
```
應該會變成：
```plain text
origin  git@github.com:你的帳號/專案.git (fetch)
origin  git@github.com:你的帳號/專案.git (push)
```
之後就可以直接：
```plain text
git push
```
不用再輸入 GitHub 帳號和密碼。

# Git 第一次上傳 GitHub 完整流程
## Step 1：進入專案資料夾
確認目前位於專案根目錄。
```plain text
cd 專案資料夾
```
例如：
```plain text
cd C:\Users\TMP-214\Desktop\todolist
```
---
## Step 2：初始化 Git Repository
建立 Git Repository。
```plain text
git init
```
執行後會看到：
```plain text
Initialized empty Git repository...
```
---
## Step 3：設定 Git（第一次安裝 Git 才需要）
設定作者名稱：
```plain text
git config--global user.name"你的GitHub名稱"
```
例如：
```plain text
git config--global user.name"dumpling87"
```
設定 Email（建議與 GitHub 帳號綁定的 Email 相同）：
```plain text
git config--global user.email"你的Email"
```
例如：
```plain text
git config--global user.email"dumpling8877@gmail.com"
```
設定新 Repository 預設分支：
```plain text
git config--global init.defaultBranch main
```
---
## Step 4：建立 `.gitignore`
建立：
```plain text
.gitignore
```
Node.js 專案建議內容：
```plain text
node_modules/
.env
*.log
```
避免將：
- node_modules
- API Key
- Log
推到 GitHub。
---
## Step 5：確認哪些檔案會被加入 Git
```plain text
git status
```
確認：
✅ 要上傳的檔案有出現
❌ `.env`
❌ `node_modules`
沒有出現。
---
## Step 6：加入暫存區（Stage）
將目前所有檔案加入暫存區：
```plain text
git add .
```
也可以加入單一檔案：
```plain text
git add app.js
```
再次確認：
```plain text
git status
```
看到：
```plain text
Changes to be committed
```
表示成功。
### Q1：不小心 `git add .` 怎麼辦？
取消全部暫存：
```plain text
git restore--staged .
```
取消單一檔案：
```plain text
git restore--staged 檔名
```
---
## Step 7：建立第一個 Commit
建立版本紀錄：
```plain text
git commit-m"Initial commit"
```
例如：
```plain text
git commit-m"完成 Todo API"
```
查看 Commit：
```plain text
git log--oneline
```
例如：
```plain text
8a5d4b4 Initial commit
```
---
## Step 8：GitHub 建立 Repository
登入 GitHub。
點選：
```plain text
New Repository
```
輸入：
```plain text
Repository Name
```
例如：
```plain text
node-todolist
```
**不要勾選**
❌ README
❌ .gitignore
❌ License
因為本地專案已經有 Git 紀錄。
---
## Step 9：加入遠端 Repository
GitHub 會提供 Repository URL。
例如：
```plain text
https://github.com/dumpling871008/node-todolist.git
```
加入遠端：
```plain text
git remote add origin https://github.com/dumpling871008/node-todolist.git
```
確認：
```plain text
git remote-v
```
成功會看到：
```plain text
origin  https://github.com/dumpling871008/node-todolist.git (fetch)
origin  https://github.com/dumpling871008/node-todolist.git (push)
```
---
## Step 10：第一次 Push
推送到 GitHub：
```plain text
git push-u origin main
```
第一次需要 `-u`。
之後只要：
```plain text
git push
```
即可。
### Q：Push 時出現
```plain text
error: src refspec main does not match any
```
通常表示：
- 還沒有 `git commit`
- 或目前分支不是 `main`
可以檢查：
```plain text
git branch
git log--oneline
```
---
# 之後每次更新專案流程
修改程式後：
```plain text
git status
```
↓
```plain text
git add .
```
↓
```plain text
git commit-m"新增 PATCH API"
```
↓
```plain text
git push
```
---
# 常用 Git 指令速查
<table header-row="true">
<tr>
<td>指令</td>
<td>功能</td>
</tr>
<tr>
<td>`git status`</td>
<td>查看目前狀態</td>
</tr>
<tr>
<td>`git add .`</td>
<td>加入所有變更到暫存區</td>
</tr>
<tr>
<td>`git add 檔名`</td>
<td>加入指定檔案</td>
</tr>
<tr>
<td>`git commit -m "訊息"`</td>
<td>建立一個版本</td>
</tr>
<tr>
<td>`git log --oneline`</td>
<td>查看 Commit 紀錄</td>
</tr>
<tr>
<td>`git remote -v`</td>
<td>查看遠端 Repository</td>
</tr>
<tr>
<td>`git push`</td>
<td>上傳到 GitHub</td>
</tr>
<tr>
<td>`git pull`</td>
<td>從 GitHub 下載最新版本</td>
</tr>
<tr>
<td>`git branch`</td>
<td>查看目前分支</td>
</tr>
</table>
<table header-row="true">
<tr>
<td>指令</td>
<td>用途</td>
<td>範例</td>
</tr>
<tr>
<td>`cd path`</td>
<td>移動到指定目錄</td>
<td>`cd /tmp`（移動到 `/tmp` 目錄）`cd ..`（移動到上一層目錄）</td>
</tr>
<tr>
<td>`echo "xxx" > file`</td>
<td>建立一個檔案，並將文字寫入檔案</td>
<td>`echo "test123" > test.txt`</td>
</tr>
<tr>
<td>`mkdir tmpdir`</td>
<td>建立新目錄</td>
<td>`mkdir /tmp/test`（在 `/tmp` 下建立 `test` 目錄）</td>
</tr>
<tr>
<td>`mv path1 path2/`</td>
<td>將檔案或目錄移動到指定位置</td>
<td>`mv /tmp/file /tmp/test/`（將 `file` 移到 `/tmp/test/`）</td>
</tr>
<tr>
<td>`mv old new`</td>
<td>將檔案或目錄重新命名</td>
<td>`mv /tmp/file /tmp/file_new`（將 `file` 改名為 `file_new`）</td>
</tr>
<tr>
<td>`rm file`</td>
<td>刪除檔案（不能刪除目錄）</td>
<td>`rm /tmp/file`</td>
</tr>
<tr>
<td>`rmdir folder`</td>
<td>刪除空目錄</td>
<td>`rmdir /tmp/test`（`test` 必須是空目錄）</td>
</tr>
<tr>
<td>`rm -r folder`</td>
<td>遞迴刪除目錄及其所有內容</td>
<td>`rm -r /tmp/test`</td>
</tr>
<tr>
<td>`pwd`</td>
<td>顯示目前所在目錄</td>
<td>`pwd`</td>
</tr>
<tr>
<td>`ls -la`</td>
<td>列出目前目錄所有檔案（包含隱藏檔）及詳細資訊</td>
<td>`ls -la`</td>
</tr>
</table>
