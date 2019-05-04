
$(function(){
	var btn_ph_1 = document.getElementById("trigger-ph-1");
	var mobile_btn_ph_1 = document.getElementById("mobile-trigger-ph-1");
	var modal_ph_1 = document.getElementById('modal-ph-1');
	var ph_1_close = document.getElementById("modal-ph-1-close");

	btn_ph_1.onclick = function() {
		modal_ph_1.style.display = "block";
		$('#ph-1-indiana').show()
	};

	ph_1_close.onclick = function() {
		modal_ph_1.style.display = "none";
	};

	window.onclick = function(event) {
		if (event.target === modal_ph_1) {
			modal_ph_1.style.display = "none";
		}
	};

	var btn_ph_2 = document.getElementById("trigger-ph-2");
	var mobile_btn_ph_2 = document.getElementById("mobile-trigger-ph-2");
	var modal_ph_2 = document.getElementById('modal-ph-2');
	var ph_2_close = document.getElementById("modal-ph-2-close");

	btn_ph_2.onclick = function() {
		modal_ph_2.style.display = "block";
		$('#ph-2-tlacotalpan').show()
	};

	ph_2_close.onclick = function() {
		modal_ph_2.style.display = "none";
	};

	window.onclick = function(event) {
		if (event.target === modal_ph_2) {
			modal_ph_2.style.display = "none";
		}
	};

	var btn_ph_3 = document.getElementById("trigger-ph-3");
	var mobile_btn_ph_3 = document.getElementById("mobile-trigger-ph-3");
	var modal_ph_3 = document.getElementById('modal-ph-3');
	var ph_3_close = document.getElementById("modal-ph-3-close");

	btn_ph_3.onclick = function() {
		modal_ph_3.style.display = "block";
		$('#ph-3-comercio').show();
	};

	ph_3_close.onclick = function() {
		modal_ph_3.style.display = "none";
	};

	window.onclick = function(event) {
		if (event.target === modal_ph_3) {
			modal_ph_3.style.display = "none";
		}
	};

	$.each($('.ph-modal-item'), function (index, value) {
		$(value).on('click', function () {
			var link_id = value.getAttribute("data-content");
			$.each($('.ph-modal-item-container'), function (index, value) {
				var content_id = value.id;
				var element = $(value);
				if (link_id === content_id) {
					element.show()
				} else {
					element.hide()
				}
			});
		})
	});

});