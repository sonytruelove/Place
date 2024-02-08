
# PLACE

  <div class="container" align="center">
  <img src="https://github.com/sonytruelove/HA-Contract-service/assets/42536061/c0fe90ba-e092-437f-a7d3-7117bb9c0805" height=400em alt="PLACE LOGO">
  </div>
<br>
<h1>:collision:PLACE IS OPEN SOURCE FILE SHARING STORAGE</h1></b>
<br>PLACE allows users to store files in the cloud, synchronize files across devices, and share files.<br>
 You can set up by yourself OR get our help<br>
I <b>believe</b> that Place will become the best easily scalable storage and media trading facility.<br>
As well as a project for training soft, design, programming skills.<br>
<b>Feel free to send a pull request or create a issue!</b>

<br><br>
<h2>Getting started</h2>

Setup [git](https://git-scm.com/downloads)
<br>
[Clone](https://docs.github.com/ru/repositories/creating-and-managing-repositories/cloning-a-repository) repository<br>
Go to back-end directory:<br>
`cd server`
<h3>Using Docker Compose</h3>

Setup [Docker](https://docs.docker.com/engine/install) and [Docker Compose](https://docs.docker.com/compose/install) <br>

```docker
docker-compose build
docker-compose run 
```
<h3>Locally</h3>

Setup [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)<br>
Execute in terminal:<br>

Setup nestjs/cli:<br>
`npm i -g @nestjs/cli`<br>
Install all dependencies:<br>
`npm i`

Setup [CockroachDB](https://www.cockroachlabs.com/docs/v23.2/install-cockroachdb-linux)<br>
Open a new terminal:<br>
`cockroach start-single-node --insecure`

Setup [minio](https://min.io/docs/minio/linux/operations/installation.html)<br>
Open a new terminal:<br>

```cd server
minio start server
```
And finally:<br>
`npm run start:dev`

<h2>Discription of development a HA Contract service </h2>
<h2>Formulation of the task:</h2>
<p>Build of a high-load failover service for concluding media contracts between users. </p>
<p>Include a own currency, subscription</p>
<h3><span>Requirements:</span></h3>
Front-end:
<ul>
  <li>Fast, Simple, Presentable</li>
  <li>Solves real problems</li>
  <li>Presentable</li>
</ul>
Source:
  <ul>
  <li>Optimized</li>
  <li>Compliance with object-oriented programming concepts and paradigms</li>
  <li>Testing</li>
</ul>
Back-end:
  <ul>
  <li>Stand like a million requests in one time</li>
  <li>Minimize failures</li>
  <li>Scalable architecture</li>
  <li>Server may crash</li>
  <li>All users must receive contracts</li>
</ul>
<h2>User Flow</h2>
<h2>Architecture and Tech Stack(previously)</h2>

![Architecture](https://github.com/sonytruelove/HA-Contract-service/assets/42536061/94e367de-20e1-4f92-88f1-d445de710e9f)


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

<h3>Why no cache?</h3>
<ul>
<li>Few files to cache</li>
<li>Warm-up required</li>
</ul>
<h3>Why no target audience research?</h3>
It's no start-up, so i needn't.
<h2>TODO:</h2>
<ul>
<li>✅ Describe a requirements</li>
<li>✅ Describe a Architecture with Tech-stack</li>
<li>✅ Introduce a server part of project</li>
<li>✅ Describe a Code-of-Conduct</li>
<li>Describe User-flow</li>
<li>Introduce a front-end part of project</li>
<li>Do a MVP</li>
<li>...</li>
</ul>
<h2>Changes</h2>
<h3>Remove TarantoolDB</h3>
Tarantool DB was intended for fast processing of small data and Cockroach DB for Big Data.<br>
But the hypothesis that files can be stored in Cockroach DB was refuted.
Also Prisma ORM doesn't work with Tarantool DB.
<p>
So, Cockroach DB processing all data and Tarantool DB remove from project for now.
</p>
<h3>Place is free for other contributors to make project better</h3>
I considered it necessary to have experience in maintain an open source project, as well as to see new ways to develop this project.

