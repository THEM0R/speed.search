$(function() {

  var search = $('#speed-search');
  var removeClass = true;

  $(".placeholder").click(function ()
  {
    search.toggleClass('open');
    $("input.search").focus();

    removeClass = false;
  });

  search.click(function()
  {
    removeClass = false;
  });

  $(".close").click(function()
  {
    search.removeClass('open');
  });

  $("html").click(function ()
  {
    if (removeClass)
    {
      search.removeClass('open');
    }
    removeClass = true;
  });

});