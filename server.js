const app = require('./src/config/app-express');

// server.js

const port = 3000;

app.listen(port, function(){
    console.log(`server running`);
})

app.get('/', function(req, resp) {
    resp.send('ok, but nothing here :/');
});

app.get('/list', function(req, resp) {
    resp.send('list :)');
});