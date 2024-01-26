# uBlock Run
from EXT-REMOVER by 3kh0

1. Make sure you have [uBlock Origin](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm) installed.
2. Go to the extension's settings (ublock icon > cog icon)
3. Under the settings tab, check the "I am an advanced user" box, then click on the small cog icon.
4. Find `userResourcesLocation` and change it from `unset` to `https://raw.githubusercontent.com/3kh0/ext-remover/main/ublockExec.js`

5. Go to the My filters tab of the settings and add `*##+js(execute_script.js)`

7. Press ctr+alt+~ on the page and type some JavaScript code. You can find some useful commands below.
8. Click OK and enjoy the results.

## Helpful Commands

- Page Editor:
     ```
     document.designMode = 'on'
     ```
     ```
     document.designMode = 'off'
     ```
- Get Favicon:
     ```
     alert(document.querySelector('link[rel~="icon"]').href)
     ```
- Get Title:
     ```
     alert(document.title)
     ```
- Hapara Hider: Change Title:
     ```
     document.title = prompt('Title?')
     ```
## Hapara Focus Session Bypass
To make sure you can access it, you can open the Text app and paste it in. Make sure to save. Hapara cannot interact with this app, so you can use it to easily copy and paste.
```
document.write('<title>' + document.title + '</title><iframe src="' + prompt("URL?") + '" style="border: none; width:100%;height: 100%;position:absolute;left:0px;top:0px;">')
```
### With Full Screen Hider
```
document.write('<title>' + document.title + '</title><iframe src="https://hapara-hider.pages.dev/ssblock?url=' + prompt("URL?") + '" allowfullscreen style="border: none; width:100%;height: 100%;position:absolute;left:0px;top:0px;">')
```
