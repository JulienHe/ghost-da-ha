var opts = {
    pinterest: {
        height: 525
    },
    google: {
        height: 400
    }
};


$('ul.share').on('click', 'li a', function(event) {
    if(!$(this).hasClass('mail')){
        event.preventDefault();
        var link = $(this),
        type = link.attr('class');
        window.open( link.attr('href'), '_blank', 'width=560,height=' + (opts[type] && opts[type].height || 450) );
        return false;
    }
});