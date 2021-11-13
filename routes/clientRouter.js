const express = require("express");
const clientController = require("./../controllers/clientsController");

const router = express.Router();
const multer = require("multer");
const Client = require("../models/clientModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, req.params.id + ".jpg");
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || ile.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 6,
  },
  fileFilter: fileFilter,
});

router.route("/:id/img").patch(upload.single("img"), async (req, res) => {
  await Client.findOneAndUpdate({ idAuth: req.params.id }, $set, {
    img: req.file.path,
  }, { new: true },
    (err, client) => {
      if (err) { print(err); return res.status(500).send(err) };
      const response = {
        message: "img added successfully updated",
        data: client,
      };
      return res.status(200).send(response);
    });
});

router
  .route("/")
  .get(clientController.getAllClients)
  .post(clientController.createClient);
router
  .route("/:id")
  .get(clientController.getClient)
  .patch(clientController.updateClient)
  .delete(clientController.deleteClient);

module.exports = router;
