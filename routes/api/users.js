const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { users: ctrl } = require("../../controllers");
const {
  validateSchema,
  authenticateToken,
  upload,
} = require("../../middlewares");
const { schemas } = require("../../models/users");

router.get(
  "/current",
  authenticateToken,
  asyncHandler(async (req, res, next) => {
    await ctrl.getCurrent(req, res, next);
  })
);

router.patch(
  "/",
  authenticateToken,
  validateSchema(schemas.subscriptionSchema),
  asyncHandler(async (req, res, next) => {
    await ctrl.updateSubscription(req, res, next);
  })
);

router.patch(
  "/avatars",
  authenticateToken,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
