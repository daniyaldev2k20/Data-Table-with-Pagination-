const Company = require("../models/Nobel");
const catchAsync = require("../utils/catchAsync");
const APIFeatures = require("../utils/pagination");
// const MongoDBCrud = require('../utils/mongoCRUD');

exports.getAllNobels = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Company.find({}), req.query).paginate();
  let nobels = await features.query;

  res.status(200).json({
    status: "success",
    results: nobels.length,
    data: {
      nobels
    },
  });
});
