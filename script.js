// https://www.youtube.com/watch?v=JYgKmCIB53c
//https://www.geeksforgeeks.org/java-swing-jtogglebutton-class/

// DOM elements
const lightModeToggle = document.getElementById('lightModeToggle');
const body = document.body;
const header = document.querySelector('header'); // Select the header element

// Add event listener to the button
lightModeToggle.addEventListener('click', () => {
    // Toggle the light mode class on both body and header
    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode'); // Add this line to toggle header styles

    // Update the toggle button text based on the current mode
    if (body.classList.contains('light-mode')) {
        lightModeToggle.textContent = 'Dark Mode';
    } else {
        lightModeToggle.textContent = 'Light Mode';
    }
});
