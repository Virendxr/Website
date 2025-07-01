        let darkmode = localStorage.getItem('darkmode');
        const themeSwitch = document.getElementById("theme-switch");

        const enableDarkmode = () => {
            document.body.classList.add('darkmode');
            localStorage.setItem('darkmode','active');
        } 

        const disableDarkmode = () => {
            document.body.classList.remove('darkmode');
            localStorage.setItem('darkmode', null);
        }         

        if(darkmode === "active") enableDarkmode();

        themeSwitch.addEventListener("click", () => {
            darkmode = localStorage.getItem('darkmode');
            darkmode !== "active" ? enableDarkmode() : disableDarkmode()
        })

        document.addEventListener("DOMContentLoaded", function () {
            var typed = new Typed(".typed", {
            strings: document.querySelector(".typed").getAttribute("data-typed-items").split(", "),
            typeSpeed: 160,
            backSpeed: 100,
            loop: true
            });
        });