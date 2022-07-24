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




The back-end for virtualIE
