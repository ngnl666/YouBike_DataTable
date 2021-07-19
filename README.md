# YouBike_DataTable (臺北市公共自行車站點資訊系統)

```
使用 DataTable 串接臺北市政府開放資料平台 Youbike API，結合 Google Maps 地圖定位，打造出的 YouBike 站點即時查詢系統
```

## 使用方法

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/ngnl666/YouBike_DataTable.git
# Go into the repository
cd YouBike_DataTable
# Install dependencies
npm install
# Run the app
npm run start
```

## 功能及特色

### -資料表格

[![Youbike_DataTable](https://i.postimg.cc/DyznVKwz/tempsnip.png)](https://i.postimg.cc/DyznVKwz/tempsnip.png)

#### `站點資料設定為每分鐘更新一次`

1. 可調整資料顯示筆數
2. 可按升冪降冪排列 (整列的欄位都可以)
3. 輸入關鍵字可過濾資料
4. 點擊自動過濾資料 (依據點擊不同欄位可過濾不同條件 ex: 區域、站名、可借數量 ....等等)
5. 點擊切換分頁功能

### -Google Maps

[![Youbike_DataTable](https://i.postimg.cc/dVmbDH1f/img1.png)](https://i.postimg.cc/dVmbDH1f/img1.png)
▪️ 在上方表格中點擊任一站點資訊，Google Maps 會自動定位到該站點並顯示其站點資訊  
▪️ 直接點擊地圖中的圖標，也能自動定位到該站點

## 引用及聲明

臺北市政府資料開放平臺 (https://data.taipei/#/)

`此為個人作品，無任何商業用途`
