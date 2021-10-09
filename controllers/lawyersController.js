const Lawyer = require("../models/lawyerModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllLawyers = catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };
    let features = new APIFeatures(Lawyer.find(filter), req.query)
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

  exports.getLawyer = factory.getOne(Lawyer);
  exports.createLawyer = factory.createOne(Lawyer);
  exports.updateLawyer = factory.updateOne(Lawyer);
  exports.deleteLawyer = factory.deleteOne(Lawyer);