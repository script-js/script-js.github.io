/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.altKey && event.key === "`") {
      var win1 = window.open("about:blank","","width=500,height=700");
      win1.document.write(atob("PCFET0NUWVBFIEhUTUw+CjxodG1sPgogIDxoZWFkPgogICAgPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL3NjcmlwdC1qcy5naXRodWIuaW8vanMtY3NzL3VydW4uY3NzIj4KICAgIDx0aXRsZT51UnVuPC90aXRsZT4KICA8L2hlYWQ+CiAgPGJvZHk+CiAgICA8aDE+dVJ1biBFeHRlbnNpb25zPC9oMT4KICAgIDxkaXYgY2xhc3M9ImZsZXgiIGlkPSJib3giPgogICAgPC9kaXY+CiAgPC9ib2R5Pgo8L2h0bWw+"));
      win1.runCode = function(element1,iptext) {
        var element = element1.parentElement;
        var ecmd1 = atob(element.querySelectorAll(".eCMD")[0].innerHTML);
        if (iptext) {
          var ecmd = ecmd1.replace("_PROMPTVAL_",iptext)
        } else {
          var ecmd = ecmd1
        }
        eval(ecmd)
        win1.document.body.innerHTML = "Operation Complete. Please close this window."
      }
      var packages = {
       "Runner": ["The Original: run any JavaScript",btoa("eval(_PROMPTVAL_)"),"Type Code:"],
       "Page Editor (On)": ["Edit any page's contents",btoa("document.designMode = 'on'")],
       "Page Editor (Off)": ["Disable Page Editor",btoa("document.designMode = 'off'")],
       "Embed It!": ["Make almost any webpage another","ZG9jdW1lbnQud3JpdGUoJzx0aXRsZT4nICsgZG9jdW1lbnQudGl0bGUgKyAnPC90aXRsZT48aWZyYW1lIHNyYz0iJyArIF9QUk9NUFRWQUxfICsgJyIgc3R5bGU9ImJvcmRlcjogbm9uZTsgd2lkdGg6MTAwJTtoZWlnaHQ6IDEwMCU7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowcHg7dG9wOjBweDsiIGFsbG93ZnVsbHNjcmVlbj4nKQ==","URL:"],
       "Change Title": ["Change the title of a website",btoa("document.title = _PROMPTVAL_"),"Title:"],
       "Canfetti": ["Add confetti to a canvas assignment page",btoa("location.replace(location.href + '?confetti=true')")],
       "PlainPage": ["Remove all stylesheets from websites",btoa("void(document.getElementsByTagName('head')[0].innerHTML = '')")],
       "webdestroyer": ["Destroy webpages with a simple stylesheet","dm9pZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaGVhZCIpWzBdLmlubmVySFRNTCA9ICI8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9J2h0dHBzOi8vY3RleHBlcmltZW50cy5wYWdlcy5kZXYvYm9va21hcmtoYWNrcy9jb2xvcnN3aXRjaGVyLmNzcyc+PHRpdGxlPiIgKyBkb2N1bWVudC50aXRsZSArICIsIGRlc3Ryb3llZCBieSB3ZWJkZXN0cm95ZXI8L3RpdGxlPiIp"],
       "Full Screen Hider, from Hapara Hider": ["Click a button to open a website","ZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIjxicj48YnV0dG9uIHN0eWxlPSdwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDoxcHg7IHRvcDogMXB4Oycgb25jbGljaz0ndWJyb3dzZXJfZnJhbWUucmVxdWVzdEZ1bGxzY3JlZW4oKSc+T3BlbkhTPC9idXR0b24+PGlmcmFtZSBpZD0ndWJyb3dzZXJfZnJhbWUnIHNyYz0nIiArIHByb21wdCgiU2l0ZSB0byBlbWJlZD8iKSArICInIHN0eWxlPSd3aWR0aDoxcHg7aGVpZ2h0OjFweDsnPjwvaWZyYW1lPiIp"],
       "die-Ready": ["Destroy i-Ready","dm9pZChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaGVhZCIpWzBdLmlubmVySFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCJoZWFkIilbMF0uaW5uZXJIVE1MICsgIjxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0naHR0cHM6Ly9jdGV4cGVyaW1lbnRzLnBhZ2VzLmRldi9ib29rbWFya2hhY2tzL2NvbG9yc3dpdGNoZXIuY3NzJz48dGl0bGU+ZGllLVJlYWR5PC90aXRsZT4iKQ=="]
      }
      Object.keys(packages).forEach(function (k) {
        if (packages[k][2]) {
          win1.box.innerHTML = win1.box.innerHTML + '<div class="extension"><h2 class="eTitle">' + k + '</h2><p>' + packages[k][0] + '</p><button class="eBtn" onclick="runCode(this,prompt(' + "'" + packages[k][2] + "'" + '))">Run</button><span class="eCMD">' + packages[k][1] + '</span></div>';
        } else {
          win1.box.innerHTML = win1.box.innerHTML + '<div class="extension"><h2 class="eTitle">' + k + '</h2><p>' + packages[k][0] + '</p><button class="eBtn" onclick="runCode(this)">Run</button><span class="eCMD">' + packages[k][1] + '</span></div>';
        }
      })
  }
})


