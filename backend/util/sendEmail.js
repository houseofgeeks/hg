const nodemailer = require("nodemailer");

const sendEmail = (body) => {
  const transport = {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.THE_EMAIL,
      pass: process.env.THE_PASSWORD,
    },
  };

  const mail = {
    from: process.env.THE_EMAIL,
    to: process.env.THE_EMAIL,
    subject: "Message from HouseOfGeeks Website",
    text: 
        `
          from: ${body.name} (${body.email})
          message: ${body.message}
        `,
  };

  const transporter = nodemailer.createTransport(transport);
  const promise = new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.error(error);
        reject(new Error("mail error at verify"));
      } else {
        console.log("Mailer ready");
        transporter.sendMail(mail, (err, data) => {
          if (err) {
            console.log(err, "from email send function");
            reject(new Error("mail error"));
          } else {
            console.log("success");
            resolve(1);
          }
        });
      }
    });
  });

  return promise;
};

module.exports = sendEmail;


