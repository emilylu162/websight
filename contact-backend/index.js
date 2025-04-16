// index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
  }));
  
app.use(express.json());

app.options('/contact', cors());

// Route for contact form
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
