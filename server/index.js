require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const URI = process.env.MONGODB_URI
const port = 4000

mongoose.connect(URI)
const database = mongoose.connection;

database.on('err', (err)=> {
  console.log(err);
});

database.once('connected', ()=> {
  console.log('Database connected to the server'); 
});

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/home.html');
  // rendering home page
  res.sendFile(filePath);
}); 

app.post('/', (req, res) => {

})   

app.get('/blog', (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/blog.html');
  res.sendFile(filePath);    
}); 

app.get('/open-source', (req, res) => {
  const filePath = path.join(__dirname, '../client/pages/open-source.html');
  res.sendFile(filePath);
}) 
 
app.listen(port, (req, res) => {  
    console.log(`Server is listening on port ${port}`);
});


// hashnode api => d159f53d-4dec-4993-b167-b8b80f8db555