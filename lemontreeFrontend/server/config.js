const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'mail.lemontreemedia.io',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'info@lemontreemedia.io', // generated ethereal user
      pass: 'Lemontree2019!', // generated ethereal password
    },
    tls:{
      rejectUnauthorized: false
    }
  });

module.exports = transporter;