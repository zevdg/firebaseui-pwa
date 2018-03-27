  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3-yVNpcLOBgLG0tbHdN_sLYJbS2s3pLo",
    authDomain: "fb-js-sdk-test.firebaseapp.com",
    databaseURL: "https://fb-js-sdk-test.firebaseio.com",
    projectId: "fb-js-sdk-test",
    storageBucket: "fb-js-sdk-test.appspot.com",
    messagingSenderId: "36937422344"
  };
  firebase.initializeApp(config);

  // Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID = 'YOUR_OAUTH_CLIENT_ID';
