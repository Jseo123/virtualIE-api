# virtualIE-api
Modules to install:
express mysql bcryptjs cors dotenv jsonwebtoken morgan helmet

Modules to install as development modules:
@babel/core @babel/cli @babel/node @babel/preset-env nodemon -D

Module explenation:

Express: Framework that allows us to create the server to handle requests.

bcryptjs: encrypts data like passwords for better safety.

Cors: Handles comunication with other servers for us.

Dotenv : Allows us to create enviroment variables.

Jsonwebtoken: for authentication on the app and to protect certain urls to protect from malicius authors from calling our api.

Mysql: allows for connection to sql.

Morgan: Allows us to see the request on the console which are coming to our server.

Helmet: adds safety rules so that the server doesn't give away too much information to callers.

@babel/core:  Core babel module (To be able to write code in ECMA6).

@babel/cli: Allows us to use Babel from the console or a command line interface.

@babel/node: Allows us to use babel with node.

@babel/preset-env: Allows us to use the lastest from babel.

nodemon: allows to restart server everytime you save a change.

-D: Makes sure you install everything as a development module.


                Folders

Controllers: Creates the functiones we are gonna use to feed the routes.

Libs: It used to store code we are gonna reuse.

Middelwares: Here we store the middlewares which are functions to be executed every time a user visits a route.

Routes: Here is where we code the endpoints of the api.

                Src files.

app.js: This is were we set up the app.

config.js: here is where we add the config properties for the server.

database.js: to get the collection from the database.

index.js where the server actually is.

                Enviroment variables:

SQL_HOST
SQL_USER
SQL_PASSWORD
SQL_DATABASE

This variables are your local database information. You are gonna need them in order to do the conenction to the SQL database locally. If the information you have filled here is correct, you should be able to make the dummy route work.

                App flow:

The application entry port is the index.js file. This file handles the port where the server is listening. 

On the app file you are gonna have the routes the server is listening to. Those routes are imported from their respective files on the routes folder. 

On the routes folder you will have a file for every category of routes. User, games, news, etc. Here we are gonna define the rotue names and call both the middlewares and the functions from the controller to feed data to the server.

On the controller function we are gonna write the functions that execute the SQL querys (Mongo queries will be added on the future to deal with the chat information). Here we are gonna need to import the connection to the database in order to perform the queries.

Databse.js handles the connection to the database and exports it to feed the controllers. You don't need to touch this file.



The back-end for virtualIE
