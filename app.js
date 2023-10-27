// app.js

// Sample portfolio images
const portfolioImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Add more image file names
];

// Populate the portfolio section with images
function populatePortfolio() {
    const portfolioSection = document.getElementById("image-gallery");

    portfolioImages.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = `images/${image}`; // Assuming your images are in an "images" folder
        portfolioSection.appendChild(imgElement);
    });
}

// Dynamically create a contact form
function createContactForm() {
    const contactSection = document.getElementById("contact");

    const form = document.createElement("form");
    form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br>

        <input type="submit" value="Send">
    `;

    contactSection.appendChild(form);
}

// Initialize functions on page load
window.addEventListener("DOMContentLoaded", () => {
    populatePortfolio();
    createContactForm();
});
