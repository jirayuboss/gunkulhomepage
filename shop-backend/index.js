var express = require("express");
var request = require('request');
var mongoose = require("mongoose");
var multer = require('multer');
var fs = require('fs');
var crypto = require('crypto')
var app = express();
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require('gridfs-stream')
const bodyParser = require("body-parser");

var mongo_uri = <REPLACEME>;
mongoose.Promise = global.Promise;
mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(
    () => {
        console.log("[success] task 2 : connected to the database ");
    },
    error => {
        console.log("[failed] task 2 " + error);
        process.exit();
    }
);

let conn = mongoose.connection
let gfs = conn.once('open', () => {
    //initialize our stream
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('uploads')
})

// Create storage engine
const storage = new GridFsStorage({
    url: mongo_uri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err)
                }
                const filename = file.originalname
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads',
                }
                resolve(fileInfo)
            })
        })
    },
})

const upload = multer({ storage })

var productSchema = mongoose.Schema({
    imgId: String,
    name: String,
    description: String,
    price: Number
});

// compile schema to model
var ProductModel = mongoose.model('Product', productSchema);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/products", async (req, res, next) => {
    let url = 'https://fakestoreapi.com/products'
    request(url, { json: true }, (err, body) => {
        if (err) { return console.log(err); }
        res.json(body.body);
    });
});

app.get("/products/:productId", async (req, res) => {
    const url = 'https://fakestoreapi.com/products/' + req.params.productId
    request(url, { json: true }, (err, body) => {
        if (err) { return console.log(err); }
        res.json(body.body);
    });
});

app.post("/products", upload.single('file'), async (req, res, next) => {

    var product = new ProductModel({
        imgId: req.file.id,
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });
    await product.save()
    res.status(201).send()
});

app.get("/admin/products", async (req, res, next) => {
    var imgId = '';
    var finalProduct = [];
    gfs.files.find().toArray((err, files) => {
        //check if files exist
        if (!files || files.length == 0) {
            return res.status(404).json({
                err: "No files exist"
            })
        }
        // files exist
        filesArray = files
    })

    ProductModel.find({}, function (err, users) {
        res.json(filesArray.concat(users));
    });

});

app.delete("/products/:id", (req, res) => {
    gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
        if (err) {
            return res.status(404).json({ err: err })
        }
    })
    ProductModel.remove({ _id: req.params.id, root: 'products' }, (err, gridStore) => {
        if (err) {
            return res.status(404).json({ err: err })
        }
        res.redirect("/admin/products")
    })
})