const admin = require("firebase-admin");
const serviceAccount = require(`${__dirname}/../serviceAccountKey.json`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-d60a7.firebaseio.com",
});

const db = admin.firestore();

module.exports = { admin, db };
