const admin = require("firebase-admin");
const serviceAccount = require("../hrfinder-fa544-firebase-adminsdk-7lmr2-7069bb7384.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();

exports.uploadImage = async (img) => {
  const isPictureValid = img.match(/[^:/]\w+(?=;|,)/);
  let avatar;
  if (isPictureValid) {
    const mimeType = isPictureValid[0];
    const base64Image = img.split(";base64,").pop();
    const buffer = Buffer.from(base64Image, "base64");
    const fileName = `${Date.now()}.${mimeType}`;

    const file = bucket.file(fileName);
    await file.save(buffer, {
      metadata: {
        contentType: `image/${mimeType}`,
      },
    });

    avatar = `https://firebasestorage.googleapis.com/v0/b/${
      bucket.name
    }/o/${encodeURIComponent(fileName)}?alt=media`;
  }

  return avatar;
};
