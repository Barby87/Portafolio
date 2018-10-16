window.onload = () => {
	setTimeout(function(){
    const preload = document.getElementById('preload');
    const page = document.getElementById('page');
    preload.style.display = 'none';
    page.style.display = 'block';
  },5000);
}

// Efecto escritura
var i = 0;
var text = "Front-End Developer";

function typing() {
  if(i<text.length) {
    document.getElementById('text').innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,70);
  }
}

typing();


// Menú lateral
$(document).ready(function () {
  $('.sidenav').sidenav();
});

// Floating Action Button
$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});
      
