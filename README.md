# Simple BMI Calculator
This repository for Site Reliability Engineer Technical Test - Pintu. This simple BMI calculator have a function to 
measure body fatness for people weight. It is used to screen for weight categories that may lead to health problems.

## Getting Started

We need to install NodeJS, npm, and Docker, Kubernetes. More detail check on these documentation 

```
https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
https://docs.docker.com/engine/install/
https://kubernetes.io/id/docs/setup/
```

## Running the tests

### Build Docker Image
We can build and push this image into image repository such as Docker Hub repository using this command

```
$ docker build -t <docker-hub-id>/<image-name>:tagname
$ docker push <docker-hub-id>/<image-name>:tagname
```

### Running this app locally (in case using Docker)
We can test this app running well using this command

```
$ docker run -d -p 8080:8080 <docker-hub-id>/<image-name>:tagname
$ docker ps
```

### Deploy app using Helm (in case using Kubernetes Cluster)
First thing we should adjust image and ingress path value in values.yaml then we can deploy this app into Kubernetes Cluster using this command

```
$ helm install <app-name> helm-bmi-app/
$ kubectl get pods
```

### Access Endpoint
To access this app locally, we can use this command 

```
$ curl localhost:8080/?weight=<value>&height=<value>
```

or type it into browser

```
http://localhost:8080/?weight=<value>&height=<value>
```

but if it's already deployed into Kubernetes Cluster, we can use this command

```
https://<domain>/?weight=<value>&height=<value>
```

## Built With

* [NodeJS] (v17.6.0) (https://nodejs.org) 
* [ExpressJS] (v4.17.1) (https://expressjs.com) 
* [Nodemon] (v2.0.5) (https://nodemon.io) 
* [Docker] (https://docs.docker.com/get-docker/)  
* [Kubernetes] (http://www.kubernetes.io)

## Authors

* **Hakim Rizki Pratama** - *Site Reliability Engineer* - [hakimrizki](https://github.com/hakimrizki)
