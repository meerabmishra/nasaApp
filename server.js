const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');

const app = express();
app.use(cors());

app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });