const { User } = require("../../models/users");
const createError = require("http-errors");
const { createVerifyEmail, sendEmail } = require("../../helpers");

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw createError(404, `User not found`);
  }
  if (user.verify) {
    throw createError(400, "Verification has been already passed");
  }

  const verifyEmail = createVerifyEmail({
    email,
    verificationToken: user.verificationToken,
  });
  await sendEmail(verifyEmail);

  res.json({
    status: "success",
    code: 200,
    data: {
      message: "Verification email sent",
    },
  });
};

module.exports = resendVerifyEmail;
