// ./src/services/sendMail.js
import transporter from '@/lib/nodemailer';

export default async function sendEmail({ subject, text, html}) {
  // Obtener la lista de correos desde las variables de entorno
  const recipientEmails = process.env.RECIPIENT_EMAILS?.split(',') || [process.env.GMAIL_APP_USERNAME];
  
  const mailOptions = {
    from: process.env.GMAIL_APP_USERNAME,
    to: recipientEmails.join(','), // Unir todos los correos con comas
    subject,
    text,
    html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err)
        return reject('Unable to send email')
      }

      const message = `Message delivered to ${info.accepted}`;
      console.error(message)
      return resolve(message);
    })
  });
}