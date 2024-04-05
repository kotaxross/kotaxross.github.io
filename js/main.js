const buttons = document.querySelectorAll("#btn");

buttons.forEach( button  => {
	var card_fb = button.parentNode;
	var card_inner = card_fb.parentNode;
	var card = card_inner.parentNode;
	button.addEventListener('click', () => {
  	card.classList.toggle('flip');
	});
});

const selectNumbers = document.querySelectorAll("#selectNumber");

selectNumbers.forEach(selectNumber => {
	selectNumber.addEventListener("change", function() {
		var selectedNumber = this.value;
		var contents = [];
		var order = selectNumber.parentNode;
		var content1 = order.nextElementSibling;
		var content2 = content1.nextElementSibling;
		var content3 = content2.nextElementSibling;
		var content4 = content3.nextElementSibling;
		var content5 = content4.nextElementSibling;
		var content6 = content5.nextElementSibling;
		var content7 = content6.nextElementSibling;
		var content8 = content7.nextElementSibling;
		var content9 = content8.nextElementSibling;
		contents.push(content1);
		contents.push(content2);
		contents.push(content3);
		contents.push(content4);
		contents.push(content5);
		contents.push(content6);
		contents.push(content7);
		contents.push(content8);
		contents.push(content9);
		for (var i = 0; i < contents.length; i++) {
			contents[i].style.display = "none";
		}
		contents[selectedNumber].style.display = "block";
	});
});
