if (document.createElement('audio').canPlayType) {
    if (!document.createElement('audio').canPlayType('audio/mpeg')) {
        var all_audio = $('audio');
        all_audio.attr("style", "display: none;");
    }
}

var transition = function(d) {
    return "-webkit-transition: width " + d + "s linear !important;" +
        "-moz-transition: width " + d + "s linear !important;" +
        "-o-transition: width " + d + "s linear !important;" +
        "transition: width " + d + "s linear !important;";
};

$('a.audio_play').click(function() {
    var audioLink = $(this),
        audio = this.firstChild;

    if (!audioLink.hasClass('can_play')) {
        audioLink.addClass('can_play');
    }

    audio.addEventListener('ended', canPlay(audio, audioLink));
});


var canPlay = function(audio, audioLink) {
    audio.addEventListener('ended', function () {
        audio.currentTime = 0;
    });

    audio_play.toggleClass('play');
    if (audio.paused === false) {
        audio.pause();
    } else {
        audio.play();
    }
};
