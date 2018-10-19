window.onload = () => {
  setTimeout(function () {
    const preload = document.getElementById('preload');
    const page = document.getElementById('page');
    preload.style.display = 'none';
    page.style.display = 'block';
  }, 5000);
}

// Writing effect
let i = 0;
let text = "Front-End Developer...";

function typing() {
  if (i < text.length) {
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 70);
  }
}
typing();


$(document).ready(function () {
  //Navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('nav').addClass('grey darken-4');
    } else {
      $('nav').removeClass('grey darken-4');
    }
  })
  // Floating Action Button
  $('.fixed-action-btn').floatingActionButton();

  // Tooltip button
  $('.tooltipped').tooltip();

  // Aniview
  $('.aniview').AniView();
  //Options
  var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
  }
  $('.aniview').AniView(options);
});



