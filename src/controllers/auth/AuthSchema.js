const clsAuthController = require("../auth/AuthController");
const clsUserSchema = require("../../validation/user_validation/userValidate");
exports.postRegistration = async (req, res) => {
  let responseObj = {};
  const objPostRegistration = clsUserSchema.ValidateUserCredential(req.body);
  if (objPostRegistration.hasOwnProperty("error")) {
    res.statusCode = 400;
    Object.assign(
      responseObj,
      { status: "fail" },
      {
        message: objPostRegistration.error.details[0].message.replace(/"/g, ""),
      }
    );
    res.send(responseObj);
    //loggers.calibrationApiLogger.info(JSON.stringify({ apiCalled: 'List Of Pending Calibration', message: responseObj }));
  } else {
    // let now = new Date();
    // let todayDate = date.format(now, 'YYYY-MM-DD');

    const auth = await clsAuthController.register(req.body);
    if (auth.statusCode === 200) {
      res.status(auth.statusCode).send(auth);
    } else {
      res.status(auth.statusCode).send(auth);
    }
  }
};


exports.postLogin = async (req, res) => {
  let responseObj = {};
  const objPostLogin = clsUserSchema.ValidateUserLogin(req.body);
  if (objPostLogin.hasOwnProperty("error")) {
    res.statusCode = 400;
    Object.assign(
      responseObj,
      { status: "fail" },
      {
        message: objPostLogin.error.details[0].message.replace(/"/g, ""),
      }
    );
    res.send(responseObj);
    //loggers.calibrationApiLogger.info(JSON.stringify({ apiCalled: 'List Of Pending Calibration', message: responseObj }));
  } else {
    const login = await clsAuthController.login(req.body);
    if (login.statusCode === 200) {
      res.status(login.statusCode).send(login);
    } else {
      res.status(login.statusCode).send(login);
    }
  }
};
