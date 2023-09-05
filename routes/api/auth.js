const express = require("express");
const router = express.Router();

const { auth: ctrl } = require("../../controllers");
const { validateSchema, authenticateToken } = require("../../middlewares");
const { schemas } = require("../../models/users");
const { ctrlWrapper } = require("../../helpers");

router.post(
  "/signup",
  validateSchema(schemas.registerSchema),
  ctrlWrapper(ctrl.signup)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verify));

router.post(
  "/verify",
  validateSchema(schemas.verifyEmailSchema),
  ctrlWrapper(ctrl.resendEmail)
);

router.post(
  "/login",
  validateSchema(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/logout", authenticateToken, ctrlWrapper(ctrl.logout));

module.exports = router;
