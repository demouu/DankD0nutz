var express = require('express');
var path = require('path');
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
let tableList = [];
class Table {
    constructor(name, number, email, id){
        this.name = name,
        this.number = number,
        this.email = email,
        this.id = id
    }
}
let tab1 = new Table('God', '666-6969', 'dogbackwards@heaven.com', "52");
let tab2 = new Table('Stan', '123-4567', 'stanLover@shady.com', "101");
let tab3 = new Table('Bobbert', '111-1111', 'BobbertBobbity@aver.com', "1");
let tab4 = new Table('Dope!', '420-4202', 'Dank@doobie.com', "420");
let tab5 = new Table('Druck Carl', '999-6611', 'brewsky@beer.com', "17");
tableList.push(tab1);
tableList.push(tab2);
tableList.push(tab3);
tableList.push(tab4);
tableList.push(tab5);
console.log(tableList);
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/reservations', function(req, res){
    res.sendFile(path.join(__dirname, 'reserve.html'));
});
app.get('/tables', function(req, res){
    res.sendFile(path.join(__dirname, 'tables.html'));
});
app.post('/postTable', function(req, res){
    var newTable = new Table(req.body.name, req.body.number, req.body.email, req.body.id);
    tableList.push(newTable);
    console.log()
})
app.listen(PORT, function() {
    console.log('App Listening on: http://localhost:'+PORT);
})