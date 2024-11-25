let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");
video.currentTime = 30;


document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById("myVideo");
  video.max = 40;
  
  video.addEventListener('timeupdate', function() {
    if (this.currentTime >= this.max) {
      this.pause();
    }
  });
});

function RR() {
if (video.paused) {
		video.play();
		btn.innerHTML = "Stop Rolling";
	} else {
		video.pause();
		btn.innerHTML = "Start Rolling";
	}
}
