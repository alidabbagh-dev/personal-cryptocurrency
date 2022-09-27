var slider_bullets = document.querySelectorAll(".testimonials__slider-bullet");

function autoSlider(slides_count , time) {
    var counter = 0;
    setInterval(function () {
        slider_bullets[counter].click();
        counter++;
        if (counter == slides_count) {
            counter = 0;
        }
    },time)
}

function showSlides() {
    slider_bullets.forEach((item) => {
        item.addEventListener("click", function () {
            slider_bullets.forEach((link) => {
                if (link.classList.contains("testimonials__slider-bullet--active")) {
                    link.classList.remove("testimonials__slider-bullet--active");
                }
            })
            item.classList.add("testimonials__slider-bullet--active");
            var testimonials = document.querySelectorAll(".testimonial");
        
            for (var i = 0; i < testimonials.length; i++) {
                if (this.dataset.testimonial == testimonials[i].id) {
                
                    testimonials[i].classList.add("testimonial--active");
                } else {
                    testimonials[i].classList.remove("testimonial--active");
                }
            }
        })
    })
}

function clearSearchValue() {
    document.querySelector("#search").value = "";
}

function searchModal() {
    var modal = document.querySelector(".modal");
    var modal_close = document.querySelector(".modal__close");
    var search_icon = document.querySelector("#search-icon");
    modal_close.addEventListener("click", function () {
        modal.style.display = "none";
        clearSearchValue();
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            clearSearchValue();
        }
    }

    search_icon.addEventListener("click", function () {
        modal.style.display = "flex";/*showing modal when clicking on search icon*/
        clearSearchValue();
    });

}


function toggleNavbar() {
    document.querySelector(".navbar__toggler").addEventListener("click", function () {
        document.querySelector(".navbar__content").classList.toggle("navbar--expanded");
    });
}
searchModal();
autoSlider(3 , 3000);
showSlides();
toggleNavbar();