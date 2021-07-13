
// Normal some Script

// change menu bar color while scrolling

let header = document.querySelector('#header');

window.onscroll = function(){
  let top = window.scrollY;
  if(top >= 150){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled')
  }
}
