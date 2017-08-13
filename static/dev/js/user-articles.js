var UserArticlesController = (function ($) {
    return {
        load: function () {
            UserArticlesController.Load.init();
        }
    };
}(jQuery));

UserArticlesController.Load = (function ($) {

    var attachEvents = function () {
      
        /*
         * Load More Articles on My Post Page
         */
        $('.loadMoreMyArticles').on('click', function (e) {
            e.preventDefault();
            var btnObj = $(this);
            
            var page = parseInt($('.LoadMyArticles').data('page'));
            if (isNaN(page) || page < 0) {
               page = 1;
            }

            $.fn.loadMoreAuthUserArticles({
                offset: page,
                onSuccess: function (data, textStatus, jqXHR) {
                    if (data.success == 1) {
                        if (data.articles.length < 20) {
                            $(btnObj).css('display', 'none');
                        }
                        for (var i in data.articles) {
                            
                            data.articles[i]['containerClass'] = 'col-12 col-md-6 col-lg-3';
                            data.articles[i]['templatePath'] = _appJsConfig.templatePath;
                           
                            var ImageUrl = $.fn.image({media:data.articles[i]['featuredMedia'], mediaOptions:{width: 570 ,height:470, crop: 'limit'} });
                            data.articles[i]['imageUrl'] = ImageUrl;
                            
                            Handlebars.registerHelper('encode', function(options) {
                                return encodeURIComponent(options.fn(this));
                            });
                            
                            var articleTemplate = Handlebars.compile(systemCardTemplate);
                            var article = articleTemplate(data.articles[i]);
                            $('.LoadMyArticles').append(article);
                        }
                    }
                },
                beforeSend: function (jqXHR, settings) {
                    $(btnObj).html("Please wait...");
                },
                onComplete: function (jqXHR, textStatus) {
                    $(btnObj).html("Load More");
                }
            });
        });
        
    };
    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));


