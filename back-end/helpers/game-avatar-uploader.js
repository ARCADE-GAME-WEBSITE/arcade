const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const dir = './uploads/images/games/' + req.params.id
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
        cb(null, dir);
    },
    filename: function(req, file, cb){
        cb(null, 'avatar' + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(new Error('Unsupported files'), false);
    }
}

const upload = multer ({
    storage: storage,
    limits: {
        fileSize: 1024*1024*10,
    },
    fileFilter: fileFilter
});

module.exports = {
    upload: upload
}