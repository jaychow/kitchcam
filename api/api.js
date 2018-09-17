import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import config from '../src/config';
import * as actions from './actions/index';
import {mapUrl} from 'utils/url.js';
import PrettyError from 'pretty-error';
import http from 'http';
import SocketIo from 'socket.io';
/* uncomment for Test data*/
var Chef = require('./actions/models/chefModel.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kitchcam');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
/*db.once('open', function() {
    console.log('connected to mongo');

    var ali = new Chef({ firstName: 'Ali', lastName: 'Fernandez', rank: 10 });
    var pat = new Chef({ firstName: 'Patrick', lastName: 'Impey', rank: 10 });
    var jon = new Chef({ firstName: 'Jon', lastName: 'Connor', rank: 1 });
    var mike = new Chef({ firstName: 'Mike', lastName: 'Woo', rank: 34 });
    var jay = new Chef({ firstName: 'Jay', lastName: 'Chow', rank: 10 });
    ali.save(function (err, ali) {
        if (err) return console.error(err);
        console.log('Saved Ali');
    });
    pat.save(function (err, ali) {
        if (err) return console.error(err);
        console.log('Saved Pat');
    });
    jon.save(function (err, ali) {
        if (err) return console.error(err);
        console.log('Saved Jon');
    });
    mike.save(function (err, ali) {
        if (err) return console.error(err);
        console.log('Saved Mike');
    });
    jay.save(function (err, ali) {
        if (err) return console.error(err);
        console.log('Saved Jay');
    });
    Chef.find(function (err, chefs) {
        if (err) return console.error(err);
        console.log(chefs);
    });
});

*/
const pretty = new PrettyError();
const app = express();

const server = new http.Server(app);

const io = new SocketIo(server);
io.path('/ws');

app.use(session({
    secret: 'KitchCam is the best',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));
app.use(bodyParser.json());


app.use((req, res) => {
    const splittedUrlPath = req.url.split('?')[0].split('/').slice(1);

    const {action, params} = mapUrl(actions, splittedUrlPath);

    if (action) {
        action(req, params)
            .then((result) => {
                if (result instanceof Function) {
                    result(res);
                } else {
                    res.json(result);
                }
            }, (reason) => {
                if (reason && reason.redirect) {
                    res.redirect(reason.redirect);
                } else {
                    console.error('API ERROR:', pretty.render(reason));
                    res.status(reason.status || 500).json(reason);
                }
            });
    } else {
        res.status(404).end('NOT FOUND');
    }
});


const bufferSize = 100;
const messageBuffer = new Array(bufferSize);
let messageIndex = 0;

if (config.apiPort) {
    const runnable = app.listen(config.apiPort, (err) => {
        if (err) {
            console.error(err);
        }
        console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
        console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
    });

    io.on('connection', (socket) => {
        socket.emit('news', {msg: `'Hello World!' from server`});

        socket.on('history', () => {
            for (let index = 0; index < bufferSize; index++) {
                const msgNo = (messageIndex + index) % bufferSize;
                const msg = messageBuffer[msgNo];
                if (msg) {
                    socket.emit('msg', msg);
                }
            }
        });

        socket.on('msg', (data) => {
            data.id = messageIndex;
            messageBuffer[messageIndex % bufferSize] = data;
            messageIndex++;
            io.emit('msg', data);
        });
    });
    io.listen(runnable);
} else {
    console.error('==>     ERROR: No PORT environment variable has been specified');
}
