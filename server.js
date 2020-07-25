const express = require('express');

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
const nodemailer = require('nodemailer');

const app = express();

app.get('/emailsend', (req, res) => {
  res.send("empty");
});

app.post('/info/:param1/:param2/:param3/', (req, res) => {
  
  res.redirect('localhost:3000/');
  

  const fnames = req.params["param1"];
  const email = req.params["param2"];
  const date = req.params["param3"];

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ezeaninewton1@gmail.com', // TODO: your gmail account
        pass: 'chij1234' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'ezeaninewton1@gmail.com', // TODO: email sender
    to: 'ezeaninewton1@gmail.com', // TODO: email receiver
    subject: " Salespop Appointment Schedule",
    text: "Name of customer: " + fnames +"\nUser Email Address: " + email +"\nAppointment Date: " + date  
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return console.log('Error occurs');
    }
    return console.log('Email sent!!!');
});
  

});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);