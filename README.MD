# API-based ERP

The goal of this project is to apply repository pattern design to API with JWT Authentication

### PREREQUISITES

Install [NodeJS](https://nodejs.org/en/) and [Docker](https://docs.docker.com/install/#nightly-builds)


```
// Check version after install
node -v && npm -v && docker -v

```

### INSTALLING
####Database
Create a db directory to have persistent data on your host
```
cd data && mkdir db
```

Build MongoDB image ..
```
npm run mongod:build
```

... & Run it
```
npm run mongod:run
```

######If you have some troubles with running MongoDB container, try to stop all and retry
Stop all MongoDB containers
```
npm run mongod:stop
```


####Server
Install all dependencies
```
npm install
```
Run server for development...
```
npm run dev
```
...or build it with Webpack
```
npm start
```

*See all scripts in package.json*


## Notice

This project was made to improve my back-end development skills.
It's first a learning support.
So, feel free to fork, revise it or share some tricks. :)

Still in Progress...


## Built With

* [Typescript](https://www.typescriptlang.org/docs/home.html) - language for application scale JavaScript development
* [NPM](https://www.npmjs.com/) - Dependency Management
* [Express](http://expressjs.com/fr/starter/installing.html) - The web framework used
* [Mongoose](http://mongoosejs.com/docs/) - ODM for MongoDB
* [MongoDB](https://docs.mongodb.com/) - Data library


## Authors

* **Greg OLIVIER** - [GitHub](https://github.com/greg-olivier)
