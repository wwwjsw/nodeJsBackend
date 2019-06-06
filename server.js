const app = require('./src/config/app-express');

// server.js

const port = 3000;

app.listen(port, function(){
    console.log(`server running`);
})