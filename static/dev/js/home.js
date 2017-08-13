var HomeController = (function ($) {
    return {
        article: function () {
            HomeController.Article.init();
        }
    };
}(jQuery));

HomeController.Article = (function ($) {

    var attachEvents = function () {
       $('.imageModal').on('click', function(){
          $('#articleImages').find('a').eq(0).click(); 
       });
    };

    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));