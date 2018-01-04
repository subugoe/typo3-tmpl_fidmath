(function ($) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.to-top').fadeIn();
    } else {
      $('.to-top').fadeOut();
    }
  });

  $('.to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

})(jQuery);

$(document).ready(function () {
  if (document.getElementById('pz2-field-all')) {
    document.getElementById('header-search-form_input').value = document.getElementById('pz2-field-all').getAttribute('value');
  }

  if (document.querySelector('.tx-zamn-pi1')) {
    var position = document.querySelector('.tx-zamn-pi1 h4:nth-of-type(2)');

    var personList = $('.tx-zamn-pi1 ol:nth-of-type(2)').children('li');
    var alphabetList = document.createElement('div');
    alphabetList.setAttribute('class', 'alphabet-list');

    var doolist = [];
    $.each(personList, function (index, value) {
      var letter = $(value).children('a').text()[0];
      var lister = {
        'letter': letter,
        'position': index
      };

      if (doolist.filter(function (e) {
            return e.letter === letter
          }).length === 0) {
        doolist.push(lister);
      }
    });

    doolist.forEach(function (a, b) {
      var alink = document.createElement('a');
      alink.setAttribute('href', '#' + a.position);
      alink.setAttribute('class', 'alphabet-list-element -' + a.position);
      var alinkvalue = document.createTextNode(a.letter);

      alink.appendChild(alinkvalue);

      alphabetList.appendChild(alink);
    });

    $(position).append(alphabetList);
  }


  $('.alphabet-list a').click(function (e) {
    var targetClass = $(e.target).attr('href').replace('#', '');

    var targetElement = $('.tx-zamn-pi1 ol:nth-of-type(2) li:eq(' + targetClass + ')');

    $('html, body').animate({
      scrollTop: $(targetElement).offset().top
    }, 250);

    return false;
  });
});
