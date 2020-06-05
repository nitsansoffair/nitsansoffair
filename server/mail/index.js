const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const send = async ({ from, subject, html }) => {
    try {
        const response = await sgMail.send({
            to: 'nitsan.soffair.dev@gmail.com',
            from,
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
