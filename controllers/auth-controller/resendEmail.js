const { User } = require("../../models/users");
const createError = require("http-errors");
const sendEmail = require("../../helpers");

const resendEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw createError(404, `User not found`);
  }
  if (user.verify) {
    throw createError(400, "Verification has already been passed");
  }

  const mail = (email, user.verificationToken);
  await sendEmail(mail);

  res.json({
    status: "success",
    code: 200,
    data: {
      message: "Verification email sent",
    },
  });
};

module.exports = resendEmail;
