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
      loadTheme($('#theme').val())
    })
    return false;
  });
});

var loadedThemes = {}

function loadTheme(theme){
  if(!loadedThemes[theme]) {
    var url = "/stylesheets/themes/" + theme + ".css";
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", url)
    loadedThemes[theme] = true;
    if (typeof fileref!="undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref)
  }
}