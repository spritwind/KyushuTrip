# 🚀 快速啟動指南 - 跳過本地建置

由於 Windows 環境的 npm 安裝問題，我們採用 **直接部署到 Vercel** 的方式。

## ⚡ 5分鐘部署流程

### Step 1: 初始化 Git（如果還沒做）

```bash
git init
git add .
git commit -m "🎉 九州極致之旅 - 初始版本"
```

### Step 2: 推送到 GitHub

#### 2.1 在 GitHub 建立新倉庫
1. 前往 https://github.com/new
2. 倉庫名稱：`kyushu-trip`
3. 設為 Public 或 Private
4. **不要**勾選任何初始化選項
5. 點擊 "Create repository"

#### 2.2 推送程式碼
```bash
git branch -M main
git remote add origin https://github.com/你的用戶名/kyushu-trip.git
git push -u origin main
```

### Step 3: 部署到 Vercel

#### 3.1 連結 Vercel
1. 前往 https://vercel.com/new
2. 選擇 "Import Git Repository"
3. 選擇剛建立的 `kyushu-trip` 倉庫
4. 點擊 "Import"

#### 3.2 配置專案
Vercel 會自動偵測到 Vite，無需手動設定！

但需要設定**環境變數**：

**Environment Variables:**
```
VITE_GOOGLE_MAPS_API_KEY = AIzaSyDcs-sKtNk8tnuwofLKmf6qBCEsABeGoR8
```

（OpenWeatherMap API Key 可以之後再加）

#### 3.3 部署
點擊 "Deploy"，等待 2-3 分鐘，完成！

---

## 🎯 部署完成後

你會獲得一個 URL，例如：
```
https://kyushu-trip-你的名字.vercel.app
```

立即可以在手機、平板、電腦上測試！

---

## 📱 測試功能檢查清單

- [ ] 切換日期（1/21, 1/22, 1/23）
- [ ] 查看行程時間軸
- [ ] 點擊美食卡片查看推薦
- [ ] 開啟地圖標記景點（需要 Google Maps API）
- [ ] 點擊 "開啟 Google 導航" 按鈕
- [ ] 勾選購物清單項目（重新載入後應保留）
- [ ] 測試手機版響應式設計

---

## 🔧 如果想在本地測試（選用）

### 方法 A: 使用 WSL2（推薦）

```bash
# 在 Windows PowerShell（管理員）執行
wsl --install

# 重啟後，在 WSL 終端執行
cd /mnt/c/Users/sprit/Desktop/九州之旅/KyushuTrip
npm install
npm run dev
```

### 方法 B: 使用 Docker

```bash
# 建立 Dockerfile
docker run -it --rm -v ${PWD}:/app -w /app -p 3000:3000 node:18 bash
npm install
npm run dev
```

### 方法 C: 使用線上 IDE

- **StackBlitz**: https://stackblitz.com/
- **CodeSandbox**: https://codesandbox.io/
- **GitHub Codespaces**: https://github.com/features/codespaces

直接匯入你的 GitHub 倉庫即可在瀏覽器中開發！

---

## ⚠️ 常見問題

### Q: 地圖無法顯示？
A: 確認 Vercel 環境變數中有設定 `VITE_GOOGLE_MAPS_API_KEY`

### Q: 天氣顯示 Mock 資料？
A: 正常！OpenWeatherMap API 需要額外申請（可選）

### Q: 購物清單勾選沒保存？
A: 檢查瀏覽器是否阻擋 localStorage

### Q: 如何更新程式碼？
A:
```bash
git add .
git commit -m "✨ 更新功能"
git push
```
Vercel 會自動重新部署！

---

## 🎊 下一步

1. ✅ 部署到 Vercel
2. ✅ 在手機上測試
3. ⏳ 申請 OpenWeatherMap API（可選）
4. ⏳ 添加地標圖片到 `public/images/`（可選）
5. ⏳ 自訂網域（可選）

---

**祝你九州之旅順利！** 🗾🎌
