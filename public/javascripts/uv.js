google.load("jquery",   "1.4.1");
google.load("jqueryui", "1.7.2");

google.setOnLoadCallback(function() {
  var nav = $('#tabs')
  nav.tabs();
  $('#uv-form').submit(function() {
    var data = $(this).serialize();
    $.post("/format", data, function(result) {
      $('#tabs-result').html(result);
      $('#src').text(result);
      nav.tabs('select', 1);
    })
    return false;
  });
});