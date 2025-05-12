// DOM Elements
const animateBtn = document.getElementById('animateBtn');
const animatedElement = document.getElementById('animatedElement');
const savePrefsBtn = document.getElementById('savePrefs');
const usernameInput = document.getElementById('username');
const themeSelect = document.getElementById('theme');

// Load saved preferences
function loadPreferences() {
    const savedUsername = localStorage.getItem('username');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    
    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }
}

// Save preferences to localStorage
function savePreferences() {
    const username = usernameInput.value.trim();
    const theme = themeSelect.value;
    
    localStorage.setItem('username', username);
    localStorage.setItem('theme', theme);
    
    applyTheme(theme);
    
    // Show confirmation with animation
    animatedElement.textContent = `Theme saved, ${username || 'Gloria!😊'}!`;
    animatedElement.classList.remove('animate', 'pulse');
    void animatedElement.offsetWidth; // Trigger reflow
    animatedElement.classList.add('animate');
    
    // After bounce animation, start pulsing
    setTimeout(() => {
        animatedElement.classList.remove('animate');
        animatedElement.classList.add('pulse');
    }, 2000);
}

// Apply theme to the page
function applyTheme(theme) {
    // Remove all theme classes first
    document.body.classList.remove('light', 'dark', 'blue', 'green');
    
    // Add the selected theme class
    if (theme) {
        document.body.classList.add(theme);
    }
}

// Trigger custom animation
function triggerAnimation() {
    // Reset any ongoing animations
    animatedElement.classList.remove('animate', 'pulse');
    void animatedElement.offsetWidth; // Trigger reflow
    
    // Apply the animation
    animatedElement.classList.add('animate');
    
    // After the animation ends, remove the class
    setTimeout(() => {
        animatedElement.classList.remove('animate');
    }, 2000);
}

// Event Listeners
savePrefsBtn.addEventListener('click', savePreferences);
animateBtn.addEventListener('click', triggerAnimation);

// Initialize the page
loadPreferences();