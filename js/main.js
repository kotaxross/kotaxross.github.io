const buttons = document.querySelectorAll("#btn");
const card = document.getElementById("card"); 

buttons.forEach( button  => {
	button.addEventListener('click', () => {
  	card.classList.toggle('flip');
	});
});
