const list = require('../views/lists/list/list.marko');

module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send('ok, but nothing here :/');
    });
    
    app.get('/list', function(req, resp) {
        resp.marko(
            list,
            {
                items : [
                    {
                        id : 1,
                        name : 'item1',
                    },
                    {
                        id : 2,
                        name : 'item2',
                    }
                ]
            }
        );
    });
}