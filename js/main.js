window.onload = function() {
    var nav = document.getElementsByClassName("nav-button-container")[0];
    var navOffset = nav.offsetTop;
    var dividers = document.getElementsByClassName("divider-rot-left");

    window.onscroll = function() {
        stickyNavbar(nav, navOffset);
    };

    window.onresize = function() {
        RotationalDivider(dividers);
    };
};

function RotationalDivider(dividers) {
    var newRotate = Math.atan(dividers[0].clientHeight / dividers[0].clientWidth) * 180 / Math.PI;

    for (let i = 0; i < dividers.length; i++) {
        dividers[i].style = "rotate: " + newRotate + "deg;";
    }
}

function stickyNavbar(nav, navOffset) {
    if (window.pageYOffset >= navOffset) {
        nav.classList.add("nav-fixed-pos")
    } else {
        nav.classList.remove("nav-fixed-pos");
    }
}

function SwitchPage(pageIndex) {
    var pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("hidden");
    }

    for (let i = 0; i < pages.length; i++) {
        if (i != pageIndex) {
            pages[i].classList.add("hidden");
        }
    }
}