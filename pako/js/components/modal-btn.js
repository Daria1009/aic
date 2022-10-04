$(function () {
	$(".open-reg").on('click', function () {
		$(".entrance").removeClass('show').addClass('hidden');
		$(".demo").addClass('show').removeClass('hidden');
	})
	$(".back").on('click', function () {
		$(".entrance").addClass('show').removeClass('hidden');
		$(".demo").removeClass('show').addClass('hidden');
	})
});