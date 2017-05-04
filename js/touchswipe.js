jQuery(document).bind('cbox_open', function(){
  jQuery("#colorbox").swipe( {
    //Generic swipe handler for all directions
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      jQuery.colorbox.prev();
    },
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      jQuery.colorbox.next();
    },
    //The number of pixels that the user must move their finger by before it is considered a swipe. Default is 75px :
    threshold:75
  });
});
