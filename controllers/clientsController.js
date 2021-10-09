const Client = require("../models/clientModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllClients = catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };
    let features = new APIFeatures(Client.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
  
    const doc = await features.query;
    
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

  exports.getClient = factory.getOne(Client);
  exports.createClient = factory.createOne(Client);
  exports.updateClient = factory.updateOne(Client);
  exports.deleteClient = factory.deleteOne(Client);