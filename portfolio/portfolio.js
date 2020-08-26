const detailWindows = document.getElementsByClassName("detailWindow");
const anchors = document.getElementsByTagName("a");

function expandDetailWindow(e) {
    switch (e.currentTarget.className) {
        case "detailWindow highlight": 
            e.currentTarget.className = "detailWindow";
            e.currentTarget.childNodes[5].className = "description";
            let element = document.querySelector("div.closeOut");
            e.currentTarget.removeChild(element);
            break;
        
        case "detailWindow":
            e.currentTarget.className = "detailWindow highlight";
            e.currentTarget.childNodes[5].className = "open";
            let closeOut = document.createElement("div");
            closeOut.className = "closeOut";
            e.currentTarget.appendChild(closeOut);
            break;
        
        default:
            console.log("Error occurred")
            break;
    }
}

function preparePage() {
    for (let element in detailWindows) {
        detailWindows[element].onclick = expandDetailWindow;
    }
    for (let element in anchors) {
        anchors[element].onclick = (e) => e.stopPropagation();
    }
}

preparePage();

