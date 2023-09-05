const sgEmail = require("@sendgrid/mail");
require("dotenv").config();
const { SENDGRID_API_KEY } = process.env;

sgEmail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (email, verificationToken) => {
  const mail = {
    to: email,
    from: "ovsiyenko80@gmail.com",
    subject: "Verify your email",
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}"
        target="_blank">Click to verify email</a>`,
  };

  await sgEmail
    .send(mail)
    .then(() => console.log("Email send successfully"))
    .catch((err) => console.log(err.message));
  return true;
};

module.exports = sendEmail;
