const models = require('../models');
const Validator = require('fastest-validator');

const schema = {
    UserID: {type: "number", optional:false},
    GameID: {type: "number", optional:false},
    Content: {type: "string", optional:false}
}

const v = new Validator();

function save(req, res){
    const comment = {
        UserID: req.body.UserID,
        GameID: req.body.GameID,
        Content: req.body.Content
    }

    const validationResponse = v.validate(comment, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Comment.create(comment).then(result => {
        res.status(201).json({
            message: "Comment created successfully!",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function indexByIDGame(req, res){
    const id = req.params.id;

    models.Comment.findAll({where: {GameID:id}}).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function indexByIDUser(req, res){
    const id = req.params.id;

    models.Comment.findAll({where: {UserID:id}}).then(result => {
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

    models.Comment.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Comment not found!"
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
    const comment = {
        UserID: req.body.UserID,
        GameID: req.body.GameID,
        Content: req.body.Content
    }

    const validationResponse = v.validate(comment, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Comment.update(comment, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "Comment updated successfully!",
            post: comment
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    })
}

function destroy(req, res){
    const id = req.params.id;

    models.Comment.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Comment deleted successfully!"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

module.exports = {
    save: save,
    indexByIDGame: indexByIDGame,
    indexByIDUser: indexByIDUser,
    show: show,
    update: update,
    destroy: destroy,
}