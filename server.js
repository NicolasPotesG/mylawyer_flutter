//Packages for img
// const multer = require('multer');
// const path = require('path');
// const model = require('./model');

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./index");

//configure multer storage
// app.use('/uploads', express.static(__dirname + '/uploads'));
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads');
//   },

//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   }
// });

// var upload = multer({ storage: storage });
// app.post('/upload', upload.single('myFile'), async (req, res, next) => {
//   const file = req.file;
//   if (!file) {
//     const error = new Error('Please upload a file');
//     error.httpStatusCode = 400;
//     return next("hey error");
//   }
//   const imagepost = new model({
//     image: file.path
//   });

//   const savedimage = await imagepost.save();
//   res.json(savedimage);
// })
// app.get('/image', async (req, res) => {
//   const image = await model.find();
//   res.json(image);
// });

//

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD);

const conect = async () => {
  await mongoose.connect(DB, {

  })
    .then(() => {
      console.log("DB conection succesful");

    }).catch(err => {
      conect();
      console.log(err);

    });
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`App running on mode ${process.env.NODE_ENV} on port ${port}...`);
  });
}


conect();