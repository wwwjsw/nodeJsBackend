class ItemDao {
    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM items',
                (err, result) => {
                    if(err) return reject(`could't get any item`);

                    return resolve(result);
                }
            )
        });
    }
}

module.exports = ItemDao;