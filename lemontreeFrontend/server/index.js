const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const axios = require('axios');
const transporter = require('./config');
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {

  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: 'info@lemontreemedia.io', // list of receivers
      subject: req.body.name, // Subject line
      html: req.body.message // plain text body
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }

}
);


app.listen(3000, () => {
  console.log('server start on port 3000');
});