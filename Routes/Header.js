const express= require('express');
const app = express();
const data = require("../Controllers/Header");

const dataRouter = express.Router()
dataRouter.route('/header')
.get(data.headerData)

module.exports=dataRouter;