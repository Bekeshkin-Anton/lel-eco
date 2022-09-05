import nodemailer from 'nodemailer';

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            }
        });
    }

    async sendForm(name, email, phone, title) {
        const html = this.makeHtmlBody(name, email, phone, title);
        const info = await this.transporter.sendMail({
            from: process.env.MAIL_USERNAME,
            to: process.env.MAIL_DESTINATION,
            subject: title,
            html
        });

        console.log(`Message sent: ${info.messageId}`);
    }

    makeHtmlBody(name, email, phone, title) {
        return `
<h1>${title}</h1>
<div>
    <span><b>Имя клиента:</b>&nbsp;${name}</span>
    <br/>    
    <span><b>Номер телефона клиента:</b>&nbsp;${phone}</span>
    <br/>
    <span><b>Адрес электронной почты клиента:</b>&nbsp;${email}</span>
    <br/>
</div>
        `;
    }
}

export default MailService;