$(function() {
	$('.js-trackevent').on('click', function (e) {
		var href = $(this).attr('href');
		
		ga('send', 'event', 'outbound', 'click', href, {
			'hitCallback': function () {
				document.location = href;
			}
		});
		
		e.preventDefault();
	});
});