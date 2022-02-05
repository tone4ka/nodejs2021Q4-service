# RS School REST service

1. Install docker

2. Copy this repository 

```
git clone {repository URL}
```

3. Switch to the nestjs branch

4. Type in command line in app directory

```
npm i
```

5. After installing for running application and auto runing migration type in the command line:

```
docker-compose up
```

### WARNING: 

```
Launching the application can take up to 10 minutes! 

Please wait for the message "App is running on http://localhost:4000" in the console!
```

6. For running aythentification tests type in a new console

```
npm run test:auth
```

7. Also you can do the linter check

```
npm run lint
```

## Artillery tests results

### Fastify/Express comparison:

### You can also view test reports in files report_fastify.html and report_express.html

check parameter: ................................................................ Fastify/Express

http.codes.200: ................................................................ 596/720

http.codes.201: ................................................................ 309/360

http.request_rate: ............................................................. 18/sec / 15/sec

http.requests: ................................................................. 935/1080

http.response_time:

  min: ......................................................................... 26/9

  max: ......................................................................... 6731/6698

  median: ...................................................................... 2018.7/2369

  p95: ......................................................................... 4965.3/5272.4

  p99: ......................................................................... 5487.5/6312.2

http.responses: ................................................................ 905/1080

vusers.completed: .............................................................. 150/180

vusers.created: ................................................................ 180/180

vusers.created_by_name.0: ...................................................... 180/180

vusers.session_length:

  min: ......................................................................... 2483.8/2179.8

  max: ......................................................................... 22016.6/24537.1

  median: ...................................................................... 13497.6/16159.7

  p95: ......................................................................... 21381.5/23630.3

  p99: ......................................................................... 21813.5/24107.7

