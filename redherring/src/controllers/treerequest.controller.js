'use strict';
const TreeRequest = require('../models/treerequest.model');
exports.findAll = function(req, res) {
    TreeRequest.findAll(function(err, treerequest) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', treerequest);
        res.send(treerequest);
    });
};
exports.create = function(req, res) {
    const new_treeReq = new TreeRequest(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        TreeRequest.create(new_treeReq, function(err, treerequest) {
            if (err)
                res.send(err);
            res.json({error:false,message:"TreeRequest added successfully!",data:treerequest});
        });
    }
};
exports.findById = function(req, res) {
    TreeRequest.findById(req.params.id, function(err, treerequest) {
        if (err)
            res.send(err);
        res.json(treerequest);
    });
};