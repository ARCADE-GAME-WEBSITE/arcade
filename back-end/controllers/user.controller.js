const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Validator = require('fastest-validator');
const nodemailer = require('nodemailer');

const schema = {
    Name: {type:"string", optional:true},
    Email: {type:"string", optional: false},
    Password: {type:"string", optional: false},
    Role: {type: "number", optional:false},
    Gender: {type:"number", optional:false},
    DayOfBirth: {type:"string", optional: true},
    Friends: {type:"string", optional: true}
}

const v = new Validator();

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
        user: "ArcadeGameWebsite@outlook.com.vn", 
        pass: "arcade2001"
    }
})

function signUp(req, res){
    models.User.findOne({where:{Email:req.body.Email}}).then(result => {
        if(result){
            res.status(209).json({
                message: "Email already exists!",
            });
        }
        else {
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.Password, salt, function(err, hash){
                    const default_ava = (req.body.Gender == 1) ? 'male.jpg' : 'female.jpg';
                    const user = {
                        Email: req.body.Email,
                        Password: hash,
                        Role: 0,
                        Full_name: req.body.Full_name,
                        Gender: req.body.Gender,
                        DayOfBirth: "0000-00-00",
                        Avatar: default_ava,
                        Friends: ""
                    }

                    const validationResponse = v.validate(user, schema);
                    if(validationResponse !== true){
                        return res.status(400).json({
                            message: "Validation failed!",
                            errors: validationResponse
                        });
                    }
                
                    models.User.create(user).then(result => {
                        res.status(201).json({
                            message: "User created successfully!",
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Something went wrong!"
                        });
                    });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error:error
        });
    });
}

function login(req, res) {
    models.User.findOne({where:{Email: req.body.Email}}).then(user => {
        if(user === null){
            res.status(401).json({
                message: "Invalid credentials!",
            });
        }
        else {
            bcryptjs.compare(req.body.Password, user.Password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.Email,
                        userId: user.id
                    }, 'secret', function(err, token){
                        res.status(200).json({
                            message: "Authentication successful!",
                            token: token,
                            user: user
                        });
                    });
                }
                else {
                    res.status(401).json({
                        message: "Invalid credentials!",
                    });
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function index(req, res){
    models.User.findAll().then(result => {
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

    models.User.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "User not found!"
            }) 
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

    bcryptjs.genSalt(10, function(err, salt){
        bcryptjs.hash(req.body.Password, salt, function(err, hash){
            const updateUser = {
                Email: req.body.Email,
                Password: hash,
                Role: req.body.Role,
                Full_name: req.body.Full_name,
                Gender: req.body.Gender,
                DayOfBirth: req.body.DayOfBirth,
                Friends: req.body.Friends 
            }

            const validationResponse = v.validate(updateUser, schema);
            if(validationResponse !== true){
                return res.status(400).json({
                    message: "Validation failed!",
                    errors: validationResponse
                });
            }

            models.User.update(updateUser, {where: {id:id}}).then(result => {
                res.status(200).json({
                    message: "User updated successfully!",
                    post: updateUser
                });
            }).catch(error => {
                res.status(200).json({
                    message: "Something went wrong!",
                    error: error
                });
            })
        });
    });
}

function destroy(req, res){
    const id = req.params.id;

    models.User.destroy({where:{id:id}}).then(result => {
        res.status(200).json({
            message: "User deleted successfully!"
        });
    }).catch(error => {
        res.status(200).json({
            message: "Something went wrong!",
            error: error
        });
    });
}

function forgot(req, res){
    models.User.findOne({where: {Email:req.body.Email}}).then(result => {
        if(result){
            const email = result.Email;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let newPassword = "";
            for ( var i = 0; i < 10; i++ ) {
                newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
            }

            sendEmail(email, newPassword);

            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(newPassword, salt, function(err, hash){
                    const updateUser = {
                        Email: req.body.Email,
                        Password: hash,
                        Role: req.body.Role,
                        Full_name: req.body.Full_name,
                        Gender: req.body.Gender,
                        DayOfBirth: req.body.DayOfBirth,
                        Friends: req.body.Friends 
                    }

                    models.User.update(updateUser, {where: {id:result.id}}).then(result => {
                        res.status(200).json({
                            message: "Password reset successfully!",
                            post: updateUser
                        });
                    }).catch(error => {
                        res.status(200).json({
                            message: "Something went wrong!",
                            error: error
                        });
                    });
                });
            });
        }
        else{
            res.status(404).json({
                message: "Email not found!"
            }) 
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong!",
            error: error
        })
    });
}

function sendEmail(email, newPassword){
    const options = {
        from: "ArcadeGameWebsite@outlook.com.vn",
        to: email,
        subject: "Reset password for account: " + email,
        text: "Hello " + email + ", you have just reset your password for ArcadeGameWebsite.com!"
            + "\n\nYour new password is: " + newPassword 
            + "\n\nDo not share this email or password to any one!"
            + "\n\nIf you not doing this, please report back to us!"
            + "\n\nOr else, you can just ignore this message!"
            + "\n\nThank you,"
            + "\n---ArcadeGameWebsite - GoNin Team---"
    }
    
    transporter.sendMail(options, function(err, info){
        if (err){ 
            console.log(err);
            return false;
        }
        console.log("Send: " + info.response);
    })
}

module.exports = {
    signUp: signUp,
    login: login,
    index:index,
    show: show,
    update: update,
    destroy: destroy,
    forgot: forgot,
}