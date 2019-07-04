
$(function(){
	var $modal_trigger =  $('.ph-modal-trigger');
	var $modal_close = $('.ph-modal-close');
	var $modal_item = $('.ph-modal-item');

	$modal_trigger.click(function () {
		var target_id = '#' + $(this).attr('data-target');
		console.log(target_id);
		$(target_id).show();
		$.each($('.ph-modal-item-container'), function (index, value) {
			$(value).hide()
		});
		if (target_id === '#modal-ph-1') {
			$('div[data-content="ph-1-indiana"]').addClass('ph-modal-item-active');
			$('#ph-1-indiana').show();
			$("body").addClass("modal-open");
		} else if (target_id === '#modal-ph-2') {
			$('div[data-content="ph-2-tlacotalpan"]').addClass('ph-modal-item-active');
			$('#ph-2-tlacotalpan').show();
			$("body").addClass("modal-open");
		} else if (target_id === '#modal-ph-3') {
			$('div[data-content="ph-3-concepcion"]').addClass('ph-modal-item-active');
			$('#ph-3-concepcion').show();
			$("body").addClass("modal-open");
		}
	});

	$modal_close.click(function () {
		var parent = $(this).parent().parent();
		parent.hide()
		$modal_item.each(function (key, value) {
			$(value).removeClass('ph-modal-item-active');
		});
		$("body").removeClass("modal-open");
	});

	$modal_item.click(function () {
		$modal_item.each(function (key, value) {
			$(value).removeClass('ph-modal-item-active');
		});
		$(this).addClass('ph-modal-item-active');
		var target_id = '#' + $(this).attr('data-content');
		$(target_id).show();
	});

	$.each($modal_item, function (index, value) {
		$(value).click(function () {
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