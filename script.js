document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll back to planets list
    const backButtons = document.querySelectorAll(".back-button");

    backButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("href");
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Add hover effect to planets on homepage
    const planets = document.querySelectorAll(".planet");

    planets.forEach(planet => {
        planet.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });

        planet.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.transition = "transform 0.3s ease";
        });
    });

    // Page transition effect when navigating between planet pages
    const links = document.querySelectorAll(".planet");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetUrl = this.getAttribute("onclick").match(/window\.location\.href='([^']*)'/)[1];
            fadeOutPage(() => {
                window.location.href = targetUrl;
            });
        });
    });

    function fadeOutPage(callback) {
        document.body.style.transition = "opacity 0.5s ease-out";
        document.body.style.opacity = "0";
        setTimeout(callback, 500);
    }

    // Fade in when page loads
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease-in";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 10);
});
