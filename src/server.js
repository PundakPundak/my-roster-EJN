const request = require('request')
const http = require('http')
const express = require( 'express' )
const app = express()
const remoteApp = request
const path = require('path')
const port = 3000
const routeToAPI = `http://data.nba.net/10s/prod/v1/2018/players.json`
const successStringRemote = `Get request to remote server http://data.nba.net sent`
const successStringLocal =`Get request to local host on port ${port} received`
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
//Dist and node_modules
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'node_modules')))
//
app.get(`/teams/:teamName`, function(request, response){
    console.log(successStringLocal)
    const teamNameFromReqParam = request.params.teamName
    http.get(routeToAPI, (res)=> { //http Request
        console.log(successStringRemote)

        let dataFromRemoteServer = ``
        res.on('data', (chunk) => {
            dataFromRemoteServer += chunk
        })
        res.on('end', () => {
            const parsedAPIinJSON = JSON.parse(dataFromRemoteServer)
            const allPlayersArray = parsedAPIinJSON.league.standard
            const teamIdFromReqParam =  teamToIDs[teamNameFromReqParam]
            console.log(teamIdFromReqParam)
            //const playersFilteredArray = allPlayes.filter()
            //Optional - Delete later
            //response.send()
            //
        })
    })   
})
let socket = app.listen(port, function() {
    console.log(`Running server on port ${port}`)
})
module.exports = { app, socket }

