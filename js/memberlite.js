/**
 * memberlite.js
 */
jQuery( document ).ready( function() {

	//scroll to target links in page
	jQuery('a[href*="#"]:not(.memberlite_tabs a)').on('click', function(event) {

		var target = jQuery( jQuery(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: target.offset().top
			}, 800);
		}
	});

	//switch tab content when clicked
	jQuery('.memberlite_tabbable .memberlite_tabs li a').click(function(e) {

		//don't want to jump to #
		e.preventDefault();

		//which tab was clicked
		var tab, tabarea;
		tab = jQuery(this).attr('href').replace(/#/, '');
		tabarea = jQuery(this).closest('.memberlite_tabbable');

		//hide all tab panes
		tabarea.find('.memberlite_tab_pane').hide();
		tabarea.find('.memberlite_tab_pane').removeClass('memberlite_active');

		//show the active one
		jQuery('#' + tab).show();
		jQuery('#' + tab).addClass('memberlite_active');

		//unstyle tabs
		tabarea.find('.memberlite_tabs li').removeClass('memberlite_active');

		//highlight the active one
		jQuery(this).closest('li').addClass('memberlite_active');

	});

	//check if we should switch tab content on page loads
	jQuery('a[href="' + window.location.hash + '"]').click(); 

});