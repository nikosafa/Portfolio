//Note links:
// https://www.youtube.com/watch?v=JYgKmCIB53c
//https://www.geeksforgeeks.org/java-swing-jtogglebutton-class/
//https://www.w3schools.com/jsref/met_element_addeventlistener.asp

// DOM elementer
const lightModeToggle = document.getElementById('lightModeToggle');
const body = document.body;
const header = document.querySelector('header'); // Vælger header elementet

// Tilføjer event listener til knappen
lightModeToggle.addEventListener('click', () => {
    // Skifer knappens lys tilstand på både body og header
    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');

    // Opdater knappens tekst baseret på den aktuelle tilstand
    if (body.classList.contains('light-mode')) {
        lightModeToggle.textContent = 'Dark Mode';
    } else {
        lightModeToggle.textContent = 'Light Mode';
    }
});
