window.onscroll = function() {scrollIt()}

function scrollIt() {
  if (document.body.scrollTop > 250 ||
    document.documentElement.scrollTop > 250) {
      document.getElementById('myBtn').style.display = "block"
    } else {
      document.getElementById('myBtn').style.display = "none"
    }
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
