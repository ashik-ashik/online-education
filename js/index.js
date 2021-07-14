
// Normal some Script

// change menu bar color while scrolling

let header = document.querySelector('#header');

window.onscroll = function(){
  let top = window.scrollY;
  if(top < 150){
    header.classList.remove('scrolled');
  }else{
    header.classList.add('scrolled')
  }
}
