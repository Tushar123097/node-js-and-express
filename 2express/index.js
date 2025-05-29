const express = require('express');
const app = express();
//sending response to the browser
app.get('/', (req, res) =>{
    res.send('hhello express');
    
});
//starting the server
//once the server is started, it will listen on port 3000
app.listen(3000, () => {
  console.log('server is running on port 3000');
});