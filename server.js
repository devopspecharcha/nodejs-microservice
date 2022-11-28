require('rootpath')();
const express = require('express');
var morgan = require('morgan');
var uuid = require('node-uuid');
const app = express();
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

morgan.token('id', function getId(req) {
    return req.id
});

function assignId(req, res, next) {
    req.id = uuid.v4()
    next()
}

app.use(assignId);
app.use(morgan(':id :method :url :response-time :remote-addr :user-agent'))

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/swagger', require('./docs/swagger-docs'));

// Ping and info endpoints
app.get('/.well-known/ping', (_req, res) => {
    res.status(200).send({})
})

app.get('/.well-known/info', (_req, res) => {
    res.status(200).send({

    })
})

app.get('/.well-known/db', async (_req, res) => {
})



// global error handler
app.use(errorHandler);

process.on('SIGINT', function () {
    // console.log("Caught interrupt signal");
    process.exit();
});

// start server

var HOST = process.env.HOST || "0.0.0.0"

const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, HOST, () => console.log(`Server listening on Host :: ${HOST}  and  port  ${port}`));