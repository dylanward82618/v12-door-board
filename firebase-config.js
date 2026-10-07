// V12 Door Board settings.
// The Firebase web config is not secret — it's meant to live in a website's code.
// Access is controlled by the rules in firestore.rules.

window.V12_FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// The email you created as the admin user in Firebase Authentication.
window.V12_ADMIN_EMAIL = "dylanward82618@gmail.com";

// Teams shown before you save your own list in the Admin panel.
window.V12_DEFAULT_TEAMS = [
  "Colby Shimmel",
  "Christian Ahlquist",
  "Anthony Jacobs",
  "Alexis Morris",
  "Carlos Romero",
  "Dylan Ward",
  "Steve Wisler",
  "Nathan Cotton",
  "Jody Posey",
  "Kaley Hardie"
];
