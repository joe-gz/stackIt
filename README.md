# Social Tables Code Sample

*Includes usability on mobile*

## Installation
* You must have PostgreSQL installed and running on your machine
* Please create a database called `socialtables_challenge`
  * OR, change the path in `./server/db/connection.js` (line 2) to point to a DB name of your choosing
* `npm install`
* To work in development, you can open two terminal tabs and run:
  * `npm start`
  * `node server.js`
* This will run the front end and back end separately.
* To see how the app would run in production, please uncomment line 12 in server.js, and simply run node `server.js`

***Must be using node version 6+***

## App Information

* Built with *create-react-app*

* Backend built with *Node/Express*, with the *sequelizejs* library to work with PostgreSQL

* Includes *Redux* state management

* Using *axios* for API calls

* Includes *Material ui*
