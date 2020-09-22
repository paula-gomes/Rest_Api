# Rest_Api
Implementation of a Rest API that uses HTTP verbs in order to realize CRUD operations on the database created (SQlite)

# Getting Started

```shell
$ git clone https://github.com/paula-gomes/Rest_Api
 
 npm i express --save
 npm i nodemon --save-dev
 npm i sqlite3@latest
 npm start
```
By doing that you will clone the repository and install its dependencies


# Features

* server.js: realizes all Crud operations by apllying HTTP verbs on the application (GET,PUT,UPDATE,DELETE)

# Get it tested

--- ROUTES ---

* GET: To just acces the API  -> http://localhost:3000/tarefas

* POST: As the name says, posts an information through the body of the request -> http://localhost:3000/tarefas

* PUT: Updates the information contained in the body of the request, its necessary to inform the id of the data that
  intends to be changed -> http://localhost:3000/tarefas/id

* DELETE: Deletes the information contained in the body of the request, its necessary to inform the id of the data that
  intends to be deleted -> http://localhost:3000/tarefas/id

# Project Status

In progress and accepting contributions.

