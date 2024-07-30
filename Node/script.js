// Question 1 & 2
// const http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200, {'content-Type' : 'text/plain'})

//     res.end('Hello Node!!!\n\john')
// }).listen(3000)

// console.log('Server running at http://127.0.0.1:8081/');


// question 3
// const fs = require('fs');

// const data = fs.readFileSync('welcome.txt');

// console.log(data.toString());
// console.log('Program Ended');

// const fs = require('fs');
// fs.readFile('welcone.txt', function (err, data){
//     // this is callback function is an asynchronous which check for errors before the program runs
//     if (err) return console.error(err);
//     console.log(data.toString());
// });

// console.log('Program Ended');

// question 4
// const generatePassword = require('generate-password');

// function generateRandomPassword() {
//   const password = generatePassword.generate({
//     length: 12,
//     numbers: true,
//     symbols: true,
//     uppercase: true,
//     lowercase: true,
//     strict: true,
//   });

//   console.log(`Generated Password: ${password}`);
// }

// generateRandomPassword();


// Question 5

// const nodemailer = require('nodemailer');

// async function sendEmail() {
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'your-email@gmail.com', // Replace with your email address
//       pass: 'your-email-password' // Replace with your email password or app-specific password
//     }
//   });

//   let mailOptions = {
//     from: 'your-email@gmail.com', // Replace with your email address
//     to: 'your-email@gmail.com', // Replace with the recipient's email address
//     subject: 'Test Email from Node.js',
//     text: 'This is a test email sent from Node.js using nodemailer!'
//   };

//   try {
//     let info = await transporter.sendMail(mailOptions);
//     console.log('Email sent: ' + info.response);
//   } catch (error) {
//     console.error('Error sending email: ' + error);
//   }
// }

// sendEmail();


// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// var connectHandler = function connected(){
//     console.log('connection successful.');
//     eventEmitter.emit('data_received')
// } 

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', function(){
//     console.log('data received successfully.');
// });

// eventEmitter.emit('connection');
// console.log('Program Ended');

