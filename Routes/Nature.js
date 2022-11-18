const express = require('express');
const app = express();
const data = require('../Controllers/Nature');

const dataRouter = express.Router();
dataRouter.route('/nature').get(data.natureData);

module.exports = dataRouter;