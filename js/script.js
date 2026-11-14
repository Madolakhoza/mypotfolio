
// =================================
// 1. SELECT HTML ELEMENTS
// =================================

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


// =================================
// 2. MOBILE NAVIGATION MENU
// =================================

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        // Open or close the navigation menu
        const isOpen = navLinks.classList.toggle("open");

        // Update the accessibility status
        menuToggle.setAttribute("aria-expanded", isOpen);

        // Change the menu icon
        menuToggle.textContent = isOpen ? "Close" : "Menu";

    });


    // =================================
    // 3. CLOSE MENU AFTER CLICKING A LINK
    // =================================

    navLinks.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "Menu";

        });

    });

}


// =================================
// 4. AUTOMATIC COPYRIGHT YEAR
// =================================

const yearElement = document.querySelector("#year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// =================================
// 5. CONSOLE MESSAGE
// =================================

console.log("Welcome to my personal portfolio!");
