const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/friendapi', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3001);