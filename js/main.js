
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