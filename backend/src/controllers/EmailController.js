const nodemailer = require('nodemailer');

const SMTP_CONFIG = require('../config/smtp');

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function run() {
  const mailSent = await transporter.sendMail({
    text: "Seu amigo secreto é Fulano",
    subject: "Amigo secreto",
    from: "amigosecreto.envio@gmail.com",
    to: ["amigosecreto.envio@gmail.com", "felipehonorato09@gmail.com"],
  });

  console.log(mailSent);
}

module.exports = run();