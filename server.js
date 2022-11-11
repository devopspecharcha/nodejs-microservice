require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('_middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));