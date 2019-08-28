const list = require('../views/lists/list/list.marko')
const db = require('../../config/database')
const ItemDao = require('../infra/item-dao')

module.exports = (app) => {
    app.get('/', function(req, resp) {
        resp.send('ok, but nothing here :/')
    })
    
    app.post('/item', function(req, resp) {
        console.log(req.body)
        const Item = new ItemDao(db)
        Item.add(req.body)
                .then(resp.redirect('/item/form'))   
                .catch(erro => console.log(erro))
    })

    app.get('/item/list', function(req, resp) {
        const Item = new ItemDao(db)

        Item.list()
            .then(items => resp.marko(
                list,
                {
                    items
                }
            ))
            .catch(err => console.log(err))
    })

    app.get('/item/form', function(req, resp) {
        resp.marko(require('../views/lists/form/form.marko'))
    })
}