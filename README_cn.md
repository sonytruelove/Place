
<h1 align="center">PLACE</h1>

  <div class="container" align="center">
  <img src="https://github.com/sonytruelove/HA-Contract-service/assets/42536061/c0fe90ba-e092-437f-a7d3-7117bb9c0805" height=400em alt="PLACE LOGO">
  </div>
<br>
<h1>:collision:PLACE — 開源文件儲存和共享服務</h1></b>
<br>PLACE 允許使用者在雲端儲存檔案、在裝置之間同步檔案以及共用檔案。<br>
 您可以自行設定或使用我們的協助。<br>
我<b>相信</b> Place 將成為最容易擴展的儲存和媒體交付服務。<br>
以及一個教授軟體、設計和程式設計技能的專案。<br>
<b>隨時提交拉取請求或建立問題！</b>

<br><br>
<h2>如何開始</h2>

安裝 [git](https://git-scm.com/downloads)
<br>
[複製](https://docs.github.com/ru/repositories/creating-and-managing-repositories/cloning-a-repository) 這個儲存庫<br>
轉到後端資料夾<br>
`cd server` <br>
重新命名為 "production.env"  ".env"(如果您想使用 Place，也可以變更 s3 和 env 配置中的數據.) <br>
`npx prisma generate` 使用 Prisma 連接資料庫和 env 文件.
<h3>使用 Docker Compose</h3>

安裝 [Docker](https://docs.docker.com/engine/install) 和 [Docker Compose](https://docs.docker.com/compose/install) <br>

```docker
docker-compose build
docker-compose run 
```
<h3>本地</h3>

安裝 [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)<br>
在終端機中執行：<br>

安裝 nestjs/cli:<br>
`npm i -g @nestjs/cli`<br>
下載所有依賴項:<br>
`npm i`

安裝 [CockroachDB](https://www.cockroachlabs.com/docs/v23.2/install-cockroachdb-linux)<br>
在新終端機中：<br>
`cockroach start-single-node --insecure`

安裝 [minio](https://min.io/docs/minio/linux/operations/installation.html)<br>
在新終端機中：<br>

```cd server
minio server start
```
最後：<br>
`npm run start:dev`

<h2>發展描述 Place</h2>
<h2>問題表述:</h2>
<p>建構高負載、易於擴展的服務，用於在用戶之間簽訂媒體合約、儲存和傳輸文件。 </p>
<p>包括自己的貨幣、認購</p>
<h3><span>要求：</span></h3>
Front-end:
<ul>
  <li>快速、簡單、看起來不錯</li>
  <li>解決實際問題</li>
</ul>
Source:
  <ul>
  <li>最佳化</li>
  <li>遵守物件導向的程式模式和範例。</li>
  <li>測試</li>
</ul>
Back-end:
  <ul>
  <li>一次可承受約一百萬個請求</li>
  <li>最少的故障</li>
  <li>可擴展架構</li>
  <li>其中一台伺服器可能發生故障 - 工作將繼續</li>
  <li>所有使用者都必須收到合約</li>
</ul>
<h2>使用者路徑</h2>
<img width="4236" alt="使用者路徑" src="https://github.com/sonytruelove/Place/assets/42536061/97ef000c-3258-4142-b37a-98b68a7a46e9">
<h2>架構與技術技術棧（初步）</h2>

![建築學](https://github.com/sonytruelove/HA-Contract-service/assets/42536061/94e367de-20e1-4f92-88f1-d445de710e9f)


<h3>Front-end</h3>
Next.js, Typescript, Webpack
<h3>Back-end</h3> 
<ul>
<li>Nest.js</li>
<li>S3 Minio</li>
<li>Cockroach DB</li>
<li>JWT auth, SwaggerAPI, Typescript, Prisma, Class-validator</li>
<li>Nginx, Docker, Minicube/K3s/KuberSpray</li>
</ul>

<h3>為什麼沒有快取？</h3>
<ul>
<li>要快取的檔案很少</li>
<li>需要熱身</li>
</ul>
<h3>為什麼沒有目標受眾研究？</h3>
這不是一家新創公司，所以沒有必要。
<h2>計畫：</h2>
<ul>
<li>✅ 开始开发基础版本</li>
<li>✅ 描述要求</li>
<li>✅ 描述架構和技術堆疊</li>
<li>✅ 介紹專案的伺服器部分</li>
<li>✅ 描述行為準則</li>
<li>✅ 設計自訂路徑</li>
<li>✅ 开发 UI 套件</li>
<li>✅ 开发设计系统</li>
<li>✅ 介紹專案的客戶端部分</li>
<li>獲得 MVP</li>
<li>...</li>
</ul>
<ul>
<li>开始开发企业版</li>
<li>连接Prometheus+Graphana记录器</li>
<li>划分为微服务</li>
</ul>
<h2>變化</h2>
<h3>拒絕 TarantoolDB</h3>
Tarantool DB 專為快速處理小數據而設計，Cockroach DB 則專為大數據而設計。<br>
但文件可以儲存在 Cockroach DB 中的假設被駁斥了。
此外，Prisma ORM 不適用於 Tarantool DB。
<p>
因此，Cockroach DB 處理所有數據，Tarantool DB 暫時從專案中刪除。
</p>
<h3>所有想要改進專案的貢獻者都是免費的。</h3>
我認為有必要擁有維護開源專案的經驗，以及了解開發該專案的新方法。

