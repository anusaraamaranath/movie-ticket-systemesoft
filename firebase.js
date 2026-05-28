import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
doc,
getDoc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyD35vtyzE1YrEDWdGVlc3iudAJsvEtqu60",

authDomain: "countdown-horror.firebaseapp.com",

projectId: "countdown-horror",

storageBucket: "countdown-horror.firebasestorage.app",

messagingSenderId: "1098077780359",

appId: "1:1098077780359:web:aa11e5be22b3c039a77b22"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
db,
doc,
getDoc,
updateDoc
};