window.onload = function() {
    window.onscroll = function() {stickyNavbar()};

    var nav = document.getElementsByClassName("nav-button-container")[0];
    var navOffset = nav.offsetTop;
    
    function stickyNavbar() {
      if (window.pageYOffset >= navOffset) {
        nav.classList.add("nav-fixed-pos")
      } else {
        nav.classList.remove("nav-fixed-pos");
      }
    }
};

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
