const express = require('express');
const app = express();
const data = require('../Controllers/Hollywood');

const dataRouter = express.Router();
dataRouter.route('/hollywood').get(data.hollywoodData);

module.exports = dataRouter;