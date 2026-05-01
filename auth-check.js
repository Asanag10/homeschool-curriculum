// Authentication Check Script
// This file protects pages that require login
// Add this script to any page that should only be accessible to logged-in users

import { auth } from './firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';

// Check if user is logged in
// This runs automatically when the page loads
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // User is NOT logged in
        // Redirect to login page
        console.log('User not authenticated, redirecting to login...');
        window.location.href = 'login.html';
    } else {
        // User IS logged in
        console.log('User authenticated:', user.email);
        
        // Optional: Display user's name in the header
        const userNameElement = document.getElementById('userName');
        if (userNameElement) {
            userNameElement.textContent = user.displayName || user.email;
        }
    }
});

// Logout function
// Call this when user clicks logout button
export function logout() {
    auth.signOut().then(() => {
        console.log('User logged out');
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Logout error:', error);
        alert('Error logging out. Please try again.');
    });
}
