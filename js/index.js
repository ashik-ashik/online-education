
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


// video play
let video = document.querySelector('#differ-video');
let playVideo = document.querySelector('.video #play-video');

playVideo.addEventListener('click',function(){
    if(video.paused){
        video.play();
        playVideo.classList.remove('bx-play');
        playVideo.classList.add('bx-pause');
    }else{
        video.pause();
        playVideo.classList.remove('bx-pause');
        playVideo.classList.add('bx-play');
    }
    playVideo.classList.add('active')
});