# HA-Contract-service
:collision: Discription of development a HA Contract service 
<h1>Formulation of the task:</h1>
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
<h1>User Flow</h1>
<h1>Architecture and Tech Stack(previously)</h1>

![Work App drawio](https://github.com/sonytruelove/HA-Contract-service/assets/42536061/d9ec1721-0038-450a-871c-b87f6b7d09e8)


<h2>Front-end</h2>
Next.js, Typescript, Webpack
<h2>Back-end</h2> 
<ul>
<li>Nest.js</li>
<li>Tarantool DB - fast DB as a cache replacement for fast response</li>
<li>Cockroach DB - other heavy content(files,chats)</li>
<li>Nginx, Docker, Minicube/K3s/KuberSpray</li>
</ul>

<h1>Why no cache?</h1>
<ul>
<li>Few files to cache</li>
<li>Warm-up required</li>
</ul>
<h1>Why no target audience research?</h1>
It's no start-up, so i needn't.
<h1>TODO:</h1>
<ul>
<li>✅ Describe a requirements</li>
<li>✅ Describe a Architecture with Tech-stack</li>
<li>Describe User-flow</li>
<li>Do a MVP</li>
<li>...</li>
</ul>
<h1>Changes</h1>


