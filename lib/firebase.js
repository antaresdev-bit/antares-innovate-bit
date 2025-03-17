// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHIE87hwa5pH-KtxK0q3rJ0788syw_fyc",
  authDomain: "news-antares.firebaseapp.com",
  projectId: "news-antares",
  storageBucket: "news-antares.appspot.com",
  messagingSenderId: "947621454044",
  appId: "1:947621454044:web:a8062a771431f1622b9419",
  measurementId: "G-BMV8PPQCPW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
