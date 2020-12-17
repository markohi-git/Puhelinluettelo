var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE puhelinluettelo(etunimi VARCHAR(30), sukunimi VARCHAR(30), puhelinnumero varchar(30))`,

            (err) => {
                if (err) {
                    // Table already created
                } else {
                    // Table just created, creating some rows
                    console.log('Lisätään yksi henkilö testaamista vareten')
                   var insert = 'INSERT INTO puhelinluettelo (etunimi,sukunimi,puhelinnumero) VALUES (?,?,?)'
                   db.run(insert, ["Matti", "Meikäläinen", "05023456789"])
                }
            });
    }
});
module.exports = db