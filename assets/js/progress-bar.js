/*
    Creates a progress bar that ends in the center.
    Daniel Orlovsky

    See readme.md for usage.
*/




var leftBarBegin = 0;
var rightBarBegin = 100;

function CenterProgressBar(selector, color, inc) {
    leftBarBegin = 0;
    rightBarBegin = 100;
    this.increment = inc;
    this.selector = selector;
    $(this.selector).empty();
    this.progressWrapper = $("<div id='progress-wrapper'></div>");
    this.leftWrapper = $("<div id='left-wrapper'></div>");
    this.rightWrapper = $("<div id='right-wrapper'></div>");
    this.progressWrapper.css({
        width: "100%",
        height: "100%",
    })
    this.progressWrapper.append(this.leftWrapper).append(this.rightWrapper);
    this.leftWrapper.css( {
        "overflow": "hidden",
        background: color,
        float: "left",
        width: "50%",
        height: "100%",
    });
    this.leftProgress = $("<div id='left-progress'></div>");
    this.rightWrapper.css({
        float: "right",
        background: $(selector).css("background"),
        width: "50%",
        height: "100%",   
    });
    this.rightProgress = $("<div id='right-progress'></div>");
    this.rightProgress.css({
        background: color,
        width: 0,
        height: "100%",
    });
    
    this.leftProgress.css({
        background: $(this.rightWrapper).css("background"),
        height: "100%",
        width: "100%",
    });
    this.leftProgress.css("width", leftBarBegin + "%");
    this.rightProgress.css("width", rightBarBegin + "%");
    this.leftWrapper.append(this.leftProgress);
    this.rightWrapper.append(this.rightProgress);
    $(this.selector).append(this.progressWrapper);
    
}

CenterProgressBar.prototype = {
    advanceProgressBar: function(callback) {
        leftBarBegin += this.increment;
        rightBarBegin -= this.increment;
        this.leftProgress.css("width", leftBarBegin + "%");
        this.rightProgress.css("width", rightBarBegin + "%");
        if(leftBarBegin >= 100 && rightBarBegin <= 0) {
            if(!callback) {
                return;
            } 
            callback();
        }   
    },
    reset: function() {
        alert("RESET!");
    }
}
