const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const lawyerRouter = require("./routes/lawyerRouter");
const clientRouter = require("./routes/clientRouter");
const appointmentRouter = require("./routes/appointmentRouter");

const app = express();

app.use(mongoSanitize());
app.use(hpp());

app.use(express.json());

//ROUTES
app.use("/api/lawyers", lawyerRouter);
app.use("/api/clients", clientRouter);
app.use("/api/appointments", appointmentRouter);

// RUN
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
