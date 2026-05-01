// Firebase Configuration
// This file initializes Firebase with your project credentials
// Keep this file - it's needed by all pages that use Firebase

// Import Firebase modules from CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Your Firebase configuration
// This connects your website to your Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBVGlfUO4SvtgmnDU9cGEI6lDQW6-krXms",
  authDomain: "homelearn-academy.firebaseapp.com",
  projectId: "homelearn-academy",
  storageBucket: "homelearn-academy.firebasestorage.app",
  messagingSenderId: "58436040908",
  appId: "1:58436040908:web:fcd81672bae3c8da9b6a69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
// This handles user signup, login, logout
const auth = getAuth(app);

// Initialize Firestore Database
// This stores user data, children info, progress, etc.
const db = getFirestore(app);

// Export these so other files can use them
export { auth, db };
