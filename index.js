// kademe-server

var showName = ''
var lastCmd = { 'action': 'phase', 'arg': 'intro', 'from': 'Bonnard' }
var book = []
var counter = 0

var path = require('path')
var express = require('express')
var app = express();
var http = require('http').createServer(app);
const fetch = require('node-fetch');
var io = require('socket.io')(http);

console.log('starting server')


app.use('/js', express.static(path.join(__dirname, 'www/js')))
app.use('/font', express.static(path.join(__dirname, 'www/font')))
app.use('/css', express.static(path.join(__dirname, 'www/css')))
app.use('/res', express.static(path.join(__dirname, 'www/res')))
app.use('/img', express.static(path.join(__dirname, 'www/img')))
app.use('/lib', express.static(path.join(__dirname, 'www/lib')))

app.get('/', function(req, res) {
    console.log('serving index')
    res.sendFile(__dirname + '/www/index.html');
});

app.get('/teststream/:streamid', function(req, res) {
    var streamid = req.params.streamid
        // console.log(streamid, streams, streams.includes(streamid) ? '1' : '0')
    res.send(streams.includes(streamid) ? '1' : '0');
});

// CHAT History
var history = []

io.on('connection', function(client) {
    console.log('a user connected');

    // Once client introduce himself
    client.on('iam', (name) => {

        // Setup client to correct phase
        client.emit('cmd', lastCmd)
        client.emit('show-name', showName)
        client.emit('allNames', book)
        client.emit('chat-all', history)

        // Notify others
        client['name'] = name
        book.push(name)
        counter += 1
        io.emit('newName', name)

        // console.log('cli introduced as', name)
        console.log('number of cli: ', counter)
            // console.log('cli list: ', book)
    })

    // Client exit: remove from book and inform others
    client.on('disconnect', function() {
        console.log('user disconnected');
        io.emit('goneName', client['name'])
        var index = book.indexOf(client['name']);
        if (index > -1) book.splice(index, 1);
        counter -= 1
        console.log('number of cli: ', counter)
    });

    // Relay cmd from Kontroler to all clients
    client.on('cmd', (data) => {
        console.log('relay cmd', data);
        if (data.action == 'phase') lastCmd = data // save activePhase
        io.emit('cmd', data)
    })

    client.on('show-name', (data) => {
        showName = data
        io.emit('show-name', data)
    })

    client.on('chat-msg', function(msg) {
        if (msg['msg'] == '#clear') {
            io.emit('chat-clear');
            history = []
        } else {
            io.emit('chat-msg', msg);
            history.push(msg)
        }
    });

});

// POLL STREAMS
streams = []
setInterval(() => {
    fetch('https://red5.kxkm.net/api/v1/applications/live/streams?accessToken=kxkmlive37*')
        .then(res => res.json())
        .then(json => {
            if ('data' in json)
                streams = json['data']
                // console.log(streams)
        }).catch(error => {
            // console.log(error)
            streams = []
        })

}, 1000)

http.listen(8080, function() {
    console.log('listening on *:8080');
});