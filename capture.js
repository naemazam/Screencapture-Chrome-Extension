// Capture Button Event Listener
document.querySelector("#capturePage").addEventListener("click", function(){
    let tab_params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(tab_params, capture)
    
})

// Send Message to the Active Page to trigger screen capturing
function capture(e) {
    chrome.tabs.sendMessage(e[0].id, {action:'capture'})
}