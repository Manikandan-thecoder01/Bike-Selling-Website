// Function to add a bike to the cart
function addToCart(bikeName) {
    alert(bikeName + " has been added to your cart!");
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Handle login form submission
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            alert("Welcome, " + username + "!");
        });
    }

    // Handle light/dark mode toggle
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            localStorage.setItem(
                "theme",
                document.body.classList.contains("light-mode") ? "light" : "dark"
            );
        });

        // Load saved theme preference
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.add("light-mode");
        }
    }
});
