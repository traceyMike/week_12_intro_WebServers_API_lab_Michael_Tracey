const express = require('express') // import express module
const path = require('path') // import path module
const app = express() // create instance for express app - use instance to define routes and settings
const indexRouter = require('./routes/index') // import router from ./routes/index.js - allows defining of routes for handling HHTP requests used in main app

app.use(express.urlencoded({ extended: true })) // used to parse incoming
//..requests with URL-encoded data
// extended: true allows for parsing of more complex objects from data

app.use(express.static(path.join(__dirname, 'public'))) // serves as static files
// from the public directory - files in public accessed via URL

app.set('view engine', 'hbs') // sets Handlebars as the view engine for rendering views in app
app.set('views', path.join(__dirname, 'views')) // specify the directory where Express will look for view templates - views folder in same directory as server.js

app.use('/', indexRouter) // set up route handler for root path (/) 
// when user goes n page, express will pass request to indexRouter which is defined by routes/index.js

const PORT = 3000 // define port number on which app runs 
app.listen(PORT, () => { // starts server and listens for incoming requests on specified port, once server in running, callback function will log message to console confirms servers is up and running
    console.log(`Server is running on http://localhost:${PORT}`)
})