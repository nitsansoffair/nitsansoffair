const nodemailer = require('nodemailer');

const send = async ({ from, subject, html }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER_NAME,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const response = await transporter.sendMail({
            from,
            to: process.env.EMAIL_USER_NAME,
            subject,
            html
        });

        return response.status === 200;
    } catch (e) {
        return false;
    }
};

module.exports = {
    send
};
