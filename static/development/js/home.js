var HomeController = (function ($) {
    return {
        article: function () {
            HomeController.Article.init();
        }
    };
}(jQuery));

HomeController.Article = (function ($) {

    var attachEvents = function () {
        var fancyGallery = $("#articleImages").find("a");
        fancyGallery.attr("rel","gallery").fancybox({
            type: "image"
        });
        $('.imageModal').on('click', function() {
            fancyGallery.eq(0).click(); 
        });
    };

    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));