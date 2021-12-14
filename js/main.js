window.onload = function() {
    var nav = document.getElementsByClassName("nav-button-container")[0];
    var navOffset = nav.offsetTop;
    var dividers = document.getElementsByClassName("infosection");
    RotationalDivider(dividers);

    window.onscroll = function() {
        stickyNavbar(nav, navOffset);
    };

    window.onresize = function() {
        RotationalDivider(dividers);
    };
};

function RotationalDivider(dividers) {
    var height = window.getComputedStyle(document.getElementsByClassName("infosection")[0], "::before").height.slice(0, -2);
    var width = window.getComputedStyle(document.getElementsByClassName("infosection")[0], "::before").width.slice(0, -2);
    var newRotate = Math.atan(height / width) * 180 / Math.PI;

    for (let i = 0; i < dividers.length; i++) {
        dividers[i].style.setProperty('--divider-rotation', newRotate + "deg");
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
    window.scrollTo(0, 0);

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("hidden");
    }

    for (let i = 0; i < pages.length; i++) {
        if (i != pageIndex) {
            pages[i].classList.add("hidden");
        }
    }
}