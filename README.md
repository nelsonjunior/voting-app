﻿# Voting App

[![Build Status](https://travis-ci.org/joemccann/VotingApp.svg?branch=master)](https://travis-ci.org/joemccann/VotingApp)

This project is intended to study stack development of web applications with different backend and frontend.

# Features!
You can also:
  - Use of queued process to record vote
  - Modern and responsive frontend
  - Use of microservices for the backend
  - ...

### TechFrontend

VotingApp uses a number of open source projects to work properly:

**Stack React**
* [ReactJS] - HTML enhanced for web apps!
* [Chartkick] - beautiful JavaScript charts
* [Material-UI] - React components with Material Design

![Node.js CI](https://github.com/nelsonjunior/voting-frontend-reactjs/workflows/Node.js%20CI/badge.svg?branch=master)

### Installation

VotingApp requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd voting-app
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

VotingApp is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md][PlDb] |
| GitHub | [plugins/github/README.md][PlGh] |
| Google Drive | [plugins/googledrive/README.md][PlGd] |
| OneDrive | [plugins/onedrive/README.md][PlOd] |
| Medium | [plugins/medium/README.md][PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md][PlGa] |


### Development

Want to contribute? Great!

VotingApp uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
VotingApp is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd VotingApp
docker build -t joemccann/VotingApp:${package.json.version} .
```
This will create the VotingApp image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of VotingApp.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/VotingApp:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/VotingApp/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/VotingApp>
   [git-repo-url]: <https://github.com/joemccann/VotingApp.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/VotingApp/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/VotingApp/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/VotingApp/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/VotingApp/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/VotingApp/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/VotingApp/blob/master/plugins/googleanalytics/README.md>
