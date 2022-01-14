# RS School REST service

Install docker

Copy this repository (if you need more detailed instructions, see below)

For running application type in command line in app directory

```
docker-compose up
```
For running tests in the container type in new conole

```docker exec -i -t <Container ID> sh
npm run test```

For closing a terminal in the container type exit.


## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application without Docker

```
npm run start
```

## Running application in Docker container

```
docker-compose up
```

After starting the app on port (4000 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:4000/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```


### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.
