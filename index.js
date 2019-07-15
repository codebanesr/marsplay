const connect = require('./starter/connect')
const express = require("express");
const app = express();


const db = connect();

/** users and post had dependency , they too could be called in the generic method itself*/
require('./table-mappings/generic')(db)



