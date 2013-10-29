var sizeDiv = 0, hljs, scrolli,windowHeight = $(window).outerHeight(), begin = 0, end = 0, navTop = $('.navigationFixed .top');
function getSize(){
	$('.posts article > div').each(function() {
		sizeDiv += $(this).outerWidth();
	});
	$('.posts > div').width(sizeDiv);
}

getSize();
hljs.initHighlightingOnLoad();
$('video,audio').mediaelementplayer();

$('body').flowtype({
	minimum   : 320,
	maximum   : 1280,
	minFont   : 12,
	maxFont   : 18,
	fontRatio : 30,
	lineRatio : 1.40
});

$('body').janalytics({
	setAccount : "UA-44564462-1"
});

$('.posts > div article > div').on('scroll',function(e){
	var me = $(this);
	var bottom = $(this).find('.bottom_daha');
	bottom.fadeTo(0,0);
	
	var delay = 800;
	var timeout = null;
	clearTimeout(timeout);
	timeout = setTimeout(function(e){
		bottom.css({'top': $(window).outerHeight() + me.scrollTop() - 58});
		if(bottom.css('opacity') == 0){
			bottom.fadeTo(300,1);
		}
		timeout = null;
	},delay);
});

paceOptions = {
  ajax: false, // Monitors all ajax requests on the page
  document: false, // Checks for the existance of specific elements on the page
  eventLag: false // Checks the document readyState
};

$(window).scroll(function(event) {
	var mathem = window.pageYOffset;
	if(mathem > 200){
		navTop.addClass('opacity');
	}else if(mathem < 200){
		navTop.removeClass('opacity');
	}
});

navTop.on('click',function(e){
	e.preventDefault();
	$('html,body').animate({scrollTop: 0},800,'easeInOutExpo');
})
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-24021649-2', 'da-ha.be');
ga('send', 'pageview');