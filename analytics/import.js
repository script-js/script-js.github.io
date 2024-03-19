function analyticsInit(id) {
  if (document.title) {
    var title = document.title
  } else {
    var title = location.href
  }
  var anframe = document.createElement("iframe")
  anframe.style = "display:none";
  anframe.src = "https://script-js.github.io/analytics/log?metaTitle=" + title + "&metaURL=" + location.href + "&metaID=" + id;
  document.documentElement.appendChild(anframe)
}
