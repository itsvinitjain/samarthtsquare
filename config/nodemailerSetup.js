const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

 var transporter = nodemailer.createTransport({
    host: 'mail.samarthtsquare.com',
    port: 465,
    secure: true,
    auth: {
        user: '_mainaccount@samarthtsquare.com',
        pass: '@oT88A7AbA!9is'
    }
});

// var transporter = nodemailer.createTransport({
//     service: 'hotmail',
//     auth: {
//       user: 'sunitaanilpatil@outlook.com',
//       pass: 'DEC@3107042021'
//     }
//   });

  
function sendEmail(mailOptions){

    return new Promise((resolve,reject)=>{

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          reject(false)
        } else {
          console.log('Email sent: ' + info.response);
          resolve(true);
        }
      });

      
    })
 

}


module.exports= sendEmail;