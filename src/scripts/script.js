$(document).ready(function(){
	$('.arrow--right').click(function(){
		$('.h-notice').toggleClass('h-notice--main');
		$('.notices-list').toggleClass('notices-list--main')
		$('.arrow--right>i').toggleClass('arrow--left');
		$('.h-notice__all').toggleClass('h-notice__all--main');
	});
});