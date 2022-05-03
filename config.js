import firebase from "firebase";
require("@firebase/firestore");

// var firebaseConfig = {
//   apiKey: "AIzaSyCZrG0BF6LrnRpWZjsPQxNGyMCLByo8HrM",
//   authDomain: "e-ride-549e4.firebaseapp.com",
//   projectId: "e-ride-549e4",
//   storageBucket: "e-ride-549e4.appspot.com",
//   messagingSenderId: "588298110700",
//   appId: "1:588298110700:web:34e3df331c6b1fc95047c9",
//   measurementId: "G-G3K7BWL5LH"
// };
const firebaseConfig = {
  apiKey: "AIzaSyC_4oLVrHiSNlFnQNlHAyGjfjbS-aEADoI",
  authDomain: "rider-d14f5.firebaseapp.com",
  projectId: "rider-d14f5",
  storageBucket: "rider-d14f5.appspot.com",
  messagingSenderId: "469554942200",
  appId: "1:469554942200:web:2251526078e34a82482b0d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
