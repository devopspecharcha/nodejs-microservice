const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const swaggerDocument = YAML.load(path.join(__dirname, "../swagger/server.yaml"))
// const swaggerDocument = require(swaggerFilePath);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



module.exports = router;