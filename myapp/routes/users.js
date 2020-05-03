var express = require('express');
var router = express.Router();
var mysqlconnection = require('../connections');


/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/
router.get('/', (req, res) => {
	mysqlconnection.query('SELECT * from users', (err, rows, fields) =>{
    if (!err)
      {
        //res.send(JSON.stringify({"status": 200, "error": null, "response": rows}));
        res.send(rows);
      }
    else
      {
        console.log(err);
      }
	});
});
module.exports = router;
