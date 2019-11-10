$(() => {
    $('.navbar a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top - 50;

        $('html, body').animate({
            scrollTop: targetOffset
        }, 500);
    });
    function deferVideo() {
        //defer html5 video loading
        $("video source").each(function () {
            var sourceFile = $(this).attr("data-src");
            $(this).attr("src", sourceFile);
            var video = this.parentElement;
            video.load();
            // uncomment if video is not autoplay
            //video.play();
        });
    }
    window.onload = deferVideo;
})