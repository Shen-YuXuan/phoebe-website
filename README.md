# Phoebe 個人網站

沈玉璇（Phoebe）的個人作品集網站，整理個人履歷、專題作品與自傳。
以純 HTML、CSS、JavaScript 製作，不需要任何框架或建置工具。

## 頁面

| 頁面 | 檔案 | 內容 |
| --- | --- | --- |
| 首頁 | `index.html` | 自我介紹、重點成就、核心專長、專案展示、聯絡方式 |
| 個人履歷 | `resume.html` | 個人資訊、求職意向、學歷、證照、競賽、工作經歷、技能（摺疊式列表） |
| 專題作品 | `projects.html` | ICOPE 影像辨識輔助系統（全國第一名）與其他實作、企劃 |
| 自傳 | `autobiography.html` | 個人特質、求學歷程、核心專長、未來目標 |

## 專案結構

```
phoebe-website/
├── index.html
├── resume.html
├── projects.html
├── autobiography.html
├── css/
│   ├── variables.css       # 設計變數（色彩、字型）
│   ├── base.css            # 全站共用樣式
│   ├── components.css      # 共用元件樣式
│   ├── home.css            # 首頁
│   ├── resume.css          # 個人履歷頁
│   ├── projects.css        # 專題作品頁
│   └── autobiography.css   # 自傳頁
├── js/
│   └── components.js       # 導覽列、頁尾 Web Component，履歷摺疊列表捲動
└── images/                 # 個人照片與專題圖片
```

## 技術重點

- **Web Components**：導覽列 `<site-navbar>` 與頁尾 `<site-footer>` 定義在 `js/components.js`，各頁只要放入標籤即可共用，並會依目前網址自動標示當前頁面。
- **CSS 變數**：主色 `#426b9b`，奶油色底、襯線標題與拱形造型，色彩集中管理，方便調整。
- **響應式設計**：支援桌機、平板與手機版面。
- **履歷摺疊列表**：使用原生 `<details>`／`<summary>`，展開後會自動捲動，讓標題對齊畫面上方，並避開固定導覽列與麵包屑。
- **無障礙**：麵包屑加上 `aria-label`、鍵盤焦點外框，並尊重系統「減少動態效果」設定。

## 在本機執行

不需要安裝任何套件，任選一種方式：

1. 用 VS Code 安裝 **Live Server** 擴充功能，在 `index.html` 按右鍵選擇「Open with Live Server」。
2. 或在專案資料夾執行：

   ```bash
   python -m http.server 5500
   ```

   再用瀏覽器開啟 `http://127.0.0.1:5500`。

建議用本機伺服器開啟，不要直接雙擊 HTML 檔，這樣字型、圖片路徑與 Web Component 才會和線上環境一致。

## 修改內容

- **文字內容**：直接編輯對應的 HTML 檔。
- **配色與字型**：修改 `css/variables.css`。
- **導覽列選單**：修改 `js/components.js` 裡的 `navItems`。
- **圖片**：放進 `images/`，並確認 HTML 中的檔名一致。

## 作者

沈玉璇 Phoebe