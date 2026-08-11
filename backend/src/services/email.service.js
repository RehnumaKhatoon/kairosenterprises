const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",

    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

const sendContactEmail = async ({
    name,
    email,
    phone,
    service,
    message,
}) => {
    return transporter.sendMail({
        from: `"Kairos Enterprises Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL,
        replyTo: email,
        subject: `New Enquiry - ${name}`,

        html: `
      <h2 style="color:#d8893b;">
        New Contact Enquiry
      </h2>

      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service:</strong> ${service || "Not specified"}</p>

      <h3>Message</h3>

      <p>${message}</p>
    `,
    });
};

module.exports = {
    sendContactEmail,
};