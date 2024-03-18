function analyticsFrame(title,url) {
  var anframe = document.createElement("iframe")
  anframe.style = "display:none";
  anframe.src = "https://script-js.github.io/analytics/log?metaTitle=" + title + "&metaURL=" + url;
  document.documentElement.appendChild(anframe)
}

if (!noJAstart) {
  if (document.title) {
    analyticsFrame(document.title,location.href)
  } else {
    analyticsFrame(location.href,location.href)
  }
}
