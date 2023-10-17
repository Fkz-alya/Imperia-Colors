const alertWrap = document.getElementById('alert-wrapper');
const alerBtn = document.getElementById('alert-btn');

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alertWrap.classList.add('appear');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
alerBtn.addEventListener('click', () => alertWrap.classList.remove('appear'))


document.addEventListener('click', event => {
	const click = event.composedPath().includes(alertWrap);
	if (!click) {
		alertWrap.classList.remove('appear')
	}
})