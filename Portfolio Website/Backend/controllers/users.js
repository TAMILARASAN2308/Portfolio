// const Contact = require('../models/contactModel');
const nodemailer = require("nodemailer");


exports.contact = async (req, res) => {
    try {
        const { name, email, mobile, subject, message } = req.body; 

        // const contactDetails = new Contact({
        //     name,
        //     email,
        //     mobile,
        //     subject,
        //     message
        // });

        // await contactDetails.save();

         // Send email notification
         const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, 
            subject: `New Contact Message: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ msg: 'Contact added and email sent successfully!' }); 
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ msg: 'An error occurred, please try again later.' });
    }
};
