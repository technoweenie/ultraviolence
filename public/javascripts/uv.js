google.load("jquery",   "1.4.1");
google.load("jqueryui", "1.7.2");

google.setOnLoadCallback(function() {
  var nav = $('#tabs');
  nav.tabs();

  nav.bind('tabsselect', function(event, ui) {
    window.location.hash = ui.tab.hash;
  });

  $('#uv-form').submit(function() {
    var theme = $('#theme').val(),
         data = $(this).serialize();
    $.get("/api", data, function(result) {
      $('#tabs-result').html(themeLink(theme) + result);
      $('#src').text(result);
      nav.tabs('select', 1);
      loadTheme($('#theme').val())
    });
    return false;
  });
});

var loadedThemes = {}

function loadTheme(theme){
  if(!loadedThemes[theme]) {
    var url = "/stylesheets/themes/" + theme + ".css";
    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", url);
    loadedThemes[theme] = true;
    if (typeof fileref!="undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref)
  }
}

function themeLink(theme) {
  var link = "/stylesheets/themes/" + theme + ".css"
  return "<p>Download the <a href=\"" + link + "\" title=\"Please don&apos;t hotlink this :)\">" + theme + "</a> theme.</p>"
}