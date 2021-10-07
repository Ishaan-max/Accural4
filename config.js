import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDEsz95UShddeJcdMpULqH5W_QHTyLJFv4",
  authDomain: "accural-app.firebaseapp.com",
  projectId: "accural-app",
  storageBucket: "accural-app.appspot.com",
  messagingSenderId: "436131987666",
  appId: "1:436131987666:web:0fc2afe0e225f91eee6d0b"
};

firebase.initializeApp(firebaseConfig)
export default firebase()