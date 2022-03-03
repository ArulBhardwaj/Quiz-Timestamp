import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAuzYfEvyZufFKjZ9Te5iE8__FMr2x2D1g",
  authDomain: "buzzer-game-f79af.firebaseapp.com",
  databaseURL: "https://buzzer-game-f79af-default-rtdb.firebaseio.com",
  projectId: "buzzer-game-f79af",
  storageBucket: "buzzer-game-f79af.appspot.com",
  messagingSenderId: "603438365330",
  appId: "1:603438365330:web:9a8979ab1050a65b02444b"
};

let app = firebase.initializeApp(firebaseConfig);
export default app.database();

