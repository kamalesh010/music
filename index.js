var audio = new Audio("frequency-of-sleep-meditation-113050 (mp3cut.net) (4).mp3");
$(".icon").on('click', function () {
    if (audio.paused || audio.currentTime <= 0) {
        $(".icon").attr("src","pause.png");
         audio.play();

    } else {
        $(".icon").attr("src","play.png");
        audio.pause();
    }
});