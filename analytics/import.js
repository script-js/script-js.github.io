function analyticsInit(id) {
  var anframe = document.createElement("iframe")
  anframe.style = "display:none";
  anframe.src = "https://script-js.github.io/analytics/log?metaID=" + id + "&metaPage=" + location.href.split(location.host)[1];
  document.documentElement.appendChild(anframe)
}
