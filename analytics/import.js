function analyticsInit(id,apiKey) {
  var anframe = document.createElement("iframe")
  anframe.style = "display:none";
  anframe.src = "https://script-js.github.io/analytics/log?metaID=" + id + "&metaPage=" + location.href.split(location.host)[1].split("?")[0].split("#")[0];
  document.documentElement.appendChild(anframe)
}
