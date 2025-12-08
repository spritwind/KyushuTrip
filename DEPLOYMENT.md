# 部署指南

## 🚀 **Vercel 部署步驟**

### 準備工作

1. **建立 GitHub 倉庫**
   \`\`\`bash
   git init
   git add .
   git commit -m "🎉 Initial commit: 九州極致之旅應用程式"
   git branch -M main
   git remote add origin https://github.com/你的用戶名/kyushu-trip.git
   git push -u origin main
   \`\`\`

2. **申請 API 金鑰**
   - ✅ Google Maps API: AIzaSyDcs-sKtNk8tnuwofLKmf6qBCEsABeGoR8 (已設定)
   - ⏳ OpenWeatherMap API: 需要申請

### Vercel 部署

#### 方式 1: GitHub 自動部署（推薦）

1. **連結 Vercel 與 GitHub**
   - 前往 [vercel.com](https://vercel.com)
   - 點擊 "New Project"
   - 選擇你的 GitHub 倉庫

2. **專案配置**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **設定環境變數**
   在 Vercel 專案設定中添加：

   \`\`\`
   VITE_GOOGLE_MAPS_API_KEY = AIzaSyDcs-sKtNk8tnuwofLKmf6qBCEsABeGoR8
   VITE_OPENWEATHER_API_KEY = (填入你的金鑰)
   VITE_DEFAULT_MAP_ZOOM = 11
   VITE_MAP_LANGUAGE = ja
   \`\`\`

4. **部署**
   - 點擊 "Deploy"
   - 等待建置完成
   - 獲得部署 URL（例如：kyushu-trip.vercel.app）

#### 方式 2: Vercel CLI

\`\`\`bash
# 安裝 Vercel CLI
npm i -g vercel

# 登入
vercel login

# 部署（首次）
vercel

# 部署到生產環境
vercel --prod
\`\`\`

設定環境變數：
\`\`\`bash
vercel env add VITE_GOOGLE_MAPS_API_KEY production
vercel env add VITE_OPENWEATHER_API_KEY production
\`\`\`

## 🔧 **本地開發**

### 安裝依賴問題排查

如果遇到 npm 安裝錯誤（特別是 esbuild 相關）：

**選項 1: 使用 Yarn**
\`\`\`bash
npm install -g yarn
yarn install
yarn dev
\`\`\`

**選項 2: 清理快取**
\`\`\`bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
\`\`\`

**選項 3: 使用 pnpm**
\`\`\`bash
npm install -g pnpm
pnpm install
pnpm dev
\`\`\`

**選項 4: 在其他環境執行**
- 使用 WSL2 (Windows Subsystem for Linux)
- 使用 Docker
- 直接在 Vercel 部署（讓 Vercel 處理建置）

### 啟動開發伺服器

\`\`\`bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
\`\`\`

## 📋 **部署前檢查清單**

- [ ] Google Maps API 金鑰已設定且有效
- [ ] OpenWeatherMap API 金鑰已申請並設定
- [ ] \`.env.local\` 檔案不會被提交到 Git（已在 .gitignore）
- [ ] 所有元件路徑使用別名（@data, @components 等）
- [ ] 測試所有功能（行程、美食、地圖、購物清單）
- [ ] 檢查 RWD 在手機/平板/桌面的顯示

## 🧪 **測試建置**

在部署前本地測試生產版本：

\`\`\`bash
npm run build
npm run preview
\`\`\`

訪問 [http://localhost:4173](http://localhost:4173) 測試。

## 🌐 **自訂網域（選用）**

在 Vercel Dashboard:
1. 進入專案設定
2. 選擇 "Domains"
3. 添加自訂網域
4. 設定 DNS 記錄

## 📊 **監控與分析**

Vercel 自動提供：
- ✅ 建置日誌
- ✅ 部署預覽
- ✅ 效能分析
- ✅ 錯誤追蹤

## 🔄 **持續部署（CI/CD）**

一旦設定完成，每次推送到 main 分支都會自動觸發部署：

\`\`\`bash
git add .
git commit -m "✨ 新增功能"
git push origin main
\`\`\`

Vercel 會自動：
1. 拉取最新程式碼
2. 安裝依賴
3. 執行建置
4. 部署到生產環境

## ⚡ **效能優化建議**

部署後可以進行的優化：

1. **圖片優化**
   - 使用 WebP 格式
   - 壓縮地標圖片至 <200KB

2. **程式碼分割**
   - 已透過 Vite 自動處理

3. **快取策略**
   - 已在 vercel.json 配置

4. **CDN**
   - Vercel 自動使用全球 CDN

## 🐛 **常見問題**

### 地圖無法顯示
- 檢查 Google Maps API 金鑰是否正確
- 確認已啟用 "Maps JavaScript API"
- 檢查瀏覽器控制台是否有錯誤訊息

### 天氣資料顯示 Mock 資料
- OpenWeatherMap API 金鑰可能未設定
- 檢查 API 配額是否用盡
- 應用程式會自動降級到備用資料，不影響使用

### 建置失敗
- 檢查 Node.js 版本（建議 18+）
- 查看 Vercel 建置日誌
- 確認 package.json 的依賴版本

---

**祝部署順利！** 🎉
