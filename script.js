$(".stream-nav").on("click", function(){
        var allStreamsCardSelector = ".card";
        var thisStreamCardSelector = "." + this.id + "-card";
        $(allStreamsCardSelector).removeClass("card-highlight");
        $(thisStreamCardSelector).addClass("card-highlight");
});