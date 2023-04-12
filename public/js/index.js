window.onscroll = function() {scrollFunction()};
const estado = true;

function scrollFunction() {
  if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
    document.getElementById("navbar").classList.add('scroll')
    document.getElementById("navbar").classList.add('scroll_fade')

  } else {
    document.getElementById("navbar").classList.remove('scroll')
  }
}