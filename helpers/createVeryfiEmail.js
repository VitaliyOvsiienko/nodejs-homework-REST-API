require("dotenv").config();

const createVerifyEmail = ({ email, verificationToken }) => {
  const verifyEmail = {
    to: email,
    from: "ovsiyenko80@gmail.com",
    subject: "Verify your email",
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}"
        target="_blank">Click to verify email</a>`,
  };

  return verifyEmail;
};

module.exports = createVerifyEmail;
