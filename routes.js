var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');
let imageName;

router.get("/",function(req,res){
        res.sendFile(__dirname + "/public/views/index.html");
});

router.get("/editor",function(req,res){
        res.sendFile(__dirname + "/public/views/editor.html");
});

router.get("/request",function(req,res){
    console.log(imageName)
        res.json({name:imageName});
});

router.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        //imageName = files.filetoupload.name.replace("/", "");
        imageName = files.filetoupload.name;
        console.log(imageName)
        var newpath = __dirname + '/public/views/images/' + files.filetoupload.name;
        mv(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
            res.end();
        });
    });
});

module.exports = router;