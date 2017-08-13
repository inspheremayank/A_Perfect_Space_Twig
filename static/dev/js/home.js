var HomeController = (function ($) {
    return {
        listing: function () {
            HomeController.Listing.init();
        },
        article: function () {
            HomeController.Article.init();
        }
    };
}(jQuery));
HomeController.Listing = (function ($) {

    var attachEvents = function () {


        $('.loadMoreArticles').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var btnObj = $(this);
            $.fn.LoadBlogArticles({
                offset: $('.ajaxArticles').data('offset'),
                limit: 20,
                viewTotalNonPinnedPost: $('.ajaxArticles').data('existing-nonpinned-count'),
                onSuccess: function (data, textStatus, jqXHR) {
                    if (data.success == 1) {
                        $('.ajaxArticles').data('existing-nonpinned-count', data.existingNonPinnedCount);

                        if (data.articles.length < 20) {
                            $(btnObj).css('display', 'none');
                        }

                        for (var i in data.articles) {
                            data.articles[i]['containerClass'] = 'col-12 col-md-6 col-lg-3';
                            data.articles[i]['templatePath'] = _appJsConfig.templatePath;

                            var ImageUrl = $.fn.image({media: data.articles[i]['featuredMedia'], mediaOptions: {width: 570, height: 470, crop: 'limit'}});
                            data.articles[i]['imageUrl'] = ImageUrl;

                            Handlebars.registerHelper('trimString', function (passedString, len) {
                                var theString = passedString.substring(0, len);

                                if (passedString.length > len) {
                                    theString += '...';
                                }
                                return new Handlebars.SafeString(theString)
                            });

                            var articleTemplate = Handlebars.compile(systemCardTemplate);
                            var article = articleTemplate(data.articles[i]);
                            $('.ajaxArticles').append(article);
                        }

                    }
                },
                beforeSend: function (jqXHR, settings) {
                    $(btnObj).html('<i class="fa fa-refresh fa-spin fa-fw" aria-hidden="true"></i> Please wait...');
                },
                onComplete: function (jqXHR, textStatus) {
                    $(btnObj).html('<i class="fa fa-arrow-down" aria-hidden="true"></i> Load More');
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

HomeController.Article = (function ($) {

    var attachEvents = function () {
        $('.imageModal').on('click', function () {
            $('#articleImages').find('a').eq(0).click();
        });
    };

    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));