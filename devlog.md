<h1>First steps</h1>


<h2>Set up a nest js on Debian</h2>
Nest js doesn't support Windows 7, so I had to install nest js on Debian 12 VM 
<h2>Set up a local Cockroach DB cluster</h2>
It's was easy.. I like this.

![изображение](https://github.com/sonytruelove/HA-Contract-service/assets/42536061/623a1c46-ae63-4f9c-bf09-2c786f97ad4e)

<h2>PROBLEM #1</h2>
Prisma ORM doesn't support search in CockroachDB<br>
Feel free to give me a solution!<br>

<h2>PROBLEM #2&lt;SOLVED&gt;</h2>
S3 or CDN? I can't use cdn locally,so i choose open source Scality S3 <br>
<h2>PROBLEM #3&lt;SOLVED&gt;</h2>
CockroachDB was not available when I collected using Docker-compose<br><br>
The thing turned out to be that the networks of the nested Docker container and the Docker-compose container were different
<br>
Solution:
https://stackoverflow.com/questions/77844810/error-p1001-cant-reach-database-server-at-crdb26257


<h2>PROBLEM #4&lt;SOLVED&gt;</h2>
Prisma ORM does not support type unions from TypeScript<br>
So I added a field for each type and indicated that they could be null, like this:
```abovePlace Place? @relation("directory",fields: [placeId],references: [id],map: "place_fk")
  aboveUniquePlace UniquePlace? @relation("directory",fields: [placeId],references: [id],map: "unique_place_fk")```
 

<h2>MISTAKE #1</h2>
I recently found out that Node js does not support multithreading, under the hood it has multiprocessing<br>
This is not an optimal solution in a High-load context