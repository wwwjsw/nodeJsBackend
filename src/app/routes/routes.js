const list = require('../views/lists/list/list.marko');
const db = require('../../config/database');
const ItemDao = require('../infra/item-dao');

module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send('ok, but nothing here :/');
    });
    
    app.get('/list', function(req, resp) {
        const Item = new ItemDao(db);

        Item.list()
            .then(items => resp.marko(
                list,
                {
                    items
                }
            ))
            .catch(err => console.log(err));
    });
}