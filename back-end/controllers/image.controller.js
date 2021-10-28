
function uploadSingle(req, res){
    if(req.file.filename){
        res.status(201).json({
            message: "Image upload successfully!",
            url: req.file.filename
        });
    }
    else {
        res.status(500).json({
            message: "Something went wrong!"
        });
    }
}

function uploadMultiple(req, res){
    if (req.files.length <= 0) {
        res.status(201).json({
            message: "Upload files empty!"
        });
    }
    else{
        if (req.files.length > 10) {
            res.status(401).json({
                message: "Upload too many files!"
            });
        }
        else {
            const files = req.files;
            var url = [];
            files.forEach(file => {
                url.push(file.filename);
            });

            res.status(201).json({
                message: "Upload complete!",
                url: url
            });
        }
    } 
}

module.exports = {
    uploadSingle: uploadSingle,
    uploadMultiple: uploadMultiple
}