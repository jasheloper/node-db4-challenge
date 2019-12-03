const express = require('express');

const server = express();

server.use(express.json());

server.get("/api/recipes", (req, res) => {
   res.send(` 
   
   <h1>Hello.</h1>
   <p>Recipe Book API - By Jashele Tillman</p>
   
   `);
});


module.exports = server; 