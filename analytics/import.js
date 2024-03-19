function analyticsInit(id) {
  var anframe = document.createElement("iframe")
  anframe.style = "display:none";
  anframe.src = "https://script-js.github.io/analytics/log?metaID=" + id;
  document.documentElement.appendChild(anframe)
}
