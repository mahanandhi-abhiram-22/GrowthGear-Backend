const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');  // In-memory database

db.serialize(() => {
    // Create tables
    db.run("CREATE TABLE sales_data (id INTEGER PRIMARY KEY, amount INTEGER)");
    db.run("CREATE TABLE customers (id INTEGER PRIMARY KEY, name TEXT)");

    // Insert data into sales_data
    db.run("INSERT INTO sales_data (amount) VALUES (10000), (20000), (20000), (5000), (30000)");

    // Insert data into customers
    db.run("INSERT INTO customers (name) VALUES ('John Doe'), ('Jane Smith'), ('Alice Johnson'), ('Bob Brown')");
});

module.exports = db;
