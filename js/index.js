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

    // header-background-change
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
    const biggerImage = document.querySelector(".slider img");

    $(".gallery a").on("click", function (e) {
        e.preventDefault();
        popup.style.display = "block";
        let imgSrc = this.getAttribute("href");
        biggerImage.setAttribute("src", imgSrc);
        this.classList.add("show-slider");
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

    $(".next").on("click", () => {
        nextSlideFunc();
    });

    $(".prev").on("click", () => {
        previousSlideFunc();
    });

    $(document).on("click", (e) => {
        if (e.target.classList.contains("popup")) {
            popup.style.display = "none";
        }
    });

    $(".close-icon").on("click", () => {
        popup.style.display = "none";
    });

    $(document).on("keydown", (e) => {
        if (e.key === "Escape") {
            popup.style.display = "none";
        }
        if (e.key === "ArrowLeft") {
            previousSlideFunc();
        }
        if (e.key === "ArrowRight") {
            nextSlideFunc();
        }
    });
//     //popup



});
//comments
const inputs = document.querySelectorAll(".post-comment input")

// const statusOfUser = document.querySelector("select");
const submitBtn = document.querySelector(".submit-comment");
// const showMembersBtn = document.querySelector("#inputs .display")
const comments = document.querySelector(".comments");

// const inputsSection = document.querySelector("#inputs");
const errorMessages = document.querySelectorAll(".post-comment p");
const noComment = document.querySelector(".no-comment");
let arr = [];

function setUser(data) {
    fetch("https://63635c9e66f75177ea427f02.mockapi.io/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputs[0].value.trim().length === 0) {
        errorMessages[0].classList.remove("d-none")
    }
    else {
        errorMessages[0].classList.add("d-none")
    }

    if (inputs[1].value.trim().length === 0 || !inputs[1].value.includes("@")) {
        errorMessages[1].classList.remove("d-none")
    }
    else {
        errorMessages[1].classList.add("d-none")
    }

    if (inputs[2].value.trim().length === 0) {
        errorMessages[2].classList.remove("d-none")
    }
    else {
        errorMessages[2].classList.add("d-none")
    }


    if (errorMessages[0].classList.contains("d-none") &&
        errorMessages[1].classList.contains("d-none") &&
        errorMessages[2].classList.contains("d-none")) {
        const setter = {
            name: inputs[0].value,
            eMail: inputs[1].value,
            text: inputs[2].value,
        };
        setUser(setter);
        inputs[0].value = "";
        inputs[1].value = "";
        inputs[2].value = "";
    }
});


setInterval(fetchData,1000);


function fetchData() {
    const fetched = fetch("https://63635c9e66f75177ea427f02.mockapi.io/comments");
    fetched.then((response) => response.json()).then((data) => {
        arr = data;
        console.log(arr);
        
        if (arr.length !== 0) {
            comments.innerHTML = `<p class="comments-heading">Comments (${arr.length})</p>`;
            noComment.classList.add("d-none");
            arr.forEach((comment) => {
                comments.innerHTML += `
                <div class="comment">
                                <div class="row">
                                    <div class="col-2">
                                        <div class="comment-img">
                                            <img src="./assets/images/comment-avatar.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-10">
                                        <div class="comment-text">
                                            <p class="name">${comment.name}</p>
                                            <span>09 APR 2018</span>
                                            <button class="btn"><a href="./blog-single.html"><i class="fa-solid fa-reply"></i> Reply</a></button>
                                            <p>${comment.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`
            });


        }
        else {
            noComment.classList.remove("d-none");
        }
    });
}




//comments





