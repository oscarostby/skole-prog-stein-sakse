function toggleRules() {
    var rulesSection = document.getElementById("rules");
    if (rulesSection.style.display === "none") {
        rulesSection.style.display = "block";
        var targetPosition = rulesSection.offsetTop;
        var currentPosition = window.pageYOffset;
        var distance = targetPosition - currentPosition;
        var duration = 1000;
        var start = null;
        function scroll(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            var percentage = Math.min(progress / duration, 1);
            window.scrollTo(0, currentPosition + (distance * percentage));
            if (progress < duration) {
                requestAnimationFrame(scroll);
            }
        }
        requestAnimationFrame(scroll);
    } else {
        rulesSection.style.display = "none";
    }
}



function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}


function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


function toggleMenu() {
    var menu = document.querySelector(".responsive-menu");
    var menuToggle = document.querySelector(".menu-toggle img");

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        menuToggle.src = "/Images/menu.png";
    } else {
        menu.classList.add("active");
        menuToggle.src = "/Images/close.png";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var video = document.querySelector(".video-box video");

    video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.play();
    });

    video.play();

    // Toggle menu on window resize
    window.addEventListener("resize", function () {
        var menu = document.querySelector(".responsive-menu");
        var menuToggle = document.querySelector(".menu-toggle img");

        if (window.innerWidth > 900) {
            menu.classList.remove("active");
            menuToggle.src = "menu.png";
        }
    });

    // Auto close menu when clicking on menu items
    var menuItems = document.querySelectorAll(".responsive-menu a");
    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            var menu = document.querySelector(".responsive-menu");
            var menuToggle = document.querySelector(".menu-toggle img");

            menu.classList.remove("active");
            menuToggle.src = "menu.png";
        });
    });
});
