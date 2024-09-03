(function ($) {
    $.fn.countdownTimer = function (options) {
        var settings = $.extend({
            targetDate: new Date(), 
            format: "dd hh:mm:ss",
            callback: function () {},
        }, options);
        
        return this.each(function () {
            var $this = $(this);
            var timerInterval;
            var days, hours, minutes, seconds;
            function updateTimer() {
                var now = new Date();
                var timeDifference = settings.targetDate - now;
                
                if (timeDifference <= 0) {
                    clearInterval(timerInterval);
                    var formattedTime = settings.format.replace("dd", 0).replace("hh", 0).replace("mm", 0).replace("ss", 0);
                    $this.text(formattedTime);
                    settings.callback();
                    return;
                }

                days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                var formattedTime = settings.format.replace("dd", days).replace("hh", hours).replace("mm", minutes).replace("ss", seconds);
                $this.text(formattedTime);
            }

            // Start the timer initially
            updateTimer();
            
            // Set up the timer interval
            timerInterval = setInterval(updateTimer, 1000);
        });
    };
})(jQuery);