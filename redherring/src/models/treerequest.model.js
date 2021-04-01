'use strict';
var dbConn = require('./../../config/db.config');
//Employee object create
var TreeRequest = function(treerequest){
    this.tipo_propiedad     = treerequest.tipo_propiedad;
    this.nombre_solicitante = treerequest.nombre_solicitante;
    this.aPaterno           = treerequest.aPaterno;
    this.aMaterno           = treerequest.aMaterno;
    this.arbolAlias         = treerequest.arbolAlias;
    this.detalles_Solicitud = treerequest.detalles_Solicitud;
    this.calle              = treerequest.calle;
    this.Mz                 = treerequest.Mz;
    this.lote               = treerequest.lote;
    this.noExterior         = treerequest.noExterior;
    this.noInterior         = treerequest.noInterior;
    this.CP                 = treerequest.CP;
    this.Colonia            = treerequest.Colonia;
    this.Delegacion         = treerequest.Delegacion;
};
TreeRequest.create = function (newTreeReq, result) {
    dbConn.query("INSERT INTO solicitud set ?", newTreeReq, function (err, res) {
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
TreeRequest.findById = function (id, result) {
    dbConn.query("Select * from solicitud where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
TreeRequest.findAll = function (result) {
    dbConn.query("Select * from solicitud", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('treeRequests : ', res);
            result(null, res);
        }
    });
};
module.exports= TreeRequest;