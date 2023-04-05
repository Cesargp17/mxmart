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

function addClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    if (re.test(o.className)) return
    o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function removeClass(o, c){
    var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
    o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
}

function mobile_menu() {
    var element = document.getElementById("mobile_icon");
    var icon_element = document.getElementById("icon_menu_mobile");
    var div_element = document.getElementById("div_menu_mobile");
    element.classList.toggle("on");
    icon_element.classList.toggle("show");
    
    if(icon_element.querySelector("#icon_menu_mobile.show")){
      div_element.classList.toggle("show");
    } else {
      div_element.classList.toggle("show");
    }
}

function expand_a() {
  var x = document.getElementById("mobile-a");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function expand_b() {
  var x = document.getElementById("mobile-b");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function expand_c() {
  var x = document.getElementById("mobile-c");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function expand_d() {
  var x = document.getElementById("mobile-d");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function expand_e() {
  var x = document.getElementById("mobile-e");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function expand_f() {
  var x = document.getElementById("mobile-f");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let counterTheme = 0;

function dark_theme() {
  document.body.classList.toggle('dark_theme');

  if (counterTheme == 0) {
    localStorage.setItem('theme','dark');
    let localTheme = localStorage.getItem('theme');
    localTheme;
    counterTheme = 1;
  } else {
    localStorage.setItem('theme','default');
    let localTheme = localStorage.getItem('theme');
    localTheme;
    counterTheme = 0;
  }
}

/*
window.onload = function saludos() {
  if (localStorage.theme == "dark") {
      document.body.classList.add('dark_theme');
  }
  else {
      document.body.classList.remove('dark_theme');
  }
}

(function() { try {
  var mode = localStorage.getItem('theme-ui-color-mode');
  if (!mode) return
  document.body.classList.add('theme-ui-' + mode);
} catch (e) {} })();
*/