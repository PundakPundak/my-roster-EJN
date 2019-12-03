//const Request = require('./Request')
const express = require( 'express' )
const app = express()
const path = require('path')
const port = 3000
routeToApiNBA="http://data.nba.net/10s/prod/v1/2018/players.json"
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))
app.get( routeToApiNBA, function(result){
    console.log(result)
})
app.get(`/teams/:teamName` , function(request, response){
    console.log(`Get request received`)
    const RawAPI = app.get( routeToApiNBA, function(result){
        console.log(result)
    })
    let teamName = request.params.teamName
    //response.send()
})

let socket = app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})
module.exports = { app, socket }