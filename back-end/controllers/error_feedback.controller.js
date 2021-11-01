const models = require('../models');
const Validator = require('fastest-validator');

const schema = {
    UserID: {type: "number", optional:true},
    GameID: {type: "number", optional:true},
    ErrorType: {type:"string", optional:true},
    ErrorInfo: {type:"string", optional:true},
    AdminID: {type: "number", optional:true},
    ProcessStatus: {type:"string", optional:true}
}

const v = new Validator();

function save(req, res){
    const error_feedback = {
        UserID: req.body.UserID,
        GameID: req.body.GameID,
        ErrorType: req.body.ErrorType,
        ErrorInfo: req.body.ErrorInfo,
        AdminID: req.body.AdminID,
        ProcessStatus: req.body.ProcessStatus
    }

    const validationResponse = v.validate(error_feedback, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Error_feedback.create(error_feedback).then(result => {
        res.status(201).json({
            message: "Error feedback created successfully!",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function index(req, res){
    models.Error_feedback.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function indexByGameID(req, res){
    const id = req.params.id;

    models.Error_feedback.findAll({where: {GameID:id}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function indexByUserID(req, res){
    const id = req.params.id;

    models.Error_feedback.findAll({where: {UserID:id}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function show(req, res){
    const id = req.params.id;

    models.Error_feedback.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Error feedback not found!"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function update(req, res){
    const id = req.params.id;
    const error_feedback = {
        UserID: req.body.UserID,
        GameID: req.body.GameID,
        ErrorType: req.body.ErrorType,
        ErrorInfo: req.body.ErrorInfo,
        AdminID: req.body.AdminID,
        ProcessStatus: req.body.ProcessStatus
    }

    const validationResponse = v.validate(error_feedback, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Error_feedback.update(error_feedback, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "Error feedback updated successfully!",
            post: error_feedback
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    })
}

function destroy(req, res){
    const id = req.params.id;

    models.Error_feedback.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Error feedback deleted successfully!"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    save:save,   
    index: index,
    indexByGameID: indexByGameID,
    indexByUserID: indexByUserID,
    show: show,
    update: update,
    destroy: destroy
}