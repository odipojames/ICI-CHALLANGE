'user strict';
var dbConn = require('./../../config/db.config');

//Drug object create
var Drug = function(drug){
    this.name = drug.name;
    this.quantity = drug.quantity;
    this.units = drug.units;
    
    
};
Drug.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO drugs set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Drug.findById = function (id, result) {
    dbConn.query("Select * from drugs where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Drug.findAll = function (result) {
    dbConn.query("Select * from drugs", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('drugs : ', res);  
            result(null, res);
        }
    });   
};
Drug.update = function(id, drug, result){
  dbConn.query("UPDATE drugs SET name=?,quantity=?,units=? WHERE id = ?", [drug.name,drug.quantity,drug.units, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Drug.delete = function(id, result){
     dbConn.query("DELETE FROM drugs WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Drug;