const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello from backend');
});

app.listen(port, (req, res) => {  
    console.log(`Server is listening on port ${port}`);
});

