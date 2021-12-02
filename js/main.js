window.onscroll = function() {stickyNavbar(), getContentPos()};

var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  }
}

function getContentPos(){
    var menuItems = (Array.prototype.slice.call(document.getElementById("topnav").childNodes)).filter(
      item => item.firstChild != null
    );
}
