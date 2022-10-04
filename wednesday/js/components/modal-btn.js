$(function () {
	$(".register-open").on('click', function () {
		$(".come-in-app").removeClass('show').addClass('hidden');
		$(".register-app").addClass('show').removeClass('hidden');
	})
	$(".come-in-open").on('click', function () {
		$(".come-in-app").addClass('show').removeClass('hidden');
		$(".register-app").removeClass('show').addClass('hidden');
	})
});