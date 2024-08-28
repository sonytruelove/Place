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

 <h2>PROBLEM #5&lt;SOLVED&gt;</h2>
Prisma ORM does not support symmetric relations<br>
So I need to duplicate a field,like this:
```model User {
  id         Int       @id @default(autoincrement())
  name       String?
  friends    User[]    @relation("UserFriends")

  // This second "side" of the UserFriends relation exists solely 
  // to satisfy prisma's requirements; we won't access it directly.
  symmetricFriends  User[] @relation("UserFriends")
}```

<h2>PROBLEM #6&lt;SOLVED&gt;</h2>
When I bring up Docker compose, the Cockroach DB and Minio services does not start with the error:<br>
`Fatal glibc error: CPU does not support x86-64-v2`
<br>
 Apparently the latest version requires the processor to support x86-64-v2. But minio has the latest cpuv1 image (so cool!), and what about CockroachDB: just installed the old version.
<h2>PROBLEM #7&lt;SOLVED&gt;</h2>
I was sitting for several days with the error `Invalid Endpoint: "nginx-minio"` after I installed nginx between the minio cluster and the application.<br>
I tried to specify different endpoints and still got an error.<br>
I tried changing docker-compose and Nginx config.<br>
I even went so far as to post a long question on StackOverflow (although I later deleted it). <br>
After debugging the endpoint checking function, I realized a simple truth....<br>

It turns out that you don’t need to specify `"` for lines in the env file. This has been the problem all this time. So stupid...

<h2>MISTAKE #1</h2>
I recently found out that Node js does not support multithreading, under the hood it has multiprocessing<br>
This is not an optimal solution in a High-load context