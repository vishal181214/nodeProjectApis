const express = require('express');
const app = express();
const data = require('../Controllers/Fitness');

const dataRouter = express.Router();
dataRouter.route('/fitness').get(data.fitnessData);

module.exports = dataRouter;