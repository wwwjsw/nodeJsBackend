const list = require('../views/lists/list/list.marko');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send('ok, but nothing here :/');
    });
    
    app.get('/list', function(req, resp) {
        db.all('SELECT * FROM items', function(err, result) {
            resp.marko(list, {items : result});
        });
    });
}