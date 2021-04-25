import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAR0QDBULOmQzMNB1kZdfKNUboAaxhseRk',
  authDomain: 'disneyplus-clone-c4c7e.firebaseapp.com',
  projectId: 'disneyplus-clone-c4c7e',
  storageBucket: 'disneyplus-clone-c4c7e.appspot.com',
  messagingSenderId: '1051428813815',
  appId: '1:1051428813815:web:875449d68527bc04608cf2',
  measurementId: 'G-EX94X3FZ9X',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
