
<h1 align="center">PLACE</h1>

  <div class="container" align="center">
  <img src="https://github.com/sonytruelove/HA-Contract-service/assets/42536061/c0fe90ba-e092-437f-a7d3-7117bb9c0805" height=400em alt="PLACE LOGO">
  </div>
<br>
<h1>:collision:PLACE — СЕРВИС ХРАНЕНИЯ, ОБМЕНА ФАЙЛОВ С ОТКРЫТЫМ ИСХОДНЫМ КОДОМ</h1></b>
<br>PLACE позволяет пользователям хранить файлы в облаке, синхронизировать файлы между устройствами и обмениваться файлами.<br>
 Вы можете настроить самостоятельно ИЛИ воспользоваться нашей помощью.<br>
Я <b>верю</b>, что Place станет лучшим легко масштабируемым хранилищем и сервисом медиа-передачи.<br>
А также проект для обучения навыкам софта, дизайна, программирования.<br>
<b>Не стесняйтесь отправлять pull request или создавать задачи!</b>

<br><br>
<h2>Как начать</h2>

Установите [git](https://git-scm.com/downloads)
<br>
[Клонируйте](https://docs.github.com/ru/repositories/creating-and-managing-repositories/cloning-a-repository) этот репозиторий<br>
Перейдите в back-end папку<br>
`cd server` <br>
Переименуйте "production.env" в ".env"(Также измените данные в конфигурации s3 и env, если вы хотите работать с Place.) <br>
`npx prisma generate` чтобы соединить базу данных и env файл с Prisma.
<h3>С помощью Docker Compose</h3>

Установите [Docker](https://docs.docker.com/engine/install) и [Docker Compose](https://docs.docker.com/compose/install) <br>

```docker
docker-compose build
docker-compose run 
```
<h3>Локально</h3>

Установите [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)<br>
Исполните в терминале:<br>

Установите nestjs/cli:<br>
`npm i -g @nestjs/cli`<br>
Скачайте все зависимости:<br>
`npm i`

Установите [CockroachDB](https://www.cockroachlabs.com/docs/v23.2/install-cockroachdb-linux)<br>
В новом терминале:<br>
`cockroach start-single-node --insecure`

Установите [minio](https://min.io/docs/minio/linux/operations/installation.html)<br>
В новом терминале:<br>

```cd server
minio start server
```
Наконец:<br>
`npm run start:dev`

<h2>Описание разработки Place</h2>
<h2>Формулировка задачи:</h2>
<p>Построение высоконагруженного легко маштабируемого сервиса для заключения медиаконтрактов между пользователями, хранения и передачи файлов. </p>
<p>Включая собственную валюту, подписку</p>
<h3><span>Требования:</span></h3>
Front-end:
<ul>
  <li>Быстро, Просто, Хорошо выглядит</li>
  <li>Решает реальные проблемы</li>
</ul>
Source:
  <ul>
  <li>Оптимизированный</li>
  <li>Соответствие паттернам и парадигмам объектно-ориентированного программирования.</li>
  <li>Покрытие тестами</li>
</ul>
Back-end:
  <ul>
  <li>Выдерживает около миллиона запросов за один раз</li>
  <li>Минимум сбоев</li>
  <li>Масштабируемая архитектура</li>
  <li>Один из серверов может выйти из строя - работа продолжится</li>
  <li>Все пользователи должны получить контракты</li>
</ul>
<h2>Путь пользователя</h2>
<img width="4236" alt="User flow" src="https://github.com/sonytruelove/Place/assets/42536061/97ef000c-3258-4142-b37a-98b68a7a46e9">
<h2>Архитектура и технический стек технологий (предварительно)</h2>

![Архитектура](https://github.com/sonytruelove/HA-Contract-service/assets/42536061/94e367de-20e1-4f92-88f1-d445de710e9f)


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

<h3>Почему нет кэша?</h3>
<ul>
<li>Мало файлов для кэширования</li>
<li>Требуется разогрев</li>
</ul>
<h3>Почему нет исследования целевой аудитории?</h3>
Это не стартап, так что это не нужно.
<h2>План:</h2>
<ul>
<li>✅ Описать требования</li>
<li>✅ Описать Архитектуру и стек технологий</li>
<li>✅ Представить серверную часть проекта</li>
<li>✅ Описатьe Code-of-Conduct</li>
<li>✅ Спроектировать пользовательский путь</li>
<li>Представить клиентскую часть проекта</li>
<li>Сделать MVP</li>
<li>...</li>
</ul>
<h2>Изменения</h2>
<h3>Отказ от TarantoolDB</h3>
Tarantool DB предназначался для быстрой обработки небольших данных, а Cockroach DB — для больших данных.<br>
Но гипотеза о том, что файлы могут храниться в Cockroach DB, была опровергнута.
Также Prisma ORM не работает с Tarantool DB.
<p>
Итак, Cockroach DB обрабатывает все данные, а Tarantool DB пока убираем из проекта.
</p>
<h3>Place свободен для всех контрибьютеров, которые хотят улучшить проект.</h3>
Я посчитал необходимым иметь опыт сопровождения проекта с открытым исходным кодом, а также увидеть новые пути развития этого проекта.

