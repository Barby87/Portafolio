window.onload = () => {
	setTimeout(function(){
    const preload = document.getElementById('preload');
    const page = document.getElementById('page');
    preload.style.display = 'none';
    page.style.display = 'block';
  },5000);
}

// Efecto escritura
let i = 0;
let text = "Front-End Developer...";

function typing() {
  if(i<text.length) {
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,70);
  }
}

typing();


$(document).ready(function () {
  //Navbar
  $(window).scroll(function(){
    if($(window). scrollTop()>300){
      $('nav').addClass('red');
    }else{
      $('nav').removeClass('red');
    }
  })
  // Floating Action Button
  $('.fixed-action-btn').floatingActionButton();
  
  //Tooltip button
  $('.tooltipped').tooltip();


});


      
