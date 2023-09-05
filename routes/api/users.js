const express = require("express");
const router = express.Router();
const { ctrlWrapper } = require("../../helpers");

const { users: ctrl } = require("../../controllers");
const {
  validateSchema,
  authenticateToken,
  upload,
} = require("../../middlewares");
const { schemas } = require("../../models/users");

router.get("/current", authenticateToken, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "/",
  authenticateToken,
  validateSchema(schemas.subscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/avatars",
  authenticateToken,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
