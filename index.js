const express = require('express');
const routes = require('./routes');
const engines = require("consolidate");
require('dotenv').config({path: 'variables.env'});
const cors = require('cors');

const app = express();

app.engine("ejs", engines.ejs);
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(cors());

app.use('/', routes());
app.use(express.static('public'));

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000;

app.listen(port,host, () =>{
    console.log(`servidor puerto ${port} host ${host}`);
})