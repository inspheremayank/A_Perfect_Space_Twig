var systemCardTemplate = 
        '<div class="{{containerClass}} {{#unless hasMedia}} no-image {{/unless}}">'+
            '<div class="card__view-content channels__1">'+
                '<a href="{{url}}">'+
                    '<div class="favorite">'+
                        '<i class="fa fa-heart-o"></i>'+
                    '</div>'+
                   ' <figure class="image-covered" style="background-image: url(\'{{imageUrl}}\');"></figure>'+
                   ' <h3>{{title}}</h3>'+
                    '<p>{{{excerpt}}}</p>'+
               '</a>'+
            '</div>'+
        '</div>';