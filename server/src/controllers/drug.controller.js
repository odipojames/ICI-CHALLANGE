'use strict';

const Drug = require('../models/drug.model');

exports.findAll = function(req, res) {
  Drug.findAll(function(err, drug) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', drug);
    res.send(drug);
  });
};


exports.create = function(req, res) {
    const new_drug = new Drug(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Drug.create(new_drug, function(err, drug) {
            if (err)
            res.send(err);
            res.json({error:false,message:"drug added successfully!",data:drug});
        });
    }
};


exports.findById = function(req, res) {
    Drug.findById(req.params.id, function(err, drug) {
        if (err)
        res.send(err);
        res.json(drug);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Drug.update(req.params.id, new Drug(req.body), function(err, drug) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Drug successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Drug.delete( req.params.id, function(err, drug) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'drug successfully deleted' });
  });
};