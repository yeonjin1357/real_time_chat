/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.checkNickname = functions.https.onRequest(async (request, response) => {
  // 요청에서 닉네임 추출
  const nickname = request.query.nickname;

  if (!nickname) {
    response.status(400).send("Nickname is required");
    return;
  }

  try {
    const usersRef = admin.firestore().collection("users");
    const snapshot = await usersRef.where("nickname", "==", nickname).get();

    if (snapshot.empty) {
      // 닉네임이 사용 중이지 않음
      response.send({ unique: true });
    } else {
      // 닉네임이 이미 사용 중
      response.send({ unique: false });
    }
  } catch (error) {
    console.error("Error checking nickname", error);
    response.status(500).send("Internal server error");
  }
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
