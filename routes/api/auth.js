const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { auth: ctrl } = require("../../controllers");
const { validateSchema, authenticateToken } = require("../../middlewares");
const { schemas } = require("../../models/users");

router.post(
  "/signup",
  validateSchema(schemas.registerSchema),
  asyncHandler(async (req, res, next) => {
    await ctrl.signup(req, res, next);
  })
);

router.post(
  "/login",
  validateSchema(schemas.loginSchema),
  asyncHandler(async (req, res, next) => {
    await ctrl.login(req, res, next);
  })
);

router.get(
  "/logout",
  authenticateToken,
  asyncHandler(async (req, res, next) => {
    await ctrl.logout(req, res, next);
  })
);

module.exports = router;
