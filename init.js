/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      var win1 = window.open("about:blank","","width=500,height=700");
      win1.document.write(atob("PCFET0NUWVBFIEhUTUw+CjxodG1sPgo8aGVhZD4KPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSJodHRwczovL3NjcmlwdC1qcy5naXRodWIuaW8vanMtY3NzL3VydW4uY3NzIiAvPgo8c2NyaXB0IHNyYz0iaHR0cHM6Ly9zY3JpcHQtanMuZ2l0aHViLmlvL2pzLWNzcy91UGFja2FnZXMuanMiPjwvc2NyaXB0Pgo8dGl0bGU+dVJ1bjwvdGl0bGU+CjwvaGVhZD4KPGJvZHk+CjxoMT51UnVuIEV4dGVuc2lvbnM8L2gxPgo8ZGl2IGNsYXNzPSJmbGV4IiBpZD0iYm94Ij4KPC9kaXY+CjxkaXYgb25sb2FkPSJldmFsKGF0b2IoJ1puVnVZM1JwYjI0Z2NuVnVRMjlrWlNobGJHVnRaVzUwTVNrZ2UzWmhjaUJsYkdWdFpXNTBJRDBnWld4bGJXVnVkREV1Y0dGeVpXNTBSV3hsYldWdWRIWmhjaUJsWTIxa0lEMGdZWFJ2WWlobGJHVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSWk1bFEwMUVJaWxiTUYwdWFXNXVaWEpJVkUxTUtXVjJZV3dvWldOdFpDbDlablZ1WTNScGIyNGdjbVZ0YjNabFJYaDBaVzV6YVc5dUtHVnNaVzFsYm5ReEtTQjdaV3hsYldWdWRERXVhVzV1WlhKSVZFMU1JRDBnSWxObGJHVmpkQ0k3Wld4bGJXVnVkREV1YjI1amJHbGpheUE5SUdaMWJtTjBhVzl1S0NrZ2UyRmtaRVY0ZEdWdWMybHZiaWgwYUdsektYMTJZWElnWld4bGJXVnVkQ0E5SUdWc1pXMWxiblF4TG5CaGNtVnVkRVZzWlcxbGJuUjJZWElnWlc1aGJXVWdQU0JsYkdWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29JaTVsVkdsMGJHVWlLVnN3WFM1cGJtNWxja2hVVFV4a1pXeGxkR1VnYzJWc1pXTjBaV1JiWlc1aGJXVmRmVTlpYW1WamRDNXJaWGx6S0hCaFkydGhaMlZ6S1M1bWIzSkZZV05vS0daMWJtTjBhVzl1SUNocktTQjdZbTk0TG1sdWJtVnlTRlJOVENBOUlHSnZlQzVwYm01bGNraFVUVXdnS3lBblBHUnBkaUJqYkdGemN6MGlaWGgwWlc1emFXOXVJajQ4YURJZ1kyeGhjM005SW1WVWFYUnNaU0krSnlBcklHc2dLeUFuUEM5b01qNDhjRDRuSUNzZ2NHRmphMkZuWlhOYmExMWJNRjBnS3lBblBDOXdQanhpZFhSMGIyNGdZMnhoYzNNOUltVkNkRzRpSUc5dVkyeHBZMnM5SW5KMWJrTnZaR1VvZEdocGN5a2lQbEoxYmp3dlluVjBkRzl1UGp4emNHRnVJR05zWVhOelBTSmxRMDFFSWo0bklDc2djR0ZqYTJGblpYTmJhMTFiTVYwZ0t5QW5QQzl6Y0dGdVBqd3ZaR2wyUGlkOUtRPT0nKSI+PC9kaXY+CjwvYm9keT4KPC9odG1sPg=="));
      win1.runCode = function(element1) {
        var element = element1.parentElement;
        var ecmd = atob(element.querySelectorAll(".eCMD")[0].innerHTML);
        eval(ecmd);
      }
      Object.keys(packages).forEach(function (k) {
        win1.box.innerHTML = win1.box.innerHTML + '<div class="extension"><h2 class="eTitle">' + k + '</h2><p>' + packages[k][0] + '</p><button class="eBtn" onclick="runCode(this)">Run</button><span class="eCMD">' + packages[k][1] + '</span></div>';
      })
      var interval1 = setInterval(function() {
        var codeToExecute = win1.window.cte;
        if (codeToExecute) {
          clearInterval(interval1);
          eval(codeToExecute);
          win1.close()
        }
      },1000)
  }
})


