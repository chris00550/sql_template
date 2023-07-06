const sqlite3 = require("sqlite3").verbose();
const { rename } = require("node:fs");
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

let sql1 = `

CREATE TABLE IF NOT EXISTS Users(
    ID TEXT PRIMARY KEY,
    Username TEXT,
    Email TEXT,
    DOB TEXT
);
`
let sql2 = `SELECT name FROM pragma_table_info("Users")

`
let c=`ALTER TABLE  Users
RENAME COLUMN email to Emali;`

let d=`INSERT INTO Users(ID, Username, Emali, DOB)
VALUES("13581","BOB","BOB@csis.com","2005-10-28");`

let e = `SELECT * FROM Users
WHERE Username = "BOBs";
`
let f = `UPDATE UserS 
SET Username = "BOBs" 
WHERE ID="13581";`

let g = `DELETE FROM Users
WHERE Username="BOBs";`
//db.all(c, CallbackFunc);

//db.all(sql2, CallbackFunc);

//db.all(d, CallbackFunc);

//db.all(sql2, CallbackFunc);

//db.all(e, CallbackFunc);

//db.exec(f, CallbackFunc);

db.all(g, CallbackFunc);