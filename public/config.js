  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD9J3rX8GlVAAQH1akAQGSBMGRcMBEmCf8",
    authDomain: "ajonp-firebaseui-pwa.firebaseapp.com",
    databaseURL: "https://ajonp-firebaseui-pwa.firebaseio.com",
    projectId: "ajonp-firebaseui-pwa",
    storageBucket: "ajonp-firebaseui-pwa.appspot.com",
    messagingSenderId: "294545399585"
  };
  firebase.initializeApp(config);

  // Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = 'YOUR_OAUTH_CLIENT_ID';