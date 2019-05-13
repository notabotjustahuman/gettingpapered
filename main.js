window.onscroll = function() {yeehaw()}

let navbar = document.getElementById("navbar")
let sticky = navbar.offsetTop

function yeehaw() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky")
  }
}
