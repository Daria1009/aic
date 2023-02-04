$(function () {
	$(".open-reg").on('click', function () {
		$(".entrance").removeClass('show').addClass('hidden');
		$(".demo").addClass('show').removeClass('hidden');
	})
	$(".back").on('click', function () {
		$(".entrance").addClass('show').removeClass('hidden');
		$(".demo").removeClass('show').addClass('hidden');
	})

	document.querySelectorAll('.tariffs__card').forEach((e) => {
		let name = e.querySelector('.tariffs__name').innerHTML.toUpperCase();

		e.querySelector('.btn').addEventListener('click', () => {
			document.querySelector('.form__subtitle span').innerHTML = '“' + name + '”';
		});
	});
});