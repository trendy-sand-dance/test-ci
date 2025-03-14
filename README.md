# service template 

This repo contains the basic layout of our services, it runs a node server.

## dev pre-requisites
- Docker


## setup
1. Set the name in `package.json` to the name of the service.

## running in dev mode
building the container
```
docker build -t <NAME> src 
```

running the container
```
docker run <NAME>

```



### TODO 
- [ ] [update](https://stackoverflow.com/a/56577320) downstream repos with template changes in CI?
