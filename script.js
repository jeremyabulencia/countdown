(function ($) {
    $.fn.countdownTimer = function (options) {
        var settings = $.extend({
            targetDate: new Date(),
            border: "1px solid black",
            fontStyle: "Arial",
            fontColor: "black",
            numFontSize: "10px",
            labelFontSize: "5px",
            callback: function () {},
        }, options);
        
        return this.each(function () {
            var $this = $(this);
            var timerInterval;
            var days, hours, minutes, seconds;
            
            htmlElem = "<ul>"+
                "<li><span id='dd' class='nums'></span><span class='label'>DAYS</span></li>"+
                "<li><span id='hh' class='nums'></span><span class='label'>HOURS</span></li>"+
                "<li><span id='mm' class='nums'></span><span class='label'>MINUTES</span></li>"+
                "<li><span id='ss' class='nums'></span><span class='label'>SECONDS</span></li>"+
            "</ul>";
            $this.append(htmlElem);

            $('li').css('font-style', settings.fontStyle);
            $('li').css('color', settings.fontColor);
            $("li .nums").css('border', settings.border);
            $("li .nums").css('font-size', settings.numFontSize);
            $("li .label").css('font-size', settings.labelFontSize);
            
            function updateTimer() {
                var now = new Date();
                var timeDifference = settings.targetDate - now;
                
                if (timeDifference <= 0) {
                    clearInterval(timerInterval);
                    $('#dd').text(0);
                    $('#hh').text(0);
                    $('#mm').text(0);
                    $('#ss').text(0);
                    settings.callback();
                    return;
                }

                days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                
                $('#dd').text(days);
                $('#hh').text(hours);
                $('#mm').text(minutes);
                $('#ss').text(seconds);
            }

            // Start the timer initially
            updateTimer();
            
            // Set up the timer interval
            timerInterval = setInterval(updateTimer, 1000);
        });
    };
})(jQuery);