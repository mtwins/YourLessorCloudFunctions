// import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');




const admin = require('firebase-admin');
admin.initializeApp();

exports.sendMessage = functions.https.onCall((data: { message: any; senderName: any; type: any; id: any; token: any; }, _context: any) => {
      var message = {
        data: {
          message:data.message,
          senderName: data.senderName,
          type:data.type,
          appointmentId: data.id
        },
        token:data.token
      };
      console.log('Message:', message);

      admin.messaging().send(message)
        .then((response: any) => {
          // Response is a message ID string.
          console.log('Successfully sent message:', response);
          return response;
        })
        .catch((error: any) => {
          console.log('Error sending message:', error);
        });
});


exports.helloWorld = functions.https.onRequest((_request: any, response: { send: (arg0: string) => void; }) => {
    response.send("Hello from Firebase!");
   });