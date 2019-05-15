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

window.addEventListener('scroll', function() {
  let mulah = document.getElementsByClassName('spooky')
  if(window.scrollY >= 1) {
    mulah[0].classList.remove('hidden')
    mulah[0].classList.add('show')
  }
  if(window.scrollY >= 165) {
    mulah[1].classList.remove('hidden')
    mulah[1].classList.add('show')
  }
  if(window.scrollY >= 330) {
    mulah[2].classList.remove('hidden')
    mulah[2].classList.add('show')
  }
  if(window.scrollY >= 450) {
    mulah[3].classList.remove('hidden')
    mulah[3].classList.add('show')
  }
  if(window.scrollY >= 700) {
    mulah[4].classList.remove('hidden')
    mulah[4].classList.add('show')
  }
  if(window.scrollY >= 1000) {
    mulah[5].classList.remove('hidden')
    mulah[5].classList.add('show')
  }
  if(window.scrollY >= 1300) {
    mulah[6].classList.remove('hidden')
    mulah[6].classList.add('show')
  }
  if(window.scrollY >= 1500) {
    mulah[7].classList.remove('hidden')
    mulah[7].classList.add('show')
  }
})
