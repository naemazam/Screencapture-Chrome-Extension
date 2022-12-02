console.log("Screen Capture Extension Script has loaded")
// Listen to the messages sent by the background script
chrome.runtime.onMessage.addListener(ScreenCaptureExtCB)

// Screen Capture Extension's Callback [Receiving message]
function ScreenCaptureExtCB(msg) {
    console.log(msg)
    if(msg.action == "capture"){
        html2canvas(document.body).then(canvas => {
            var blob = canvas.toBlob((blob) => {
                url = window.URL.createObjectURL(blob)
                window.open(url)
            }, "image/png")
       });
    }
}
