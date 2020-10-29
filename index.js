const app = require('./src/config/app-express');

const port = 3000;

app.listen(port, function(){
    console.log(`server running`);
})