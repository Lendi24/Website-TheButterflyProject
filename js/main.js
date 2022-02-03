window.onload = function() {
    var nav = document.getElementsByClassName("nav-button-container")[0];
    var navOffset = nav.offsetTop;
    console.log(navOffset);
    var dividers = document.getElementsByClassName("infosection");
    RotationalDivider(dividers);
    ModifyDownloadButton();

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
    var buttons = document.getElementsByClassName("nav-button");
    window.scrollTo(0, 0);

    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("hidden");
        buttons[i].classList.remove("active");
    }

    for (let i = 0; i < pages.length; i++) {
        if (i != pageIndex) {
            pages[i].classList.add("hidden");
        }
        else {
            buttons[i].classList.add("active");
        }
    }
}

function ModifyDownloadButton(){
    var buttonCont = document.getElementsByClassName("download-container")[0];
    var hostOS;
    var downloadLink;

    //Is it windows?
    if (navigator.appVersion.indexOf("Win") != -1) {
        hostOS = "Windows 🪟"; 
        downloadLink= "https://github.com/Lendi24/TheButterflyProject/releases/download/alpha/windows-TheButterflyProject.zip";
    }

    //Is it macos?
    else if (navigator.appVersion.indexOf("Mac") != -1) {
        hostOS = "MacOS 🍎";
        downloadLink = "https://m.youtube.com/watch?v=mOYZaiDZ7BM";
    }

    //Skipping ios since there is no download for it

    //Is it some sort of linux
    else if (navigator.appVersion.indexOf("Android") != -1) { 
        hostOS = "Android 🤖"; 
        downloadLink ="https://github.com/Lendi24/TheButterflyProject/releases/download/alpha/android-TheButterflyProject.apk"; 
    }
    else if (navigator.appVersion.indexOf("Ubuntu") != -1) {
        hostOS = "Ubuntu 🐧";
        downloadLink = "https://github.com/Lendi24/TheButterflyProject/releases/download/alpha/linux-TheButterflyProject.zip";
    }
    else if (navigator.appVersion.indexOf("Manjaro") != -1) {
        hostOS = "Manjaro 🐧";
        downloadLink = "https://github.com/Lendi24/TheButterflyProject/releases/download/alpha/linux-TheButterflyProject.zip";
    }

    else if (navigator.appVersion.indexOf("Linux") != -1) {
        hostOS = "Linux 🐧";
        downloadLink = "https://github.com/Lendi24/TheButterflyProject/releases/download/alpha/linux-TheButterflyProject.zip";

    } 
    //There is no download for bsd either...

    if (hostOS != undefined) {
        buttonCont.innerHTML = 
        '<div class="big-button button" id="page-home-download-button" onclick="window.location='+"'"+downloadLink+"'"+'">'+
            '<p>Download for '+hostOS+'</p>'+
        '</div>'+
        '<a onclick="SwitchPage(1)">Download for another OS</a>'
    }
}