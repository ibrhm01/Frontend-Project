$(document).ready(function () {
    //frequently-asked-questions accordion

    $(".frequently-asked-questions-questions button").click(function () {
        $(this).next().slideToggle();
        $(".frequently-asked-questions-questions button").not(this).next().slideUp();
    });


    //cloud-services accordion

    $(".cloud-services-text-list .list-1 li").click(function () {
        $(this).next().slideToggle();
        $(".cloud-services-text-list .list-1 li").not(this).next().slideUp();
    });
    $(".cloud-services-text-list .list-2 li").click(function () {
        $(this).next().slideToggle();
        $(".cloud-services-text-list .list-2 li").not(this).next().slideUp();
    });


    //design-development accordion

    $(".design-development-text-list .list-1 li").click(function () {
        $(this).next().slideToggle();
        $(".design-development-text-list .list-1 li").not(this).next().slideUp();
    });
    $(".design-development-text-list .list-2 li").click(function () {
        $(this).next().slideToggle();
        $(".design-development-text-list .list-2 li").not(this).next().slideUp();
    });

    //header-background-change
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 30) {
            $("header").addClass("active");
        } else {
            $("header").removeClass("active");
        }
    });
    //popup
    const imagesOnGallery = document.querySelectorAll(".gallery a");
    const popup = document.querySelector(".popup");
    const closeIcon = document.querySelector(".close-icon")
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    const biggerImage = document.querySelector(".slider img");

    let firstIntervalFunc;
    imagesOnGallery.forEach((image) => {
        image.addEventListener("click", function (e) {
            e.preventDefault();
            popup.style.display = "block";
            let imgSrc = this.getAttribute("href");
            biggerImage.setAttribute("src", imgSrc);
            this.classList.add("show-slider");
            // sliderInterval=setInterval(nextSlideFunc,5000);
        });
    });


    function nextSlideFunc() {
        let currentElement = document.querySelector(".show-slider");

        let changeableAttribute;
        if (currentElement.parentElement.parentElement.nextElementSibling) {
            currentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].classList.add("show-slider");
            changeableAttribute = currentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].getAttribute("href");
        }
        else {
            currentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].classList.add("show-slider");
            changeableAttribute = currentElement.parentElement.parentElement.parentElement.children[0].children[0].children[0].getAttribute("href");
        }
        currentElement.classList.remove("show-slider");
        biggerImage.setAttribute("src", changeableAttribute);

    }

    function previousSlideFunc() {
        let currentElement = document.querySelector(".show-slider");
        let changeableAttribute;

        if (currentElement.parentElement.parentElement.previousElementSibling) {
            changeableAttribute = currentElement.parentElement.parentElement.previousElementSibling.children[0].children[0].getAttribute("href");
            currentElement.parentElement.parentElement.previousElementSibling.children[0].children[0].classList.add("show-slider");
        }
        else {
            changeableAttribute = currentElement.parentElement.parentElement.parentElement.lastElementChild.children[0].children[0].getAttribute("href");
            currentElement.parentElement.parentElement.parentElement.lastElementChild.children[0].children[0].classList.add("show-slider");
        }
        currentElement.classList.remove("show-slider");
        biggerImage.setAttribute("src", changeableAttribute);
    }

    nextBtn.addEventListener("click", () => {
        nextSlideFunc();
    });

    prevBtn.addEventListener("click", () => {
        previousSlideFunc();
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup")) {
            popup.style.display = "none";
            // clearInterval(sliderInterval);
        }
    });
    closeIcon.addEventListener("click", () => {
        // clearInterval(sliderInterval);
        popup.style.display = "none";
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            popup.style.display = "none";
            // clearInterval(sliderInterval);
        }
        if (e.key === "ArrowLeft") {
            previousSlideFunc();
        }
        if (e.key === "ArrowRight") {
            nextSlideFunc();
        }
    });
    //popup
});

