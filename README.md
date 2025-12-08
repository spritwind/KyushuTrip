# 九州極致之旅 | Kyushu Premium Journey

一個專為2025年1月21-23日九州旅行設計的互動式行程規劃應用程式。

## 功能特色

- ✅ **3天詳細行程** - 福岡、別府、由布院完整規劃
- ✅ **Google Maps 整合** - 景點標記、路線繪製、一鍵導航
- ✅ **即時天氣預報** - OpenWeatherMap API 整合
- ✅ **美食推薦雷達** - 精選 Google 4.5+ 星級名店
- ✅ **購物清單管理** - 本地儲存，勾選持久化
- ✅ **響應式設計** - 手機/平板/桌面完美適配

## 技術棧

- **前端框架**: React 18
- **建置工具**: Vite 5
- **樣式方案**: Tailwind CSS 3
- **地圖服務**: Google Maps JavaScript API
- **天氣服務**: OpenWeatherMap API
- **圖示庫**: Lucide React
- **HTTP 客戶端**: Axios
- **部署平台**: Vercel

## 快速開始

### 1. 安裝依賴

\`\`\`bash
npm install
\`\`\`

### 2. 設定環境變數

複製 \`.env.example\` 為 \`.env.local\` 並填入 API 金鑰：

\`\`\`bash
cp .env.example .env.local
\`\`\`

編輯 \`.env.local\`：

\`\`\`env
VITE_GOOGLE_MAPS_API_KEY=你的_Google_Maps_API_金鑰
VITE_OPENWEATHER_API_KEY=你的_OpenWeather_API_金鑰
\`\`\`

### 3. 啟動開發伺服器

\`\`\`bash
npm run dev
\`\`\`

訪問 [http://localhost:3000](http://localhost:3000)

### 4. 建置生產版本

\`\`\`bash
npm run build
npm run preview
\`\`\`

## API 金鑰申請

### Google Maps API

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 建立新專案
3. 啟用 **Maps JavaScript API**
4. 建立憑證（API Key）
5. 複製金鑰到 \`.env.local\`

### OpenWeatherMap API

1. 前往 [OpenWeatherMap](https://openweathermap.org/api)
2. 註冊免費帳號
3. 取得 API Key
4. 複製金鑰到 \`.env.local\`

## 專案結構

\`\`\`
KyushuTrip/
├── src/
│   ├── components/       # React 元件
│   │   ├── layout/      # Header, TabNav
│   │   ├── timeline/    # 行程相關
│   │   ├── gourmet/     # 美食相關
│   │   ├── map/         # 地圖相關
│   │   ├── shopping/    # 購物清單
│   │   └── weather/     # 天氣小工具
│   ├── data/            # 靜態資料
│   ├── hooks/           # 自訂 Hooks
│   ├── services/        # API 服務
│   ├── utils/           # 工具函式
│   └── config/          # 配置檔案
├── public/              # 靜態資源
└── index.html           # HTML 入口
\`\`\`

## 部署到 Vercel

### 方式 1: GitHub 自動部署（推薦）

1. 將專案推送到 GitHub
2. 前往 [Vercel](https://vercel.com)
3. 匯入 GitHub 倉庫
4. 在環境變數設定中添加 API 金鑰
5. 部署完成！

### 方式 2: Vercel CLI

\`\`\`bash
npm i -g vercel
vercel login
vercel --prod
\`\`\`

在 Vercel Dashboard 設定環境變數。

## 行程概覽

### Day 1 (1/21) - 福岡抵達與市區探索
- 福岡機場 → 博多站
- teamLab Forest / Lalaport
- 中洲屋台街

### Day 2 (1/22) - 別府地獄巡禮與溫泉
- 別府地獄巡禮（海地獄、血池地獄）
- 地獄蒸工房午餐
- 竹瓦溫泉砂浴體驗

### Day 3 (1/23) - 由布院散策與九重滑雪
- 湯之坪街道 & 金鱗湖
- 九重森林公園滑雪場
- 筋湯溫泉住宿

## 授權

MIT License © 2025

---

🚀 **祝您九州之旅愉快！**
