const express = require( 'express' )
const app = express()
const path = require('path')
const port = 3000
routeToApiNBA=`http://data.nba.net/10s/prod/v1/2018/players.json`
// Exercise 1 serve dist and node_modules here
app.get(`/`, function(result){
    console.log(`Get request to local host on port ${port} received`)
    $.get(routeToApiNBA, function (result) {
        console.log(`Get request from local host to http://data.nba.net sent`)
        console.log(result)
    })
})
let socket = app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})
module.exports = { app, socket }

