class ItemDao {
    constructor(db) {
        this._db = db
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(`SELECT * FROM items`,
                (err, result) => {
                    if(err) return reject(`could't get any item`)

                    return resolve(result)
                }
            )
        })
    }

    add(item) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO items (
                    name,
                    price,
                    desc
                ) values (?, ?, ?)`,
                [
                    item.name,
                    item.price,
                    item.desc
                ],
                function (err) {
                    if (err) {
                        console.log(err)
                        return reject('reject item')
                    }
    
                    resolve()
                }
            )
        })
    } 
}

module.exports = ItemDao