console.log('STICKER PEOPLE SERVER STARTING');


// DB Connection information
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "stickerpeople"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Welcome back, Commander");
  con.query("SELECT userPass FROM users WHERE username = 'allanCodes'", function (err, result, rows, fields) {
    if (err) throw err;
    console.log(result[0].userPass);
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i]);
    }
  });
});
