
$(function(){
	var btn_ph_2 = document.getElementById("trigger-ph-2");
	var modal_ph_2 = document.getElementById('modal-ph-2');
	var ph_2_close = document.getElementById("modal-ph-2-close");

	btn_ph_2.onclick = function() {
		modal_ph_2.style.display = "block";
	};

	ph_2_close.onclick = function() {
		modal_ph_2.style.display = "none";
	};

	window.onclick = function(event) {
		if (event.target == modal_ph_2) {
			modal_ph_2.style.display = "none";
		}
	};
});