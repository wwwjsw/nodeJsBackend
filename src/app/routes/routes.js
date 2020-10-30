// const List = require('../views/lists/list/list.marko')
// const db = require('../../config/database')
// const ItemDao = require('../infra/item-dao')

module.exports = (app) => {
    app.get('/', (req, res) => {
        const name = process.env.NAME || 'World';
        res.send(`Hello ${name}!`);
      });
    
    app.get('/search/:query', function(req, resp) {
        console.warn(req.body)
        resp.send(JSON.stringify({item: req.params.query}))
        // const Item = new ItemDao(db)
        // Item.add(req.body)
        //         .then(resp.redirect('/item/list')) 
        //         .catch(erro => console.log(erro))
    })

    app.get('/googlecloud/:query', async function(req, resp) {
        const { analyzeEntitiesOfText } = require('../cloud')
        const result = await analyzeEntitiesOfText(req.params.query)
        resp.send(JSON.stringify(result, null, 2));
    })
          
    // })
    // app.get('/item/list', function(req, resp) {
    //     const Item = new ItemDao(db)

    //     Item.list()
    //         .then(items => resp.marko(
    //             List,
    //             {
    //                 items
    //             }
    //         ))
    //         .catch(err => console.log(err))
    // })

    // app.get('/item/form', function(req, resp) {
    //     resp.marko(require('../views/lists/form/form.marko'))
    // })
}