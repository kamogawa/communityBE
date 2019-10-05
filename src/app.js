const express    = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const port = 3060;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rlaqjarn8228',
  database: 'community'
});

exports.connection = connection;

connection.connect((err) => {   　
  //DB接続テスト用。アクセス成功でメッセージ返す。
　if(err){ console.log('Error connecting to Db');        
　  console.error(err);
　}
　else{ console.log('Connection established');} 
});

// body-parserの設定
let posts = [];
// データベースからデータ取得
connection.query('SELECT * from user;', function (err, rows, fields) {
  if (err) throw err

  posts = rows;
});
connection.end();

/* GET home page. */
app.get('/user', function(req, res) {
  // viewにデータを渡す
  res.json({ title: 'Express' , posts: posts});
});

app.listen(port,function(){
  console.log('listen on port ' + port);
});
