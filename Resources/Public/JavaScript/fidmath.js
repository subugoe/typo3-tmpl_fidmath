(function($) {
  $('.menu-trigger').on('click', function () {
    $('.content-container').toggleClass('is-open');
    $(this).toggleClass('active');
  });
})(jQuery);
