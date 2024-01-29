const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

exports.checkNickname = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    const nickname = request.query.nickname;

    if (!nickname) {
      response.status(400).send("Nickname is required");
      return;
    }

    try {
      const usersRef = admin.firestore().collection("users");
      const snapshot = await usersRef.where("nickname", "==", nickname).get();

      if (snapshot.empty) {
        response.send({ unique: true });
      } else {
        response.send({ unique: false });
      }
    } catch (error) {
      console.error("Error checking nickname", error);
      response.status(500).send("Internal server error");
    }
  });
});
