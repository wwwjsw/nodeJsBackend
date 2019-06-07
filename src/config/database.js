const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

// const USERS_SCHEMA = `
// CREATE TABLE IF NOT EXISTS users (
//     id INTEGER PRIMARY KEY AUTOINCREMENT, 
//     name_long VARCHAR(40) NOT NULL UNIQUE, 
//     mail VARCHAR(255) NOT NULL, 
//     password VARCHAR(255) NOT NULL
// )
// `;

// const USER_1 = 
// `
// INSERT INTO users (
//     name_long, 
//     mail,
//     password
// ) SELECT 'Gabriel Leite', 'gabriel@alura.com.br', '123' WHERE NOT EXISTS (SELECT * FROM users WHERE mail = 'gabriel@alura.com.br')
// `;

const ITEMS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL, 
    price REAL NOT NULL,
    desc TEXT DEFAULT ('') NOT NULL
)
`;

const ITEM_1 = 
`
INSERT INTO items (
    name,
    price,
    desc
) SELECT 'Node na prática', 30.0, 'Como desenvolver com Node.' WHERE NOT EXISTS (SELECT * FROM items WHERE name = 'Node na prática')
`;

const ITEM_2 = 
`
INSERT INTO items (
    name, 
    price,
    desc
) SELECT 'JavaScript na prática', 40.0, 'Como desenvolver com JavaScript.' WHERE NOT EXISTS (SELECT * FROM items WHERE name = 'JavaScript na prática')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    // bd.run(USERS_SCHEMA);
    // bd.run(USER_1);
    bd.run(ITEMS_SCHEMA);
    bd.run(ITEM_1);
    bd.run(ITEM_2);

    // bd.each("SELECT * FROM users", (err, user) => {
    //     console.log('User: ');
    //     console.log(user);
    // });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD down!');
        process.exit(0);
    })
);

module.exports = bd;