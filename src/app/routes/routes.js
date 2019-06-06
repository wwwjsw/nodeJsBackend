module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send('ok, but nothing here :/');
    });
    
    app.get('/list', function(req, resp) {
        resp.send('list :)');
    });
}