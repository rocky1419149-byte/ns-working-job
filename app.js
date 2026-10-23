// NS WORKING JOB — Firebase setup
// Replace the example values with your Firebase Web App config.

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "ns-working-job.firebaseapp.com",
  projectId: "ns-working-job",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

console.log("NS WORKING JOB Firebase is ready.");
