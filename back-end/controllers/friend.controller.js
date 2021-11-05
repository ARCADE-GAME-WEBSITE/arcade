const models = require('../models')
const Validator = require('fastest-validator')

const schema = {
    UserID: {type:"number", optional: true},
    FriendEmail: {type:"string", optional: true}
}

const v = new Validator();

// This function create a new Game post and save it to database
function save(req, res){
    const friend = {
        UserID: req.userData.id, 
        FriendEmail: req.body.FriendEmail,
    }

    const validationResponse = v.validate(game, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.User.findOne({where: {Email: req.body.FriendEmail}}).then(result => {
        if (result) {
            models.Friend.findOne({where: {UserID: req.userData.id, FriendID: result.id}}).then(result1 => {
                if (result1){
                    res.status(401).json({
                        message: "Already friend!"
                    });
                }
                else {
                    const newFriend = {
                        UserID: req.userData.id, 
                        FriendID: result.id,
                    }
                    models.Friend.create(friend)
                }
            })
        }
        else {
            res.status(401).json({
                message: "Email does not exist!"
            });
        }
    })

    models.Friend.create(friend).then(result => {
        res.status(201).json({
            message: "Friend created successfully!",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

// This function return a Game post founded in database by a given id
function show(req, res){
    const id = req.params.id;

    models.Game.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Game not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function showByUserID(req, res){
    const url = req.params.url;

    models.Game.findOne({where: {Url: url}}).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Game not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

// This function get all Game post in database
function index(req, res){
    models.Game.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

// This function update a Game post in database by a given id
function update(req, res){
    const id = req.params.id;
    const updateGame = {
        DevID: req.body.DevID,
        Url: req.body.Url,
        DemoUrl: req.body.DemoUrl,
        Title: req.body.Title,
        Avatar: req.body.Avatar,
        Category: req.body.Category,
        GamePlayImage: req.body.GamePlayImage,
        Description: req.body.Description,
        Played: req.body.Played,
        Rate: req.body.Rate
    }

    const validationResponse = v.validate(updateGame, schema);
    if(validationResponse !== true){
        return res.status(400).json({
            message: "Validation failed!",
            errors: validationResponse
        });
    }

    models.Game.update(updateGame, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "Game updated successfully!",
            post: updateGame
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    })
}

// This function delete a Game post in database by a given id
function destroy(req, res){
    const id = req.params.id;

    models.Game.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "Game deleted successfully!"
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
    index: index,
    show: show,
    showByUserID:showByUserID,
    update: update,
    destroy: destroy
}