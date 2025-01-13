/* --------------------------------------------------
     * progress bar
     * --------------------------------------------------*/
function lineProgress() {
    $('.line-progress:not([data-processed])').each(function() {
        var bar = $(this),
            line = bar.find(".progress-bar"),
            progressEnd = bar.data('percent'),
            percent = bar.find('.percent');
        var scrollTop = $(document).scrollTop() + $(window).height();

        if ( scrollTop >  bar.offset().top +  bar.height() ) {
            bar.attr("data-processed", "true");
            line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");

            for (var i = 0; i <= 50; i++) {
                (function (count) {
                    setTimeout(function () {
                        percent.html(Math.round((progressEnd / 50) * count) + "%");
                    }, 30 * count);
                })(i);
            }
        }
    });
};

/* line progress */
function lineProgressSize() {
    $('.line-progress[data-processed]').each(function () {
        var bar = $(this);
        var line = bar.find(".progress-bar");
        var progressEnd = parseInt(bar.data('percent'));

        line.css("width", (bar.outerWidth() * (progressEnd / 100)) + "px");
    
    });
}

/* circle progress */
function circleProgress() {
    $('.circle-progress:not([data-processed])').each(function() {
        var circle    = $(this),
            bar_color = circle.data('color'),
            bar_hei   = circle.data('height'),
            bar_size  = circle.data('size');
        var scrollTop = $(document).scrollTop() + $(window).height();
        if ( scrollTop >  circle.offset().top +  circle.height() ) {
            circle.attr("data-processed", "true");
            circle.find('.inner-bar').easyPieChart({
                barColor: bar_color,
                trackColor: false,
                scaleColor: false,
                lineCap: 'square',
                lineWidth: bar_hei,
                size: bar_size,
                animate: 1000,
                onStart: $.noop,
                onStop: $.noop,
                easing: 'easeOutBounce',
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent) + '%');
                }
            });
        }
    });
};

var progressBar = function () {
    lineProgress();
    circleProgress();
};
