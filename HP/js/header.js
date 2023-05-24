jQuery(function(){

	var header = jQuery('#header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			header.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			header.removeClass('invert');
		}
	});

    var name_header = jQuery('#name_header');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			name_header.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			name_header.removeClass('invert');
		}
	});

    var header_img = jQuery('#header_img');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			header_img.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			header_img.removeClass('invert');
		}
	});

    var drawer_open = jQuery('#drawer_open');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			drawer_open.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			drawer_open.removeClass('invert');
		}
	});

    var nav_content = jQuery('#nav_content');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			nav_content.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			nav_content.removeClass('invert');
		}
	});

	var position = jQuery('#position');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 0) { //スクロールが10pxを越えたら
			position.addClass('invert');
		} else { //スクロールが500pxを越えなければ
			position.removeClass('invert');
		}
	});

});

