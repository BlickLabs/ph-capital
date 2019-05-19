var last_known_scroll_position = 0;
var ticking = false;

var siteNavbar = document.querySelector('.navbar');
var forced_color = false

function doSomething(scroll_pos) {
  if (scroll_pos > 30) {
    siteNavbar.classList.add('navbar-scroll');

  } else {
    if (!forced_color) {
      siteNavbar.classList.remove('navbar-scroll');
    }
  }
}

doSomething();

window.addEventListener('scroll', function(e) {
  if (e.view) {
    last_known_scroll_position = e.view.pageYOffset;
  }
  else {
    last_known_scroll_position = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false
    });
  }
  ticking = true;
});

function showMenu() {
  var menuWith = document.querySelector('#menuContainer').style.width;
  if (menuWith === '85%') {
    document.querySelector('#menuContainer').style.width = '0%';

  } else {
    document.querySelector('#menuContainer').style.width = '85%';
    siteNavbar.classList.add('navbar-scroll');
    forced_color = true
  }
}

function hideMenu() {
  document.querySelector('#menuContainer').style.width = '0%';
}

window.addEventListener('click', function(e) {
  if (!e.target.dataset.hasOwnProperty('attribute')) {
    hideMenu();
  }
});

/*Events of touchstart to mobile version*/

var showHamburger = document.querySelector('#hamburgerMenu');

showHamburger.addEventListener('touchstart', function(e) {
  e.preventDefault();
  showMenu();
});

/* Events of click to desktop version*/

showHamburger.addEventListener('click', function(e) {
  e.preventDefault();
  showMenu();
});
